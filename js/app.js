const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const subtract = document.querySelector(".subtract");
const add = document.querySelector(".add");
const equal = document.querySelector(".equal");
const result = document.querySelector(".result");
const resultText = result.querySelector("p");

var a = [0, 0];
var i = 0;
var op = "";

one.addEventListener("click", function () {
  if (resultText.innerHTML == "0") {
    resultText.innerHTML = "1";
  } else {
    resultText.innerHTML = resultText.innerHTML + "1";
  }
  a[i] = a[i] * 10 + 1;
});

two.addEventListener("click", function () {
  if (resultText.innerHTML == "0") {
    resultText.innerHTML = "2";
  } else {
    resultText.innerHTML = resultText.innerHTML + "2";
  }
  a[i] = a[i] * 10 + 2;
});

three.addEventListener("click", function () {
  if (resultText.innerHTML == "0") {
    resultText.innerHTML = "3";
  } else {
    resultText.innerHTML = resultText.innerHTML + "3";
  }
  a[i] = a[i] * 10 + 3;
});

four.addEventListener("click", function () {
  if (resultText.innerHTML == "0") {
    resultText.innerHTML = "4";
  } else {
    resultText.innerHTML = resultText.innerHTML + "4";
  }
  a[i] = a[i] * 10 + 4;
});

five.addEventListener("click", function () {
  if (resultText.innerHTML == "0") {
    resultText.innerHTML = "5";
  } else {
    resultText.innerHTML = resultText.innerHTML + "5";
  }
  a[i] = a[i] * 10 + 5;
});

six.addEventListener("click", function () {
  if (resultText.innerHTML == "0") {
    resultText.innerHTML = "6";
  } else {
    resultText.innerHTML = resultText.innerHTML + "6";
  }
  a[i] = a[i] * 10 + 6;
});

seven.addEventListener("click", function () {
  if (resultText.innerHTML == "0") {
    resultText.innerHTML = "7";
  } else {
    resultText.innerHTML = resultText.innerHTML + "7";
  }
  a[i] = a[i] * 10 + 7;
});

eight.addEventListener("click", function () {
  if (resultText.innerHTML == "0") {
    resultText.innerHTML = "8";
  } else {
    resultText.innerHTML = resultText.innerHTML + "8";
  }
  a[i] = a[i] * 10 + 8;
});

nine.addEventListener("click", function () {
  if (resultText.innerHTML == "0") {
    resultText.innerHTML = "9";
  } else {
    resultText.innerHTML = resultText.innerHTML + "9";
  }
  a[i] = a[i] * 10 + 9;
});

zero.addEventListener("click", function () {
  if (resultText.innerHTML == "0") {
    resultText.innerHTML = "0";
  } else {
    resultText.innerHTML = resultText.innerHTML + "0";
  }
  a[i] = a[i] * 10 + 0;
});

add.addEventListener("click", function () {
  i = 1;
  op = "+";
  resultText.innerHTML = resultText.innerHTML + " + ";
});

subtract.addEventListener("click", function () {
  i = 1;
  op = "-";
  resultText.innerHTML = resultText.innerHTML + " - ";
});

multiply.addEventListener("click", function () {
  i = 1;
  op = "X";
  resultText.innerHTML = resultText.innerHTML + " X ";
});

divide.addEventListener("click", function () {
  i = 1;
  op = "/";
  resultText.innerHTML = resultText.innerHTML + " / ";
});

equal.addEventListener("click", function () {
  if (op == "+") {
    a[0] = a[0] + a[1];
    resultText.innerHTML = a[0];
    i = 0;
    a[1] = 0;
  } else if (op == "-") {
    a[0] = a[0] - a[1];
    resultText.innerHTML = a[0];
    i = 0;
    a[1] = 0;
  } else if (op == "/") {
    a[0] = a[0] / a[1];
    resultText.innerHTML = a[0];
    i = 0;
    a[1] = 0;
  } else if (op == "X") {
    a[0] = a[0] * a[1];
    resultText.innerHTML = a[0];
    i = 0;
    a[1] = 0;
  }
});

clear.addEventListener("click", function () {
  i = 0;
  a[0] = 0;
  a[1] = 0;
  resultText.innerHTML = "0";
});

del.addEventListener("click", function () {
  i = 0;
  a[0] = 0;
  a[1] = 0;
  resultText.innerHTML = "0";
});
