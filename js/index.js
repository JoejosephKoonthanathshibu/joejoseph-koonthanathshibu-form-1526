// ACCESSING THE ACTIVE HTML ELEMENTS
let btn = document.getElementById('submit');
let email = document.getElementById('email');
let fullname = document.getElementById('fullname');
let message = document.getElementById('message');

// USING PATTERN TO ENFORCE THE PROPER EMAIL FORMAT
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

// THIS IS YOUR EVENT-HANDLER
function validateForm(event) {
  event.preventDefault();

  // CREATING 'BUCKETS' for user-inputs and errors
  let ui = {};  
  let errors = [];

  // MAKE SURE ALL USER ENTRIES ARE TRIMMED
  // lets trim the eventual whitespace
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
  email.value = email.value.trim();
  fullname.value = fullname.value.trim();
  message.value = message.value.trim();

  if (email.value) {
    if (pattern.test(email.value)) {
      ui.user_email = email.value;
    } else {
      errors.push('<p>Your email is invalid!</p>');
    }
  } else {
    errors.push('<p>Please enter your email!</p>');
  }

  if (fullname.value !== "") {
    ui.fullname = fullname.value;
  } else {
    errors.push('<p>Fullname is required</p>');
  }

  if (message.value !== "") {
    ui.message = message.value;
  } else {
    errors.push('<p>Enter your message!</p>');
  }

  if (errors.length > 0) {
    console.log("ERRORS", errors);
    console.log("COLLECTED DATA", ui);
  } else {
    console.log("COLLECTED DATA", ui);
    fullname.value = "";
    email.value = "";
    message.value = "";
  }
}

btn.addEventListener("click", validateForm);
