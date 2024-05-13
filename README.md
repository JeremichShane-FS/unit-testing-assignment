# 🚀 Unit Testing Assignment

## 📖 About

`Unit Testing Assignment` is a simple and efficient JavaScript file that provides basic mathematical operations. It includes six functions: `add`, `subtract`, `divide`, `multiply`, `sqrt`, and `max`.

The `add`, `subtract`, `divide`, and `multiply` functions perform basic arithmetic operations. They take two numbers as input and return the result of the operation.

The `sqrt` function takes a single number as input and returns its square root, using the built-in `Math.sqrt` function.

The `max` function takes two numbers as input and returns the larger of the two, using the built-in `Math.max` function.

The library is thoroughly tested with Jest, ensuring the reliability of the functions. Each function has a corresponding test case that verifies its correctness.

This project is a great starting point for anyone looking to understand how to create and test a simple JavaScript library. It's also a useful addition to any project that requires basic mathematical operations.

## ⚙️ Features

- 🧮 Basic Mathematical Operations: The library provides six basic mathematical functions: `add`, `subtract`, `divide`, `multiply`, `sqrt`, and `max`. These functions cover a range of needs for arithmetic and comparison operations.

- 🧪 Thoroughly Tested: Each function in the library has a corresponding test case, ensuring the reliability and correctness of the functions. The tests are written using Jest, a popular JavaScript testing framework.

- 📦 Easy to Integrate: The functions are exported as a module, making it easy to import and use them in any JavaScript project.

- 🎓 Educational Value: This project serves as a great example for anyone looking to understand how to create and test a simple JavaScript library.

## 💾 Installation

```bash
# Clone this repository
$ git clone https://github.com/JeremichShane-FS/unit-testing-assignment.git

# Go into the repository
$ cd unit-testing-assignment

# Install dependencies
$ npm install

# Run the app
$ npm run test
```

## ⚙️ Configuration

This project does not require any specific configuration steps. The mathematical functions are ready to use out of the box.

However, if you want to add more functions or modify the existing ones, you can do so by editing the `math.js` file.

To run the tests, make sure you have Jest installed. If not, you can add it to your project with the following command:

```bash
$ npm install --save-dev jest
```

## 🔧 Usage

This library exports six mathematical functions: `add`, `subtract`, `divide`, `multiply`, `sqrt`, and `max`.

Here's how you can use them in your JavaScript code:

```javascript
const { add, subtract, divide, multiply, sqrt, max } = require("./math");

console.log(add(1, 2)); // Outputs: 3
console.log(subtract(5, 3)); // Outputs: 2
console.log(divide(10, 2)); // Outputs: 5
console.log(multiply(4, 2)); // Outputs: 8
console.log(sqrt(9)); // Outputs: 3
console.log(max(5, 10)); // Outputs: 10
```

## 📜 License

[MIT](https://choosealicense.com/licenses/mit/)
