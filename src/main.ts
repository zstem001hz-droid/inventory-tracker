import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";
import { calculateTax } from "./utils/taxCalculator.js";

const pproduct = new PhysicalProduct("SKU:CFI-7019 B01","PlayStation 5 Pro", 749, 3.1);
const dproduct = new DigitalProduct("SKU:CFI-1015A", "PlayStation 5 Digital", 499, 825000);

const products = [pproduct, dproduct];

for (const product of products) {
    console.log(product.displayDetails());
    console.log(calculateTax(product));
}