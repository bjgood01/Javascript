     // const loginForm = docuemnt.querySelector('#login-form');

const loginInput = document.querySelector('#login-form input');
const loginForm = document.querySelector('#login-form');
const greeting = document.querySelector('#greeting');

// 'hidden' 클래스 이름을 1번만 사용하는게 아니므로 변수로 만들어준다
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
function onLoginSubmit(event) {
    event.preventDefault();   // 기본동작 제거
    loginForm.classList.add(HIDDEN_CLASSNAME);  // css 추가로 form 안보이게 하기
    const username = loginInput.value;  // username을 변수로 저장해준다
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    // loginForm.classList.remove('hidden');
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);

} else {
    // show the greetings
    // greeting.classList.remove('hidden');
    paintGreetings(savedUsername);
    
}
