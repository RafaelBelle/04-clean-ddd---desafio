import { Slug } from "./value-objets/slug";
import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Optional } from "@/core/types/optional";

interface SaleProps {
  productId: UniqueEntityID
  quantity: number
  price?: number
  createdAt: Date
}

export class Sale extends Entity<SaleProps> {
  get productId() {
    return this.props.productId;
  }

  get price() {
    return this.props.price;
  }

  get quantity() {
    return this.props.quantity;
  }

  set price(price: number) {
    this.props.price = price;
  }

  set quantity(quantity: number) {
    this.props.quantity = quantity;
  }

  static create(props: Optional<SaleProps, 'createdAt'>, id?: UniqueEntityID) {
    const sale = new Sale({
      ...props,
      createdAt: new Date()
    }, id);
    
    return sale;
  }
}