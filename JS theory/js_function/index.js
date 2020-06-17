function sayHello(name, age){
   return `hello ${name} you are ${age} years old`;
}

const greetJewon = sayHello("jewon",16);
console.log(greetJewon);

const calculator = {
    plus: function(a,b){
        return a+b;
    }
}

const value = calculator.plus(5,5);
console.log(value);