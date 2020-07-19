const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // check for valid email
  const email = form["email"];
  const emailValue = form["email"].value;
  const small = form.querySelector("small");

  if (!emailValue) {
    // say its empty
    email.classList.add("error");
    small.innerText = "Email field cannot be empty!";
    small.style.display = "inline-block";
  } else if (!isValidEmail) {
    email.classList.add("error");
    small.innerText = "Email address is Invalid!";
    small.style.display = "inline-block";
  } else {
    // submit
    email.classList.remove("error");
    small.style.display = "inline-block";
    small.style.color = "green";
    small.innerText = "Thank you for submiting.";

    setTimeout(() => {
      small.innerText = "";
    }, 3000);
  }
});

function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
