import { Product } from "./product.model";

export interface CreateProductDto extends
Omit<Product, 'id' | 'createdAt' | 'updateAt' | 'category' > {
  categoryId: string;
}

type example = Pick<Product, 'color' | 'description'>;


export interface UpdateProductDto extends
Partial<CreateProductDto> {

}

type example2 = Required<Product>; // deja todos los campos obligtorios
