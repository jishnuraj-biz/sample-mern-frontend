import { ReactNode, useCallback, useEffect, useState } from 'react';

export type GetListItemRequest<FilterTypes = undefined> = {
  searchKeyword?: string;
  skip?: number;
  limit?: number;
  filters?: FilterTypes | unknown;
};

export type TheAmazingListBuilderProps<ListItemType, FilterTypes> = {
  listID?: string;
  getItems: (args?: GetListItemRequest<FilterTypes>) => Promise<ListItemType[]> | null;
  createContainer: (listItems: ReactNode) => ReactNode;
  skeletonsCount?: number;
  renderListItemSkeleton: (key: string) => ReactNode;
  renderListItem: (item: ListItemType) => ReactNode;
  renderErrorMessage: (error: Error) => ReactNode;
  limit?: number;
  height: string | number;
  scrollThreshold?: number;
};

const TheAmazingListBuilder = <ListItemType, FilterTypes = undefined>(props: TheAmazingListBuilderProps<ListItemType, FilterTypes>) => {
  console.log(props);
  const [listItems, setListItems] = useState<ListItemType[] | null | Error>(null);
  const [skip, setSkip] = useState(0);
  const [fetchStatus, setFetchStatus] = useState<'never-fetched' | 'fetching' | 'idle' | 'reached-end'>('never-fetched');

  // Only in exceptional cases where it is really necessary, use de-structuring
  const { getItems } = props;

  const fetchItems = useCallback(
    async ({ skip }: { skip: number }) => {
      try {
        setFetchStatus('fetching');
        const newItems = await getItems({ skip, limit: props.limit });
        if (!newItems) return;
        setListItems((items) => (items instanceof Array ? [...items, ...newItems] : newItems));
        setSkip((skip) => skip + (props.limit ?? 0));
        setFetchStatus(props.limit && newItems.length < props.limit ? 'reached-end' : 'idle');
      } catch (error) {
        setListItems(new Error(`${error}`));
        setFetchStatus('idle');
      }
    },
    [getItems, props.limit]
  );

  useEffect(() => {
    fetchItems({ skip: 0 });
  }, [getItems, props.limit, fetchItems]);

  return (
    <div
      style={{ height: props.height, overflowX: 'auto' }}
      onScroll={async (e) => {
        if (['fetching', 'reached-end'].includes(fetchStatus)) return;
        const { scrollTop, clientHeight, scrollHeight } = e.target as HTMLElement;
        if (scrollTop + clientHeight >= scrollHeight - (props.scrollThreshold ?? 200)) {
          console.log('Fetch more!');
          fetchItems({ skip });
        }
      }}
    >
      {props.createContainer(
        <>
          {listItems === null ? null : listItems instanceof Error ? (
            props.renderErrorMessage ? (
              props.renderErrorMessage(listItems)
            ) : (
              <>{listItems.message}</>
            )
          ) : (
            listItems.map((item) => props.renderListItem(item))
          )}
          {fetchStatus === 'fetching' &&
            [...new Array(props.skeletonsCount ?? 4)].map((_, index) =>
              props.renderListItemSkeleton(`${props.listID ? `${props.listID}-` : ''}${index}`)
            )}
        </>
      )}
    </div>
  );
};

export default TheAmazingListBuilder;
