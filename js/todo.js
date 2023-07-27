const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');


const TODOS_KEY = "todos";

// todo를 저장하기 위해 만드는 배열
// let을 사용해서 업데이트가 가능하도록 만든다
let toDos = [];
function paintToDo(newTodo){
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;  // 이제 text가 아니라 object를 받으므로 
    const button = document.createElement('button');
    button.innerText = 'X';
    button.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function saveToDos() {
    // toDos 배열의 내용을 localStorage에 저장하는 함수
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // JSON.stringify()는 어떤 코드던 간에 string으로 바꿔준다
}
function deleteToDo(event) {
    // 삭제하고 싶은 li
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    // 삭제를 하기 위해서 text대신 object를 push 해준다
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),   // Date.now()는 현재 초를 ms로 계산한것 
    };
    toDos.push(newTodoObj);  // array에 push
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

/*
화살표 함수로 대체
function sayHello(item) {
    console.log('this is the turn of', item);
}
*/
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    // JSON.parse()는 실제로 무언가를 할수있는 배열을 얻는다
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
     // toDos에 parsedToDos를 넣어서 전에 있던 toDo들을 복원
    // forEach는 array의 각 item에 대해 function을 실행할수 있게 해준다
    // parsedToDos.forEach(sayHello);
    // 이런식으로 function을 만드는것 대신에 한번에 표기할수도 있다
    // 이렇게 쓰는걸 화살표 함수 라고 한다
    // parsedToDos.forEach((item) => console.log('this is the turn of', item));
    parsedToDos.forEach(paintToDo);
    
}

/* filter 예시
function sexyFilter() {

} => sexyFilter는 true를 return 해야 한다
[1,2,3,4].filter(sexyFilter);
-> sexyFilter(1)
-> sexyFilter(2)
-> sexyFilter(3)
-> sexyFilter(4)
*/
