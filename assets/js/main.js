window.addEventListener("load", () => {
  const form = document.querySelector("form");
  const email = document.querySelector("#email");
  const btnSubmit = document.querySelector(".btnSubmit");

  btnSubmit.addEventListener("click", () => {
    if (checkEmail(email)) {
      email.classList.remove("invalid");
    } else {
      email.classList.add("invalid");
    }
  });

  email.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      btnSubmit.click();
    }
    if (e.key === "Backspace") {
      email.classList.remove("invalid");
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email.value
  );
}
