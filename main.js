const subscribeForm = document.getElementById("subscribe-form");
const errorMessage = subscribeForm.querySelector(".error-message");
const emailInput = document.getElementById("email");
const handleSubscribeForm = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const { email } = Object.fromEntries(formData);
  const isValidEmail = /^\S+@\S+\.\S+$/;

  errorMessage.textContent = "";
  emailInput.classList.remove("error");
  console.log("data: ", email);
  console.log("email input: ", emailInput);

  if (!email) {
    errorMessage.textContent = "Please enter email!";
    emailInput.classList.add("error");
  } else if (!isValidEmail.test(email)) {
    errorMessage.textContent = "Valid email required";
    emailInput.classList.add("error");
  } else {
    errorMessage.textContent = "";
    window.location.href = "/success-subscribing.html"
  }
};

subscribeForm.addEventListener("submit", handleSubscribeForm);
