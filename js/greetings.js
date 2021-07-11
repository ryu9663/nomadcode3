const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");

const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event){
  event.preventDefault();

  const username = loginInput.value;//함수 안에서 생성해야함.


  localStorage.setItem(USERNAME_KEY, username);

  loginForm.classList.add(HIDDEN_CLASSNAME);

  paintGreetings(username);

}



function paintGreetings(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}else{

  paintGreetings(savedUsername);

}
