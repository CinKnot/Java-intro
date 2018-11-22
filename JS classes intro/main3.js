console.log("Example with class");

// Instead of a function that creates a car,
// we define a class Car

// A class looks much cleaner, and has many other advantages.

class Car {

	// The constructor initializes the properties.
	// It gets called when we do: new Car(some_brand)
	constructor(brand) {
		this.brand = brand;
		this.speed = 0;
	}


	// methods:

	// (notice that now we don't say "function" and that we
	//  don't put a comma after closing brace of the function)

	accelerate(amount) {
		this.speed += amount;

	}

	//Exercise 1.2
	brake(amount) {
		this.speed -= amount;
		if (this.speed < 0) {
			this.speed = 0;
		}
	}

	//Exercise 1.1
	type(model) {
		this.model = model;
	}
	//Exercise 1.1
	status() {
		return this.brand + " running at " + this.speed + " km/h" + this.model;
	}

//Exercise 1.3
	stop() {
		this.speed = 0;
	}

	//Exercise 1.4
	running() {
		if (this.speed > 0) {
			return true;
		} else {
			return false;
		}

	}
}

// Now we use create a Car object using the class

var car = new Car("Ford");

console.log(car.status());
car.accelerate(50);
car.type("Mondeo");
console.log(car.status());
car.accelerate(100);
car.type("Mondeo");
console.log(car.status());
console.log(car.running())
car.brake(165);
car.type("Mondeo");
console.log(car.status());
car.type("Mondeo");
console.log(car.status());
console.log(car.running())

// We may create other cars easily

var car2 = new Car("Ferrari");
car2.accelerate(200);
console.log(car2.status());

class TV {
	//Exercise 2.1
	constructor(brand) {
		this.brand = brand;
		this.reset();
	}

	//Exercise 2.5
	status() {
		return this.brand + " " + "at channel" + " " + this.channel + " " + "volume" + " " + this.volume;
	}
	//Exercise 2.2
	decrease(amount) {
		this.volume -= amount;
		if (this.volume < 0) {
			this.volume = 0;
		}
	}
	increase(amount) {
		this.volume += amount;
		if (this.volume > 100) {
			this.volume = 100;
		}
	}
	//Exercise 2.3 consol logged 48 as channel was already one it shows 49. Console logged 3 it became 52 as it needs to deduct the amount, once the amount is over 50 it was 49 again 52-3
	setChannel(amount) {
		this.channel += amount;
		if (this.channel > 50) {
			this.channel = this.channel - amount;
		}
		//Exercise 2.4
	}
	reset() {
		this.channel = 1;
		this.volume = 50;
	}

}
var tv = new TV("Sony");
tv.increase(165);
console.log(tv.status());
tv.setChannel(48);
tv.setChannel(3)
tv.reset()
console.log(tv.status());
