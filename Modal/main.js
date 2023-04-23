const openModal=document.querySelector('.modal--btn');
const modalEl=document.querySelector('.modal--container');
const closeModal=document.querySelector('.close--btn');
const overlayEl=document.querySelector('.overlay');

openModal.addEventListener('click',function(){
    modalEl.classList.remove('hidden')
});
closeModal.addEventListener('click',function(){
    modalEl.classList.add('hidden');
});
document.addEventListener('keydown',function(e){
    console.log(e);
    if(e.key==='Escape'){
        modalEl.classList.add('hidden');
    }
})
