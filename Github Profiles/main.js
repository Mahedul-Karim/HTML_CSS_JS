const APIURL = "https://api.github.com/users/";
const resultsEl=document.querySelector('.results--container');
const main=document.getElementById('main--area');
const form=document.getElementById('form');
const search=document.getElementById('search');




const generateMarkup=function(data){
    const markUp=`
    <div class="results--container">
        <img src="${data.avatar_url
        }" alt="" class="img">
        <div class="user--info">
            <h3 class="user-name">${data.name
            }</h3>
            <p class="user--des">${data.bio}</p>
            <ul class="list">
                <li> ${data.followers} <strong>Followers</strong></li>
                <li>${data.following} <strong>following</strong></li>
                <li>${data.public_repos} <strong>repos</strong></li>
            </ul>
            <div id="repos">
            
                
            </div>
        </div>
    </div>
    `
    main.insertAdjacentHTML('beforeend',markUp);
};

const generateRepos=function(data){
    const slicedRepo=data.slice(0,11);
    const repos=document.getElementById('repos');
    slicedRepo.map(data=>{
        const repo= `
        <a href="${data.archive_url}" class="repo">${data.name}</a>
        `;
        return repos.insertAdjacentHTML('afterbegin',repo)
 })};
const getProfile=async function(name){
    const res=await fetch(APIURL+name);
    const data=await res.json();
    console.log(data);
    generateMarkup(data);
}
// getProfile('florinpop17');

const getRepos=async function(name){
    const res=await fetch(APIURL + name + "/repos");
    const data=await res.json();
    console.log(data);
    generateRepos(data)
    
}
// getRepos('florinpop17');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const userName=search.value;
    getProfile(userName);
    getRepos(userName);
    search.value='';
})