import { ReactNode, useCallback, useEffect, useState } from 'react';

export type ListBuilderProps<ListItemType> = {
  renderListItemSkeleton: (key: number) => ReactNode;
  maxListItemSkeleton: number;
  renderListContainer: (list: ReactNode) => ReactNode;
  renderListItem: (listItemData: ListItemType) => ReactNode;
  getItems: () => Promise<ListItemType[]>;
  pagination?: {
    limit: number;
    type: 'infinite-scroll' | 'numbered-pagination';
  };
};
export const ListBuilder = <ListItemType,>(
  props: ListBuilderProps<ListItemType>
) => {
  const [listItems, setListItems] = useState<ListItemType[] | null>(null);

  // Only in exceptional cases where it is really necessary, use de-structuring
  const { getItems } = props;

  const fetch = useCallback(async () => {
    const listItemsData = await getItems();
    setListItems(listItemsData);
  }, [getItems]);

  useEffect(() => {
    fetch();
  }, [props.getItems, fetch]);

  return props.renderListContainer(
    listItems
      ? listItems.map((item) => props.renderListItem(item))
      : [...new Array(props.maxListItemSkeleton)].map((item) =>
          props.renderListItemSkeleton(item)
        )
  );
};
