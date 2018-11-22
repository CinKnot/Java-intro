console.log("Objects containing other objects");

// Let's remember our Product class

class Product {

	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	toString() {
		return this.name + " " + this.price + "€";
	}
}

// And create a couple of products
let p1 = new Product("vacuum cleaner", 100);
let p2 = new Product("pencil", 3);
let p3 = new Product("bike", 300);


// Now, let's create a ShoppingCart class, that will contain products

class ShoppingCart {

	constructor() {
		this.products = []; // empty at first
	}

	addProduct(product) {
		this.products.push(product);
	}

	toString() {
		return "cart with: " + this.products;
	}

	totalPrice() {
		let total = 0;
		let cart = this.products;
		let count = {};
		for (var i = 0; i < cart.length; i++) {
			total += cart[i].price;

			if (count[cart[i].name]) {
				count[cart[i].name] += 1
			} else {
				count[cart[i].name] = 1
			}
			if (count[cart[i].name] % 4 == 0) {
				total -= cart[i].price;
			}
		}
		console.log(count)
		if (cart.length >= 5) {
			total = total * 0.9;
		}
		return total;
	}

	replace(productName, replacementProduct) {
		let cart = this.products;
		for (var i = 0; i < cart.length; i++) {
			if (cart[i].name == productName) {
				cart[i] = replacementProduct;
			}
		}
	}
}





// We can create a cart and add the products we created before

let cart = new ShoppingCart();
//cart.addProduct(p1);
//cart.addProduct(p2);
cart.addProduct(p3);
//cart.addProduct(p1);
cart.addProduct(p3);
cart.addProduct(p3);
cart.addProduct(p3);
cart.addProduct(p3);
//console.log(cart)
//console.log(cart.totalPrice());
console.log(cart)
console.log(cart.totalPrice());
cart.replace("bike", new Product('STABILO', 78))
console.log("We have a ", cart);
