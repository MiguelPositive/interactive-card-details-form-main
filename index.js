const btnConfirm = document.querySelector(".btn-confirm");
const formSend = document.getElementById("form-send");
const containerMain = document.getElementById("container-main");
let temp = false;

const inputNumber = document.querySelector(".input-number");

const warningNumber = document.getElementById("warning-number");
const warningDate = document.getElementById("warning-date");
const warningCvc = document.getElementById("warning-cvc");

const dateFields = document.querySelector(".date-fields");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");

const handleInputCardNumber = (e) => {
  if (
    e.target.value.includes("0") ||
    e.target.value.includes("1") ||
    e.target.value.includes("2") ||
    e.target.value.includes("3") ||
    e.target.value.includes("4") ||
    e.target.value.includes("5") ||
    e.target.value.includes("6") ||
    e.target.value.includes("7") ||
    e.target.value.includes("8") ||
    e.target.value.includes("9")
  ) {
    warningNumber.style.cssText = "transition: 0.3s; opacity: 1";
  } else {
    warningNumber.style.cssText = "transition: 0.3s; opacity: 0";
  }
};

inputNumber.addEventListener("input", handleInputCardNumber);

month.addEventListener("input", (e) => {
  if (e.target.value == "") {
    warningDate.style.cssText = "transition: 0.3s; opacity: 1";
    month.style.cssText = "border: 0.5px solid #FF979C";
  } else {
    warningDate.style.cssText = "transition: 0.3s; opacity: 0";
    month.style.cssText = " border: 0.3px solid rgba(0, 0, 0, 0.26);";
  }
});

year.addEventListener("input", (e) => {
  if (e.target.value == "") {
    warningDate.style.cssText = "transition: 0.3s; opacity: 1";
    year.style.cssText = "border: 0.5px solid #FF979C";
  } else {
    warningDate.style.cssText = "transition: 0.3s; opacity: 0";
    year.style.cssText = " border: 0.3px solid rgba(0, 0, 0, 0.26);";
  }
});

cvc.addEventListener("input", (e) => {
  if (e.target.value == "") {
    warningCvc.style.cssText = "transition: 0.3s; opacity: 1";
    cvc.style.cssText = "border: 0.5px solid #FF979C";
  } else {
    warningCvc.style.cssText = "transition: 0.3s; opacity: 0";
    cvc.style.cssText = " border: 0.3px solid rgba(0, 0, 0, 0.26);";
  }
});

btnConfirm.addEventListener("click", () => {
  temp = !temp;

  if (temp) {
    containerMain.style.cssText = "transition: linear 0.3s; opacity: 0";

    formSend.style.cssText = "transition: linear 0.3s; opacity: 1";
  } else {
    formSend.style.cssText = "transition: linear 0.3s; opacity: 0";

    containerMain.style.cssText = "transition: linear 0.3s; opacity: 1";
  }
});
