const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const first = form["firstname"].value;
  const last = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstname === "") {
    addErrorTo('firstname', 'First Name is required');
  } else {
    removeErroFrom('firstname');
  }

  if (lastname === "") {
    addErrorTo('lastname', 'Last Name is required');
  } else {
    removeErroFrom('lastname');
  }
  if (email === "") {
    addErrorTo('email', 'Email is required');
  } else {
    removeErroFrom('email');
  }
  if (password === "") {
    addErrorTo('password', 'Password is required');
  } else {
    removeErroFrom('password');
  }
});

function addErrorTo(field, message) {
    const formControl = form[field].parentNode;
    formControl.classList.add('error');
    
    const small = form[field].parentNode.querySelector('small');
    small.innerText = message;
    small.style.opacity = '1';
}

function removeErroFrom(field) {
    const small = form[field].parentNode.querySelector('small');
    small.style.opacity = '0';
}