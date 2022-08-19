function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length == 4) {
    //console.log(pin);
    return pin;
  }
  return getPin();
}

function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();
  const inputPinField = document.getElementById("input-pin-field");
  inputPinField.value = pin;
});

document
  .getElementById("calculator-field")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const numberField = document.getElementById("number-field");
    const prevText = numberField.value;
    if (isNaN(number)) {
      if (number === "<") {
        const digits = prevText.split("");
        digits.pop();
        numberField.value = digits.join("");
      } else if (number === "C") {
        numberField.value = "";
      }
    } else {
      const newText = prevText + number;
      numberField.value = newText;
    }
  });

document.getElementById("btn-submit").addEventListener("click", function () {
  const generatedPin = document.getElementById("input-pin-field").value;
  const typedPin = document.getElementById("number-field").value;
  const messageCorrect = document.getElementById("message-correct");
  const messageIncorrect = document.getElementById("message-incorrect");
  if (generatedPin === typedPin) {
    messageCorrect.style.display = "block";
    messageIncorrect.style.display = "none";
  } else {
    messageIncorrect.style.display = "block";
    messageCorrect.style.display = "none";
  }
});
