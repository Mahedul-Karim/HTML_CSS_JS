const form=document.querySelector('.form');
const input=document.querySelector('.text');
const listItems=document.querySelector('#todos');



const updateLs=function(){
  const allList=document.querySelectorAll('.list');
  const todoStored=[];
  allList.forEach(list=>{

    todoStored.push(list.textContent);
  });
  localStorage.setItem('todo',JSON.stringify(todoStored));
};

const todoTasks=JSON.parse(localStorage.getItem('todo'));

const completed=function(){
  const eachList=document.querySelector('.list');
  const deleteBtn=document.querySelector('.btn--delete');
  deleteBtn.addEventListener('click',function(){
    eachList.remove();
    updateLs()
  });
}
const todoList=function(tasks=''){
  const text=input.value;
  const listText=tasks ? tasks : text;
  if(listText){
    const list=`
      <li class="list">${listText}<button class="btn--delete"><i class="fa-solid fa-xmark"></i></button></li>
    `;
    listItems.insertAdjacentHTML("afterbegin",list);
    input.value='';

    completed();
    updateLs();

  }
};
if(todoTasks){
  todoTasks.forEach(task=>{
    todoList(task);
  })
}
form.addEventListener('submit',function(e){
    e.preventDefault();
    todoList();
})