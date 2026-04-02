import { Product } from "./Product.js";

export class PhysicalProduct extends Product {
    weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }

    displayDetails(): string {
        return `${this.name} (SKU: ${this.sku}) costs $${this.price} and weighs ${this.weight} kg`;
    }

    getPriceWithTax(): number {
        return this.price * 1.10;
    }

    get formattedWeight(): string {
        return `${this.weight} kg`
    }
}