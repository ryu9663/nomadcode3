const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];//const 에서 let으로 바꿔 업데이트가 가능하도록 한다.

function saveToDos(){
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteTodo(event){
  const li = (event.target.parentElement);

  li.remove();
  console.log(typeof(li.id));
  toDos = toDos.filter(toDo => toDo.id!==parseInt(li.id));
  saveToDos(); //지운다음 다시 업데이트
}//filter()함수를 이용하여 지운다.


function paintToDo(newTodoObj){
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click",deleteTodo);

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);

}

function handleToDoSubmit(event){
  event.preventDefault();

  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj ={
    text:newTodo,
    id:Date.now(),//id를 만들어서 각각의 newTodo[item]구별, deletTodo에서 사용
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();



}

toDoForm.addEventListener("submit",handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

function sexyFilter(){


}

[1,2,3,4].filter(sexyFilter)
