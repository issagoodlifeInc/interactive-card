// Card Dets
let cardNumber = document.querySelector(".card__number");
let cardName = document.querySelector(".card__name");
let cardExpMonth = document.querySelector(".card__exp-month");
let cardExpYear = document.querySelector(".card__exp-year");
let cardCVC = document.querySelector(".card__cvc");

// Inputs
let inputName = document.getElementById("name");
let inputCardNum = document.getElementById("cardnumber");
let inputMonth = document.getElementById("expiryMonth");
let inputYear = document.getElementById("expiryYear");
let inputCVC = document.getElementById("cvc");

// Error <small>
let errName = document.querySelector(".error-name");
let errNum = document.querySelector(".error-number");
let errMM = document.querySelector(".error-mm");
let errYY = document.querySelector(".error-yy");
let errCvc = document.querySelector(".error-cvc");

let formSection = document.querySelector("form");
let thanksSection = document.querySelector(".thanks");

// Btns
let confirmBtn = document.querySelector(".btn__submit");
let continueBtn = document.querySelector(".btn__thanks");

inputName.addEventListener("keyup", () => {
  cardName.textContent = inputName.value;
});
inputCardNum.addEventListener("keyup", () => {
  cardNumber.textContent = inputCardNum.value
    .replace(/[^0-9]/gi, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
});
inputMonth.addEventListener("keyup", () => {
  cardExpMonth.textContent = inputMonth.value;
});
inputYear.addEventListener("keyup", () => {
  cardExpYear.textContent = inputYear.value;
});
inputCVC.addEventListener("keyup", () => {
  cardCVC.textContent = inputCVC.value;
});
