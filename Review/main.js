const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];
const personEl=document.querySelector('.person');
const nameEl=document.querySelector('.name');
const professionEl=document.querySelector('.profession');
const reviewEl=document.querySelector('.review');
const prevBtn=document.querySelector('.prev-btn');  
const nextBtn=document.querySelector('.next-btn');  
const randomBtn=document.querySelector('.random-btn'); 
const container=document.querySelector('.container');

let curReview=0;

const showReview=function(){
    const review=reviews[curReview];
    const markUp=`
    <div class="review--img">
    <img src="${review.img}" class="person">
</div>
<div class="reviews">
    <p class="name">${review.name}</p>
    <p class="profession">${review.job}</p>
    <p class="review">
        ${review.text}
    </p>
</div>
    `;
    container.innerHTML='';
    container.insertAdjacentHTML('afterbegin',markUp)
};
showReview();

prevBtn.addEventListener('click',function(){
    if(curReview === 0){
        curReview=reviews.length-1;
    }else{
        curReview--
    }
    showReview();
});
nextBtn.addEventListener('click',function(){
    if(curReview===reviews.length-1){
        curReview=0;
    }else{
        curReview++;
    }
    showReview()
});
randomBtn.addEventListener('click',function(){
    curReview=Math.floor(Math.random()*reviews.length);
    showReview();
})