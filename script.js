const toggle=document.querySelector('#theme');
try{if(localStorage.getItem('yue-theme')==='light')document.body.classList.add('light')}catch{}
function label(){toggle.textContent=document.body.classList.contains('light')?'Dark mode':'Light mode'}
label();toggle.addEventListener('click',()=>{document.body.classList.toggle('light');label();try{localStorage.setItem('yue-theme',document.body.classList.contains('light')?'light':'dark')}catch{}});
