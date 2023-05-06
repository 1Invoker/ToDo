// Объявляем переменную tasks и присваиваем ей массив объектов-задач, с полем id, task и delete
const tasks = [{id: 1, task: 'vsvsvsvs', delete: false}];
// Объявляем переменную button и находим на странице элемент с классом button
const button = document.querySelector('.button');
// Объявляем переменную input и находим на странице элемент с классом input
const input = document.querySelector('.input');
// Объявляем переменную ul и находим на странице элемент с классом ul
const ul = document.querySelector('.ul');
// Объявляем переменную deleteButton и находим на странице элемент с классом delete-button
const deleteButton = document.querySelector('.delete-button');

// Функция, которая отрисовывает задачи на странице
function renderTasks() {
// Очищаем список перед отрисовкой, чтобы избежать дублирования элементов
ul.innerHTML = '';
// Проходим циклом по массиву tasks и создаем для каждой задачи элемент списка
for (let i = 0; i < tasks.length; i++) {
// Создаем элемент li
const li = document.createElement('li');
// Создаем чекбокс и добавляем ему класс checkbox и атрибут data-id со значением id текущей задачи
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.classList.add('checkbox');
checkbox.dataset.id = tasks[i].id;
// Добавляем в элемент li текст задачи и атрибут data-id со значением id текущей задачи
li.innerHTML = tasks[i].task;
li.dataset.id = tasks[i].id;
// Добавляем в элемент li класс task-item и вставляем перед текстом чекбокс
li.classList.add('task-item');
li.prepend(checkbox);
// Добавляем элемент li в список ul
ul.append(li);
}
}

// Вызываем функцию renderTasks, чтобы отрисовать задачи при загрузке страницы
renderTasks();

// Обработчик события нажатия на кнопку "Добавить задачу"
button.onclick = () => {
// Вызываем функцию addTask и передаем ей текст новой задачи и массив tasks
addTask(input.value, tasks);
// Вызываем функцию renderTasks, чтобы отрисовать задачи с учетом новой задачи
renderTasks();
}

// Обработчик события нажатия на кнопку "Удалить задачи"
deleteButton.onclick = () => {
// Вызываем функцию deleteTasks, чтобы удалить задачи, у которых значение delete равно true
deleteTasks();
// Вызываем функцию renderTasks, чтобы отрисовать задачи после удаления
renderTasks();
}

// Функция, которая генерирует уникальный id для новой задачи
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
// Функция для добавления новой задачи в массив с id, текстом задачи и флагом delete
function addTask(text, array) {
  const task = {
  id: generateId(array), // генерируем уникальный id для задачи
  task: text, // текст задачи
  delete: false // флаг, который показывает, нужно ли удалять эту задачу
  };
  array.push(task); // добавляем задачу в массив
  }
  
  // Функция для удаления задач из массива, у которых флаг delete равен true
  function deleteTasks() {
  tasks = tasks.filter(task => !task.delete); // фильтруем массив задач, оставляя только те, у которых delete равен false
  }
  
  // Обработчик событий на ul, который реагирует на клик на чекбоксе и помечает задачу на удаление
  ul.addEventListener('click', (event) => {
  if (event.target.classList.contains('checkbox')) { // если кликнули на чекбокс
  const taskId = parseInt(event.target.dataset.id); // получаем id задачи из атрибута data-id у чекбокса
  const taskItem = document.querySelector(`[data-id="${taskId}"]`); // находим элемент li с задачей
  const taskIndex = tasks.findIndex(task => task.id === taskId); // находим индекс задачи в массиве по её id
  tasks[taskIndex].delete = event.target.checked; // помечаем задачу на удаление, если чекбокс отмечен
  taskItem.classList.toggle('checked'); // добавляем или удаляем класс 'checked' у элемента li в зависимости от состояния чекбокса
  }
  });
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