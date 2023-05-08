import { addProduct } from "./products/product.service";

addProduct({
  id: '1',
  title: 'p1',
  createdAd: new Date(2021, 1, 1),
  stock: 5,
});
