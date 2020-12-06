const txtArea = document.querySelector('#txtArea');
const button = document.querySelector('.btn');
const display = document.querySelector('.output');

let url = "https://api.funtranslations.com/translate/groot.json?text=";

function translateText(){ 
   fetch(`${url}${txtArea}`)
   .then(res=> res.json())
   .then( res=> display.innerText = `${res.contents.translated}`)
   .catch(e => alert(e));

}
button.addEventListener('click', ()=>{
 translateText(txtArea.value);
})

