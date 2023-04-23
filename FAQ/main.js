const question=document.querySelectorAll('.question');
const questionEl=document.querySelector('.question--text');
const btnEl=document.querySelectorAll('.btn--open');

btnEl.forEach(btn=>{
    btn.addEventListener('click',function(e){
        const ques=e.target.closest('.question');
        ques.classList.toggle('show-text');
    })
})