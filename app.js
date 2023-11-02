const submitButton = document.querySelector(".submitButton");
const inputs = document.querySelectorAll("input");
const errorIcons = document.querySelectorAll(".errorIcon");
const errors = document.querySelectorAll(".error");
for (let i = 0; i < 4; i++) {
  inputs[i].addEventListener("keyup", () => {
    errorIcons[i].style.display = "none";
    errors[i].style.display = "none";
  });
}
submitButton.addEventListener("click", () => {
  console.log(1);
  const detailsArray = ["", "", "", ""];
  const firsName = document.querySelector(".firstname input").value;
  detailsArray[0] = firsName;
  const lastName = document.querySelector(".lastname input").value;
  detailsArray[1] = lastName;
  const email = document.querySelector(".email input").value;
  detailsArray[2] = email;
  const password = document.querySelector(".password input").value;
  detailsArray[3] = password;
  for (let i = 0; i < 4; i++) {
    if (!detailsArray[i]) {
      errorIcons[i].style.display = "block";
      errors[i].style.display = "block";
      if (i == 2) {
        errors[i].innerHTML = "Email cannot be empty";
      }
    } else {
      if (i == 2) {
        let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (detailsArray[2].match(mailFormat)) {
          errorIcons[i].style.display = "none";
          errors[i].style.display = "none";
        } else {
          errors[i].innerHTML = "Looks like this is not an email";
          errorIcons[i].style.display = "block";
          errors[i].style.display = "block";
        }
      } else {
        errorIcons[i].style.display = "none";
        errors[i].style.display = "none";
      }
    }
  }
});
