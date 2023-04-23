const video=document.querySelector('.video--container');
const btn=document.querySelector('.switch--btn');
const preLoader=document.querySelector('.preloader');
window.addEventListener('load',function(){
    preLoader.classList.add('hide');
})
btn.addEventListener('click',function(){
    if(btn.classList.contains('slide')){
        btn.classList.remove('slide');
        video.play();
    }else{
        btn.classList.add('slide');
        video.pause();
    }
})