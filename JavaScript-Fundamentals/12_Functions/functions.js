function sayHello() {
    console.log("Hello, World!");
}

sayHello(); // Outputs: Hello, World!

function greet(name, time) {
    console.log("Good " + time + ", " + name + "!");
}

greet("Alice", "morning"); // Good morning, Alice!
greet("Bob", "evening");   // Good evening, Bob!

function greetWithDefault(name = "Guest") {
    console.log("Welcome, " + name + "!");
}

greetWithDefault();        // Welcome, Guest!
greetWithDefault("David"); // Welcome, David!