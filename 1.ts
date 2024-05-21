// 1. Variables
let message: string = "Hello, TypeScript!";
console.log(message);

// 2. Functions
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(2, 3));

// 3. Interfaces
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

const user: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};
console.log(user);

// 4. Classes
class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayDetails(): void {
        console.log(`Car: ${this.make} ${this.model} (${this.year})`);
    }
}

const myCar = new Car("Toyota", "Corolla", 2020);
myCar.displayDetails();

// 5. Generics
function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<string>("TypeScript"));
console.log(identity<number>(10));

// 6. Enums
enum Color {
    Red,
    Green,
    Blue
}
let color: Color = Color.Green;
console.log(color); 
