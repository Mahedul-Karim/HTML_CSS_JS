const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const main=document.getElementById('main--area');
const form=document.getElementById('form');
const search=document.querySelector('.search');

const scoreColor=function(score){
   if(score >= 7 ){
    return 'green'
   }else if(score >=5){
    return 'orange'
   }else{
     return 'red'
   }
};

const generateMarkup=function(data){
    const markUp=`
        <div class="movie-container">
            <img src="${IMGPATH+data.poster_path
            }" alt="" class="img">
            <div class="movie--info">
                     <h2 class="title">${data.title}</h2>
                     <span class="${scoreColor(data.vote_average)}">${data.vote_average}</span>
            </div>
            <div class="overview">
                <h3 class="overview--title">Overview:</h3>
                <p class="details">${data.overview
                }</p>
            </div>
        </div>
        `
         main.insertAdjacentHTML('afterbegin',markUp);
};

const getMovies=async function(){
    const res=await fetch(APIURL);
    const resData=await res.json();
    console.log(resData);
    resData.results.forEach(data=>{
        generateMarkup(data);
    });
   
}
getMovies();

const getSearchResults=async function(search){
    const res=await fetch(SEARCHAPI+search);
    const resData=await res.json();
    resData.results.forEach(data=>{
        generateMarkup(data)
    })
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    const searchValue=search.value;
    getSearchResults(searchValue);
});