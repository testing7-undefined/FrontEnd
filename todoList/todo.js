let todoList=[{
inputTodo:'',
date:'example'
}];
todoList.length=0;
function add(){
  const inputTodo=document.querySelector('.inputTodo').value;
  const date=document.querySelector('.date').value || newdate();
  //console.log(date.length);
  if(inputTodo.length<=0){
   alert('Todo name cannot be empty');
    return ;
  }
  todoList.push({inputTodo,date});
  //Let's print this todoList
  print();
}

function print(){
  let i=0,text='';
  while(i<todoList.length){
      if(todoList[i].inputTodo.length>0){
        text+=`<div><p class="data no">${i+1}. ${todoList[i].inputTodo}</p></div> <div><p class="daete">${todoList[i].date}</p></div>
        <div><button class="edit" onclick="edit();">Edit</button><button onclick="deleteTodo(${i});" class="deleteTodo">Delete</button></div>`;
      }
      i++;
  }
  document.querySelector('.gridTodo').innerHTML=text;
  document.querySelector('.inputTodo').value='';
  document.querySelector('.date').value='';
}

function entere(key){
  if(key==='Enter')add();
}

function deleteTodo(i){
  todoList.splice(i,1);
  print();
}

function newdate(date){
  // console.log(date);
  date=new Date();
  //date=date.toUTCString();
  //console.log(date);
  //console.log([date.getDate(), date.getMonth()+1,date.getFullYear()].join('-'));
  return [date.getFullYear(), date.getMonth()+1,date.getDate()].join('-');
 // console.log(date);
}

function reset(){
  todoList.length=0;
  print();
}
function edit(){
  alert('This function is Under Development stage ');
}