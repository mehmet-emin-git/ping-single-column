const form = document.getElementById("fomr");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // check for valid email
  const emailValue = form["email"].value;

  if (!emailValue || !isValidEmail) {
    // say its empty
  } else {
    // submit
  }
});

function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
