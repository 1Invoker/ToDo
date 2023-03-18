// 1) Создаем пустой массив
const tasks = [{id: 1, task: 'vsvsvsvs'}];
const button = document.querySelector('.button');
const input = document.querySelector('.input');
const ul = document.querySelector('.ul');
function renderTasks() {
  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = tasks[i].task;
    ul.append(li);
  }
}
renderTasks();

button.onclick = () => {
  addTask(input.value, tasks)
  // renderTasks()
}


// 2) Функция для создания id элемента массива
function generateId(arr) {
 let id = 1;
 for(let i = 1; i < tasks.length ; i++){
  const element = arr[i];
  if (element.id == id){
    id++;
  }
 }
 return(id);
}
// 3) Функция для добавления задачи в массив
function addTask(text, array) {
  const task = {
    id: generateId(array),
    task: text
  };
  array.push(task);
}

//4) Создать функцтю для удаления одной задачи которая принимает параметром id этой задачи
function deleted(id) {
  tasks = tasks.filter(element => element.id !== id);

}
//==========================================================================================================


//=========================================================================================================================================
// (querySelector, innerHTML, append)

// Сева Ладыгин, [09.03.2023 20:11]
// const button = document.querySelector('.button');
// const input = document.querySelector('.input');
// const ul = document.querySelector('.ul');

// button.onclick = () => {
//   if (input.value !== '') {
//     const li = document.createElement('li');
//     li.innerHTML = input.value
//     ul.append(li) 
//   }
// }



// let array = [{id: 1, task: "pokurit"}, {id: 2, task: "pokurit"}]

// const createId = (arr) => {
//   let id = 1;

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element.id === id) {
//       id++
//     }
//   }

//   return id;
// }

// const createTask = (task, arr) => {
//   const newTask = {
//     id: createId(arr),
//     task: task,
//   }

//   arr.push(newTask);
// }

// const deleteTask = (id) => {
//   array = array.filter(task => task.id !== id)
// }


// createTask('pokurit', array)
// createTask('rabota', array)
// createTask('spat', array)
// deleteTask(2)
// console.log(array)


//1) Создать пустой массив
//2) Создать функцию для создания id элемента массива (элемент массива это обЪект с полями id и task)
//3) Создать функцию которая принимает параметрами текст задичи и массив в который ее надо добавить 
//4) Создать функцтю для удаления одной задачи которая принимает параметром id этой задачи

// createTask('pokurit', array)
// createTask('rabota', array)
// createTask('spat', array)
// deleteTask(2)
// console.log(array)

//Вывод в консоль: [{id: 1, task: "pokurit"}, {id: 3, task: "pokurit"}]

//1) Создать функцию которая будет выводить в список html (ul => li) поля task каждого элемента массива
//2) По кнопке ОК доюавлять в массив новые элементы и там же вызывать функцию котрая отрисовывает список задач