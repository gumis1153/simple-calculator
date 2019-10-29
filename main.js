let result = document.querySelector(".result span");

let operations = [];
let inputNumber = "";
let afterEnd = false;

// tworzenie liczby
const addToCurrentNumbers = index => {
  if (operations.length % 2 == 0) {
    inputNumber = `${inputNumber}${index}`;
    console.log(inputNumber);
    showInput();
  } else return null;
};

// dodanie typu działania do tablicy
const addOperation = index => {
  if (inputNumber !== "") {
    operations.push(inputNumber);
    inputNumber = "";
    result.textContent = "";
    operations.push(index);
    console.log(operations);
  } else if (afterEnd === true) {
    operations.push(index);
    result.textContent = "";
    afterEnd = !afterEnd;
  } else return;
};

// zakończenie działania
const endOperations = () => {
  if (inputNumber != "") {
    //dodawanie liczby do tablicy
    operations.push(inputNumber);
    inputNumber = "";
    console.log(operations);
    finalResult();
  } else if (operations.length % 2 == 0 && inputNumber != "") {
    //usuwanie ostatniego elementu tablicy jeśli ostatni element tablicy to operator
    operations.pop();
    console.log(operations);
    finalResult();
  } else if (inputNumber == "") return null;
};

//  końcowy wynik
const finalResult = () => {
  afterEnd = !afterEnd;
  let mathResult = operations.join(" ");
  result.textContent = eval(mathResult);
  console.log(eval(mathResult));
  operations = [];
  operations.push(eval(mathResult));
};

// pokazanie wpisywanej liczby
const showInput = () => {
  result.textContent = inputNumber;
};

// czyszczenie zmiennych
const reset = () => {
  numbers = [];
  operations = [];
  inputNumber = "";
  result.textContent = "";
};

//https://stackoverflow.com/questions/13077923/how-can-i-convert-a-string-into-a-math-operator-in-javascript
