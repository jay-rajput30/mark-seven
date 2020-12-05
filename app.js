const txtArea = document.querySelector('#txtArea');
const btn = document.querySelector('.btn');
const output = document.querySelector('.output');

let url  = "https://api.funtranslations.com/translate/groot.json";


function translateText(){
    // url += url + txtArea.value;
    console.log(txtArea.value);
}

btn.addEventListener('click', ()=>{
    translateText();
});