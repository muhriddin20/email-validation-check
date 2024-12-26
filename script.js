const form = document.querySelector(".form");
const emailInput = document.querySelector(".form input");
const text = document.querySelector(".text");

emailInput.addEventListener("input", () => {
  let pattern = /^[^ ]+@[^ ]+\.[a-zA-Z]{2,6}$/;

  if (emailInput.value.match(pattern)) {
    text.textContent = "Your Email Address in Valid";
    form.classList.add("valid");
    form.classList.remove("invalid");
  } else {
    text.textContent = "Please Enter Valid Email Adddress";
    form.classList.remove("valid");
    form.classList.add("invalid");
  }

  if (emailInput.value == "") {
    text.textContent = "";
    form.classList.remove("valid", "invalid");
  }
});
