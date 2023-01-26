const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("Password");
const password2 = document.getElementById("Confirm-Password");


form.addEventListener('submit', e => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (userNameValue === '') {
    setError(userName, 'User Cannot Be Blank');
  }
  else {
    setSuccess(userName)
  }

  if (emailValue === '') {
    setError(email, 'Email Cannot Be Blank');
  }
  else if (!isEmail(emailValue)) {
    setError(email, 'Not a valid Email');
  }
  else {
    setSuccess(email);
  }

  if (passwordValue === '') {
    setError(password, 'Password Cannot Be Blank');
  }
  else {
    setSuccess(password)
  }

  if (password2Value === '') {
    setError(password2, 'Password Cannot Be Blank');
  }
  else if (passwordValue !== password2Value) {
    setError(password2, 'Password does not match');
  }
  else {
    setSuccess(password2)
  }
};

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
  small.style.visibility = "visible";

};


function setSuccess(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control success';
  small.innerText = message;
  small.style.display = "none";
  
};




function isEmail(email) {
  return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
}