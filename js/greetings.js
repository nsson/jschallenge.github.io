const loginInput = document.querySelector("#log-form input");
const loginForm =  document.querySelector("#log-form");
const greeting =  document.querySelector("#greeting");
const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

function LoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
    
}

function paintGreetings(username) {
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", LoginSubmit);

} else {
    paintGreetings(savedUsername);
}



