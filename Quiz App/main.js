const questions=[
    {
        question:'What does HTML stands for?',
        a:'Hyper Text Markup Language',
        b:'Cascading Style Sheet',
        c:'Hyper Text Making Language',
        d:'None of the above',
        correct:'a'
    },
    {
        question:'What does CSS stands for?',
        a:'Hyper Text Markup Language',
        b:'Cascading Style Sheet',
        c:'Hyper Text Making Language',
        d:'None of the above',
        correct:'b'
    },
    {
        question:'What does JS stands for?',
        a:'Hyper Text Markup Language',
        b:'Cascading Style Sheet',
        c:'JavaScript',
        d:'None of the above',
        correct:'c'
    },
    {
        question:'Which one is backend technology?',
        a:'HTML',
        b:'CSS',
        c:'React',
        d:'NodeJs',
        correct:'d'
    }
];
let currQuestion=0;
let curAns=undefined;
let score=0;
const a=document.querySelector('.ans--a');
const b=document.querySelector('.ans--b');
const c=document.querySelector('.ans--c');
const d=document.querySelector('.ans--d');
const questionText=document.querySelector('.question');
const btn=document.querySelector('.submit');
const ans=document.querySelectorAll('.answer');
const quizContainer=document.querySelector('.quizs');
const h3=document.querySelector('h3');
const showQuestion=function(){
    ;
    questionText.textContent=questions[currQuestion].question;
    a.textContent=questions[currQuestion].a;
    b.textContent=questions[currQuestion].b;
    c.textContent=questions[currQuestion].c;
    d.textContent=questions[currQuestion].d;
    h3.textContent=`Score:${score}`
}
showQuestion();

const selectAns=function(){
    ans.forEach(answer=>{
        if(answer.checked){
            curAns=answer.id;
            console.log(curAns)
        }
    });
    
};
const deselect=function(){
    ans.forEach(answer=>answer.checked=false);
}


btn.addEventListener('click',function(){
    selectAns();
    if(curAns){
        if(curAns === questions[currQuestion].correct){
            score++;
        }
        currQuestion++
        if(currQuestion < questions.length){
            showQuestion();
            deselect();
            
        }else{
            btn.remove();
           quizContainer.innerHTML=`
             You have scored ${score}/${questions.length}<button class="reset" onClick="showQuestion">Reset</button>`;
             const reset=document.querySelector('.reset');
             reset.addEventListener('click',function(){
                location.reload();
             });
        }
    }
});


