function checkValue(field) 
{
  if (field.value === "") {
    field.setCustomValidity("This field is required.");
  } else {
    field.setCustomValidity("");
  }
}

function checkLength(area, minLength) 
{
  if (field.value.length < minLength) {
    field.setCustomValidity("This field must be at least " + minLength + " characters.");
  } else {
    field.setCustomValidity("");
  }
}

function checkEmail(field) 
{
  var formula = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(field.value)) {
    field.setCustomValidity("This is not a valid email address.");
  } else {
    field.setCustomValidity("");
  }
}

function checkPassword(field) 
{
  var formula = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  if (!pattern.test(field.value)) {
    field.setCustomValidity("Password must be at least 8 characters long and contain at least one number, one lowercase letter and one uppercase letter.");
  } else {
    field.setCustomValidity("");
  }
}

function checkDate(field) 
{
  var data = new Date(field.value);
  var today = new Date();
  var difference = today.getFullYear() - date.getFullYear();
  if (difference < 18) {
    field.setCustomValidity("You must be at least 18 years old.");
  } else {
    field.setCustomValidity("");
  }
}

function checkRepeatedPassword(field, password) 
{
  if (field.value !== password.value) {
    field.setCustomValidity("Passwords are not identical.");
  } else {
    field.setCustomValidity("");
  }
}

var form = document.querySelector("form");
var fieldfield = form.querySelectorAll("input, select");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  var correct = true;
  var password = null;

  for (var i = 0; i < formfield.length; i++) {
    var field = fieldFormularza[i];
    if (field.required) {
      checkValue(field);
    }
    if (field.minLength) {
      checkLength(field, field.minLength);
    }
    if (field.type === "email") {
      checkEmail(field);
    }
    if (field.type === "password") {
      checkPassword(field);
      if (password === null) {
        password = field;
      } else {
        checkRepeatedPassword(field, password);
      }
    }
    if (field.type === "date") {
      checkDate(field);
    }
    if (field.validity.valid === false) {
      correct = false;
    }
  }
  if (correct) {
    alert("The form has been completed correctly.");
    form.submit();
  }
});
