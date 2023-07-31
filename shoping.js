// // Let’s bring some inheritance to our shopping application.We would like to
//  have 3 kinds of products.Each kind should have different features for:
// // All these products should be implemented as separate classes by extending the Product class.
//  Each should have a print() method as well.It should print the name of the product,
//   its type and its respective features(from those specified above).
//   There should also be a print() method in the Shopping Cart class.
//    It should print all the products currently added.Your shopping cart's
//     method should display all the products and use the print() methods too.


class Product {
    constructor(name, price, description) {
        this.name = name
        this.price = price
        this.description = description
    }
}

class ShopingCart extends Product {
    constructor(name, price) {
        super(name, price)
        this.products = [];
        this.balance = 100;
    }


    addProduct(product) {
        this.products.push(product)
    }

    print() {
        console.log("Products in cart:");
        this.products.forEach(product => console.log(product.print()));
    }

    getTotal() {
        let totalPrice = 0;
        this.products.forEach(product => totalPrice += parseFloat(product.price));
        return totalPrice;
    }

    getCurrentBudget() {
        let totalPrice = 0;
        this.products.forEach(product => totalPrice += parseFloat(product.price));
        if (this.currentBudget >= totalPrice) {
          console.log(`You have ${this.currentBudget - totalPrice} left in your budget.`);
        } else {
          console.log(`You don't have enough budget left to purchase these items.`);
        }
      }


}




// // the clothing: a size, a colour,
class Clothing extends Product {
    constructor(name, price, description, size, color) {
        super(name, price, description)
        this.size = size
        this.color = color
    }

    print() {
        let msg = `Clothing type: ${this.name}. Size: ${this.size}. Color: ${this.color}. Price: ${this.price}.`;
        return msg;
    }
}


// // the food: a weight,

class Food extends Product {
    constructor(name, price, description, weight) {
        super(name, price, description)
        this.weight = weight
    }
    print() {
        let msg = `Food type: ${this.name}. Weight: ${this.weight}. Price: ${this.price}.`;
        return msg;
    }
}


// //  the cosmetics: a flavour, a volume.

class Cosmetics extends Product {
    constructor(name, price, description, flavour, volume) {
        super(name, price, description)
        this.flavour = flavour
        this.volume = volume
    }
    print() {
        let msg = `Cosmetics type: ${this.name}. Flavour: ${this.flavour}. Volume: ${this.volume}. Price: ${this.price}.`;
        return msg;
    }

}


let food = new Food("Apple", "5€", "", 30);
let food1 = new Food("Bannana", "3€", "", 20);
let food2 = new Food("Orange", "10€", "", 35);

console.log(food.print());
console.log(food1.print());
console.log(food2.print());

console.log("_______________________________________");

let clothing = new Clothing("T-shirt", "20€", "", "S", "Red");
let clothing1 = new Clothing("Jeans", "25€", "", "S", "Black");
let clothing2 = new Clothing("Shoes", "30€", "", 40, "White");

console.log(clothing.print());
console.log(clothing1.print());
console.log(clothing2.print());

console.log("_______________________________________");


let cosmetics = new Cosmetics("Shampoo", "€8", "", "Milk and honey", 200);
let cosmetics1 = new Cosmetics("Sapoun", "2€", "", "Flowers", 100);
let cosmetics2 = new Cosmetics("Nivea", "12€", "", "Natyre", 150);

console.log(cosmetics.print());
console.log(cosmetics1.print());
console.log(cosmetics2.print());

console.log("_______________________________________");

let cart = new ShopingCart();

cart.addProduct(food);
cart.addProduct(clothing2);
cart.addProduct(cosmetics1);

cart.print();
console.log("_______________________________________");

console.log(cart.getTotal());

console.log(cart.getCurrentBudget());