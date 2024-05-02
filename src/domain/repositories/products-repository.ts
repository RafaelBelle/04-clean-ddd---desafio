import { Product } from "../entities/product";

export interface ProductsRepository {
  create(product: Product): Promise<void>;
  search(product: Product): Promise<Product>;
  search(startDate: Date, endDate: Date): Promise<Product[]>;
  update(product: Product): Promise<Product>;
}