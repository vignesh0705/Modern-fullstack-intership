function greet() {
  let name = "Vicky";

  function sayHello() {
    console.log("Hello, " + name);
  }

  return sayHello;
}

const hello = greet();
hello();  
