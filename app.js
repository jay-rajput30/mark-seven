const txtArea = document.querySelector('#txtArea');
const button = document.querySelector('.btn');
const display = document.querySelector('.output');

let url = "https://api.funtranslations.com/translate/groot.json?text=";

function translateText(){ 
   fetch(`${url}${txtArea.value}`)
   .then(res=> res.json())
   .then( res=> {
    display.innerText = `${res.contents.translated}`;
    // console.log(res);
   })
   .catch(e => alert('You have encountered an server error.  Please check after an hour!'));

}
button.addEventListener('click', ()=>{
 translateText(txtArea.value);
})

