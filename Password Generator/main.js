const pwtextEl=document.querySelector('.pw--text')
const copyEl=document.querySelector('.copy');
const numberEl=document.getElementById('number');
const uppercaseEl=document.getElementById('uppercase');
const lowercaseEl=document.getElementById('lowercase');
const symbolEl=document.getElementById('symbol');
const numEl=document.getElementById('num');
const generateEl=document.getElementById('generate');
const copyText=document.querySelector('p');
const uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase='abcdefghijklmnopqrstuvwxyz';
const numbers='0123456789';
const symbol='!@#$%^&*()+_';

const getUppercase=function(){
    return uppercase[Math.floor(Math.random()*uppercase.length)];
};
const getLowercase=function(){
    return lowercase[Math.floor(Math.random()*lowercase.length)];
};
const getNumbers=function(){
    return numbers[Math.floor(Math.random()*numbers.length)];
};
const getSymbol=function(){
    return symbol[Math.floor(Math.random()*symbol.length)];
};

const generatePassword=function(){
    const pass=[];
    if(uppercaseEl.checked){
        pass.push(getUppercase())
    }
    if(lowercaseEl.checked){
        pass.push(getLowercase());
    }
    if(symbolEl.checked){
        pass.push(getSymbol());
    }
    if(numEl.checked){
        pass.push(getNumbers());
    }
    if(pass.length===0) return;
 
    return pass[Math.floor(Math.random()*pass.length)]
}
const showPassword=function(){
    let len=numberEl.value;
   let password='';
    
    for(let i=0;i<len;i++){
        const pass=generatePassword();
        password+=pass;
    }
   pwtextEl.textContent=password;
};

generateEl.addEventListener('click',function(){
   showPassword();
});

const copyToClipboard=function(){
    const textArea=document.createElement('textarea');
    textArea.value=pwtextEl.textContent;
    document.body.append(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
}

copyEl.addEventListener('click',function(){
    copyToClipboard();
    copyText.classList.add('copied');
    copyText.innerHTML='Copied';
    setTimeout(()=>copyText.remove(),1000)
});