import { Product } from "./Product.js";

export class DigitalProduct extends Product {
    fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }

    displayDetails(): string {
        return `${this.name} (SKU: ${this.sku}) costs $${this.price} and ${this.fileSize} MB`;
    }

    getPriceWithTax(): number {
        return this.price;
    }

    get formattedFileSize(): string {
        return `${this.fileSize} "5 MB"`
    }
}