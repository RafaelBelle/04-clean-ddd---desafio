import { Slug } from "./value-objets/slug";
import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Optional } from "@/core/types/optional";

interface ProductProps {
  id: UniqueEntityID
  stock?: number
  price?: number
  size?: string
  color?: string
  minimumStock?: number
  createdAt: Date
  updatedAt?: Date
}

export class Product extends Entity<ProductProps> {
  get id() {
    return this.props.id;
  }

  get stock() {
    return this.props.stock;
  }

  get price() {
    return this.props.price;
  }

  get size() {
    return this.props.size;
  }

  get color() {
    return this.props.color;
  }

  get minimumStock() {
    return this.props.minimumStock;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  set stock(stock: number) {
    this.props.stock = stock;
  }

  set price(price: number) {
    this.props.price = price;
  }

  set color(color: string) {
    this.props.color = color;
  }

  set size(size: string) {
    this.props.size = size;
  }

  set minimumStock(minimumStock: number) {
    this.props.minimumStock = minimumStock;
  }

  static create(props: Optional<ProductProps, 'createdAt'>, id?: UniqueEntityID) {
    const product = new Product({
      ...props,
      createdAt: new Date()
    }, id);
    
    return product;
  }
}