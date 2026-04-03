# Inventory Tracker

A simple object-oriented inventory tracker using TypeScript. The tracker distinguishes between PhysicalProduct and DigitalProduct, calculates applicable taxes, and manages inventory using modules.

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [Reflections](#reflections)

## Overview

Reinforcing key object-oriented programming concepts including inheritance, encapsulation, abstraction, and polymorphism, while using TypeScript features such as type annotations and interfaces.

## Features
- Physical and digital product tracking
- Applicable tax calculations
- Modular file structure

## Technologies
- TypeScript
- Node.js

## Author

Zac White

## Acknowledgments
[MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of): for...of - loop 

[MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed): Number.prototype.toFixed()

## Reflections

Building this inventory tracker gave me hands-on experience with TypeScript's object-oriented programming features in a real-world context. Structuring the codebase around a base `Product` class with `PhysicalProduct` and `DigitalProduct` subclasses helped me understand how inheritance reduces code duplication. I only had to define shared properties like `sku`, `name`, and `price` once, and both subclasses inherited them automatically. 

Working with access modifiers and understanding when to use public, private, and protected was a key takeaway. It quickly became apparent how encapsulation protects a class's internal state and makes the codebase more reliable and easier to maintain. 

Setting up a modular file structure with `import` and `export` was difficult at first, but working through those errors taught me a great deal about how TypeScript modules work. I also gained practical experience configuring the `tsconfig.json` and `package.json` files for a Node.js project. 

I thoroughly enjoyed building this project and intend to add the `DiscountableProduct` interface sorting module that organizes products by price, or name in the future. 