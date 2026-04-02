import { Product } from "../models/Product.js";


export function calculateTax(product: Product): number {
    const priceWithTax = product.getPriceWithTax();
    return priceWithTax;
}