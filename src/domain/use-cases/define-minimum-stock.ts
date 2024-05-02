import { UniqueEntityID } from "../../core/entities/unique-entity-id";
import { Product } from "../entities/product";
import { ProductsRepository } from "../repositories/products-repository";

interface DefineMiminumStockUseCaseRequest {
  productId: string;
  minimumStock: number;
}

export class DefineMiminumStockUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({ productId, minimumStock }: DefineMiminumStockUseCaseRequest) {
    const product = Product.create({
      id: new UniqueEntityID(productId),
      minimumStock: minimumStock
    });

    const searchedProduct = await this.productsRepository.search(product);

    searchedProduct.minimumStock = minimumStock;

    return searchedProduct;
  }
}