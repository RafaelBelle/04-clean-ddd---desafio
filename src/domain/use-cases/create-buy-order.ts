import { UniqueEntityID } from "../../core/entities/unique-entity-id";
import { Product } from "../entities/product";
import { ProductsRepository } from "../repositories/products-repository";

interface CreateBuyOrderUseCaseRequest {
  productId: string;
  quantity: number;
}

export class SalesAndStockHistoryUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({ productId, quantity }: CreateBuyOrderUseCaseRequest) {
    
  }
}