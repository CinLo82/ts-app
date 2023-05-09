import {faker} from '@faker-js/faker';
import { addProduct, products, updateProduct } from "./products/product.service";

for(let index = 0; index < 50; index++) {
  addProduct({
    categoryId: faker.datatype.uuid(),
    color: faker.color.human(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    isNew: faker.datatype.boolean(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    stock: faker.datatype.number({min: 10, max: 100}),
    price: faker.commerce.price(),
    tags: faker.helpers.arrayElements(['tag1', 'tag2', 'tag3'], 2),
    title: faker.commerce.productName(),
  });
}


console.log(products);
const product = products[0];
updateProduct(product.id, {
  title: 'New title',
  stock: 80,
});
