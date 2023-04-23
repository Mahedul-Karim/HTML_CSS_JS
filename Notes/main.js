const noteEl=document.querySelector('.notes-container');
const addBtn=document.querySelector('.btn--add');




const createNotes=function(text=''){
    const notEl=document.createElement('div');
    notEl.classList.add('notes-container');
    notEl.innerHTML=`
    <div class="notes">
             <div class="tools">
                 <button class="btn btn--edit"><i class="fa-solid fa-pen-to-square"></i></button>
                 <button class="btn btn--delete"><i class="fa-solid fa-trash"></i></button>
                 
             </div>
             <div class="main ${text ? '':'hidden'}">${text}</div>
             <textarea class="${text ? 'hidden' : ''}">${text}</textarea>
         </div> 
    `;
    document.body.appendChild(notEl);
    const editBtn=notEl.querySelector('.btn--edit');
    const deleteBtn=notEl.querySelector('.btn--delete');
    const mainEl=notEl.querySelector('.main');
    const textArea=notEl.querySelector('textarea');
    const notes=notEl.querySelector('.notes');
    editBtn.addEventListener('click',function(){
     mainEl.classList.toggle('hidden');
     textArea.classList.toggle('hidden');
 });
 
 textArea.addEventListener('input',function(e){
     const {value}=e.target;
     mainEl.innerHTML=value;
     updateLs();
 });
 deleteBtn.addEventListener('click',function(){
    notes.remove();
    updateLs()
 })
};
const updateLs=function(){
    const noteText=document.querySelectorAll('textarea');
    const noteArr=[];
    noteText.forEach(notes=>{
        noteArr.push(notes.value)
    });
    localStorage.setItem('note',JSON.stringify(noteArr));
};
const getNotes=JSON.parse(localStorage.getItem('note'));

if(getNotes){
    getNotes.forEach(notes=>{
        createNotes(notes);
    })
}
addBtn.addEventListener('click',function(){
   createNotes();
});

