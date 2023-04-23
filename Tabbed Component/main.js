const btnEl=document.querySelectorAll('.tab--btn');
const contentEl=document.querySelectorAll('.content');
const tabbedEl=document.querySelector('.tabbed--container');

tabbedEl.addEventListener('click',function(e){
    const btn=e.target.closest('.tab--btn');
    if(!btn) return;
    btnEl.forEach(btn=>{
        btn.classList.remove('active');
    });
    btn.classList.add('active');
    contentEl.forEach(content=>{
        content.classList.remove('active');
    });
    const {id}=btn.dataset;
    document.getElementById(id).classList.add('active');
});