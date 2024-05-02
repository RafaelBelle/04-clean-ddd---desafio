import { UniqueEntityID } from "../../core/entities/unique-entity-id";
import { Product } from "../entities/product";
import { ProductsRepository } from "../repositories/products-repository";

interface TrackProductUseCaseRequest {
  productId: string;
  size?: string;
  color?: string;
}

export class TrackProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({ productId, size, color }: TrackProductUseCaseRequest) {
    const product = Product.create({
      color,
      id: new UniqueEntityID(productId),
      size: size
    });

    const seachedProduct = await this.productsRepository.search(product);

    return seachedProduct;
  }
}