var init = function () {
  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);

  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  populate(todosArray);
}

var populate = function (todos) {
  for (var item of todos){
  addItem(item)
  }
}

var addItem = function (item) {

  var ul = document.querySelector('#todo-list')
  var li = document.createElement("li")
  li.innerText = item
  ul.appendChild(li)
}

var handleButtonClick = function () {



  var input = document.querySelector('#new-item');
  addItem(input.value)

  save(input.value);



}

var save = function (newItem) {


  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];

  todosArray.push(newItem);
  console.log(todosArray)

  var jsonString = JSON.stringify(todosArray)
  localStorage.setItem("todoList", jsonString)

}

window.addEventListener('load', init);
