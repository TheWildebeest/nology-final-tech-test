let sampleArray = [123, 4556, 127, 415, 8, 42, 88, 888, 13];
let sampleNumber = 1;
let numArray = [];
let digit = NaN;
let theArray = document.querySelector("#theArray");
let theFilterdArray = document.querySelector("#theFilteredArray");
let inputOne = document.querySelector("#numbers");
let buttonOne = document.querySelector("#pushThis");
let inputTwo = document.querySelector("#digit");
let buttonTwo = document.querySelector("#filterThis");

const pushThis = () => {
  inputOne.value ?
    numArray.push(inputOne.value) :
    null;
  theArray.innerHTML = numArray;
  inputOne.value = null;
}

const filterThis = () => {
  inputTwo.value ?
    digit = inputTwo.value :
    null;
  const stringArray = numArray.filter(number => number.toString().includes(digit.toString()));
  theFilteredArray.innerHTML = stringArray.map(digit => parseInt(digit))
}

const resetAll = () => {
  numArray = [];
  digit = NaN;
  filterThis();
}


buttonOne.addEventListener("click", pushThis)
inputOne.addEventListener("keyup", (e) => { if (e.keyCode === 13) { e.preventDefault(); buttonOne.click(); } })
buttonTwo.addEventListener("click", filterThis)


console.log(filterThis(sampleArray, sampleNumber));