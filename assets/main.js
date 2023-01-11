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

inputName.addEventListener("change", () => {
  cardName.textContent = inputName.value;
});
inputCardNum.addEventListener("change", () => {
  cardNumber.textContent = inputCardNum.value;
});
inputMonth.addEventListener("change", () => {
  cardExpMonth.textContent = inputMonth.value;
});
inputYear.addEventListener("change", () => {
  cardExpYear.textContent = inputYear.value;
});
inputCVC.addEventListener("change", () => {
  cardCVC.textContent = inputCVC.value;
});
