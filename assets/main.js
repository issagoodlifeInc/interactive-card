let cardNumber = document.querySelector(".card__number");
let cardName = document.querySelector(".card__name");
let cardExpMonth = document.querySelector(".card__exp");
let cardExpYear = cardExpMonth.querySelector("span");
let cardCVC = document.querySelector(".card__cvc");

let inputName = document.getElementById("name");
let inputCardNum = document.getElementById("cardnumber");
let inputMonth = document.getElementById("expiryMonth");
let inputYear = document.getElementById("expiryYear");
let inputCVC = document.getElementById("cvc");

inputName.addEventListener("keyup", () => {
  cardName.textContent = inputName.value;
});
inputCardNum.addEventListener("keyup", () => {
  cardNumber.textContent = inputCardNum.value;
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
