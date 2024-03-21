import { Button, Card, CardActions, CardContent, Skeleton, Typography } from '@mui/material';
import { Product } from '../../../types/Product';

export type ProductCardProps = {
  product: Product;
};
const ProductCard = (props: ProductCardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
          {props.product.title}
        </Typography>
        <Typography variant="h6">${props.product.price}</Typography>
        <Typography variant="body1" sx={{ height: 100, maxHeight: 100, minHeight: 100 }}>
          {props.product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" sx={{ marginLeft: 'auto' }}>
          Buy
        </Button>
      </CardActions>
    </Card>
  );
};
export const ProductCardSkeleton = () => {
  return (
    <Card>
      <CardContent>
        <Skeleton variant="text" height={40} width={120} />
        <Skeleton variant="text" height={40} width={80} />
        <Skeleton variant="text" height={90} />
      </CardContent>
      <CardActions>
        <Skeleton variant="rectangular" height={32} width={115} sx={{ marginLeft: 'auto' }} />
      </CardActions>
    </Card>
  );
};

export default ProductCard;
