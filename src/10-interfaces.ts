type Sizes = 'S' | 'M' | 'L' | 'XL';
/*
type Product = {
  id: string | number;
  title: string;
  createdAd: Date;
  stock: number;
  size?: Sizes;
}
*/

interface Product {
  id: string | number;
  title: string;
  createdAd: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'p1',
  createdAd: new Date(2021, 1, 1),
  stock: 5,
});

const addProduct = (data: Product) => {
  products.push(data);
}
