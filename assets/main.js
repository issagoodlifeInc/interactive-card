const form = document.querySelector("#card-form");
const formPanel = document.querySelector(".form-panel");
const thanks = document.querySelector(".thanks");
const fields = {
  name: document.querySelector("#name"),
  number: document.querySelector("#cardnumber"),
  month: document.querySelector("#expiryMonth"),
  year: document.querySelector("#expiryYear"),
  cvc: document.querySelector("#cvc"),
};

const card = {
  name: document.querySelector(".card__name"),
  number: document.querySelector(".card__number"),
  month: document.querySelector(".card__month"),
  year: document.querySelector(".card__year"),
  cvc: document.querySelector(".card__cvc"),
};

const errorMessages = {
  name: document.querySelector("#name-error"),
  number: document.querySelector("#number-error"),
  expiry: document.querySelector("#expiry-error"),
  cvc: document.querySelector("#cvc-error"),
};

let submitted = false;

function setError(input, messageElement, message) {
  input.setAttribute("aria-invalid", String(Boolean(message)));
  messageElement.textContent = message;
}

function updateCard() {
  const digits = fields.number.value.replace(/\D/g, "").slice(0, 16);
  fields.number.value = digits.replace(/(\d{4})(?=\d)/g, "$1 ");
  card.number.textContent = digits
    ? digits.replace(/(\d{4})(?=\d)/g, "$1 ")
    : "0000 0000 0000 0000";

  const name = fields.name.value.trim();
  card.name.textContent = name || "Jane Appleseed";
  card.month.textContent = fields.month.value || "00";
  card.year.textContent = fields.year.value || "00";
  card.cvc.textContent = fields.cvc.value || "000";
}

function validate() {
  let valid = true;
  const name = fields.name.value.trim();
  const number = fields.number.value.replace(/\D/g, "");
  const month = fields.month.value;
  const year = fields.year.value;
  const cvc = fields.cvc.value;

  const nameError = name ? "" : "Can't be blank";
  setError(fields.name, errorMessages.name, nameError);
  valid = valid && !nameError;

  let numberError = "";
  if (!number) {
    numberError = "Can't be blank";
  } else if (!/^\d{16}$/.test(number)) {
    numberError = "Wrong format, numbers only";
  }
  setError(fields.number, errorMessages.number, numberError);
  valid = valid && !numberError;

  let expiryError = "";
  if (!month || !year) {
    expiryError = "Can't be blank";
  } else if (!/^\d{2}$/.test(month) || !/^\d{2}$/.test(year) || Number(month) < 1 || Number(month) > 12) {
    expiryError = "Wrong format";
  }
  setError(fields.month, errorMessages.expiry, expiryError);
  fields.year.setAttribute("aria-invalid", String(Boolean(expiryError)));
  valid = valid && !expiryError;

  let cvcError = "";
  if (!cvc) {
    cvcError = "Can't be blank";
  } else if (!/^\d{3}$/.test(cvc)) {
    cvcError = "Wrong format, numbers only";
  }
  setError(fields.cvc, errorMessages.cvc, cvcError);
  valid = valid && !cvcError;

  return valid;
}

Object.values(fields).forEach((input) => {
  input.addEventListener("input", () => {
    if (input === fields.month || input === fields.year || input === fields.cvc) {
      input.value = input.value.replace(/\D/g, "").slice(0, input === fields.cvc ? 3 : 2);
    }
    updateCard();
    if (submitted) validate();
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  submitted = true;
  if (!validate()) return;

  form.hidden = true;
  thanks.hidden = false;
  document.querySelector(".btn__thanks").focus();
});

document.querySelector(".btn__thanks").addEventListener("click", () => {
  form.reset();
  submitted = false;
  Object.entries(errorMessages).forEach(([key, messageElement]) => {
    const input = key === "expiry" ? fields.month : fields[key];
    setError(input, messageElement, "");
  });
  fields.year.removeAttribute("aria-invalid");
  form.hidden = false;
  thanks.hidden = true;
  updateCard();
  fields.name.focus();
});

updateCard();
