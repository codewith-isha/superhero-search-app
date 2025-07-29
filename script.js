// login page logic 
const form = document.querySelector('#Form');
const errormsg = document.querySelector('#error');

const finalusername = "Isha";
const finalpassword = "Ishaa20";

function login(e) {
  e.preventDefault(); 
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  if (username === finalusername && password === finalpassword) {
    window.location.href = "hero.html";
  } else {
    errormsg.innerHTML = "Invalid username or password!";
  }
}
form.addEventListener("submit", login);
// form.addEventListener("submit", login)

