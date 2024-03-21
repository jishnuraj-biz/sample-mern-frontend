import { Container, Grid } from '@mui/material';
import { CommonPageLayout } from '@my-arc/components';
import TheAmazingListBuilder from '@my-arc/components/src/TheAmazingListBuilder';
// import TaskService from '../../services/Task.service';
import { Product } from '../../types/Product';
import ProductService from '../../services/Product.service';
import ProductCard, { ProductCardSkeleton } from './components/ProductCard';

const HomePage = () => {
  return (
    <CommonPageLayout title="Home Page">
      <Container>
        {/* <ListBuilder<Task>
          getItems={TaskService.getAll}
          renderListContainer={(list) => (
            <Grid container spacing={3}>
              {list}
            </Grid>
          )}
          renderListItem={(data) => (
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <TaskCard task={data} />
            </Grid>
          )}
          renderListItemSkeleton={() => (
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <TaskCardSkeleton />
            </Grid>
          )}
          maxListItemSkeleton={8}
          pagination={{
            limit: 20,
            type: 'infinite-scroll',
          }}
        /> */}
        <div
          style={{
            border: '1px solid green',
            display: 'inline-block',
            padding: '40px',
          }}
        >
          <TheAmazingListBuilder<Product>
            //
            // getItems={TaskService.getAll}
            getItems={ProductService.getAll}
            createContainer={(listItems) => <ul style={{ marginLeft: 40 }}>{listItems}</ul>}
            renderListItemSkeleton={(key) => <li key={key}>-------</li>}
            renderListItem={(item) => (
              <li key={item.id}>
                {item.id} {item.title}
              </li>
            )}
            renderErrorMessage={(error) => (
              <div
                style={{
                  border: '1px solid red',
                  display: 'inline-block',
                  // padding: '10px',
                }}
              >
                {error.message}
              </div>
            )}
            limit={10}
            height={'15vh'}
          />
        </div>
        <br />
        <br />
        <br />
        {/* <div
          style={{
            border: '1px solid green',
            display: 'inline-block',
            padding: '40px',
          }}
        > */}
        <TheAmazingListBuilder<Product>
          getItems={ProductService.getAll}
          createContainer={(listItems) => (
            <Grid container spacing={3}>
              {listItems}
            </Grid>
          )}
          skeletonsCount={10}
          renderListItemSkeleton={(key) => (
            <Grid item key={key} xs={12} md={6} lg={4} xl={3}>
              <ProductCardSkeleton />
            </Grid>
          )}
          renderListItem={(item) => (
            <Grid item key={item.id} xs={12} md={6} lg={4} xl={3}>
              <ProductCard product={item} />
            </Grid>
          )}
          renderErrorMessage={(error) => (
            <div
              style={{
                border: '1px solid red',
                display: 'inline-block',
                // padding: '10px',
              }}
            >
              {error.message}
            </div>
          )}
          limit={20}
          height={'80vh'}
          scrollThreshold={200}
        />
        <br />
        {/* </div> */}
      </Container>
    </CommonPageLayout>
  );
};

export default HomePage;
