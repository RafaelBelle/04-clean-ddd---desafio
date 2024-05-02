import { UniqueEntityID } from "../../core/entities/unique-entity-id";
import { Sale } from "../entities/sale";
import { ProductsRepository } from "../repositories/products-repository";

interface SalesAndStockHistoryUseCaseRequest {
  startDate: Date;
  endDate: Date;
}

export class SalesAndStockHistoryUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({ startDate, endDate }: SalesAndStockHistoryUseCaseRequest) {
    
  }
}