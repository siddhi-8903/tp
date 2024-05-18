let gif=document.getElementById('gif');
let yup=document.getElementById('yup');
let response=document.getElementById('choice');
let yes=document.getElementById('no');
function dipy(){
    gif.style.display='none';
    yup.style.display='block';
    choice.style.display='none';
}
no.addEventListener('mouseover',()=>{
    no.style.position='absolute';
    no.style.top=Math.floor(Math.random()*40)+"vh";
    no.style.right=Math.floor(Math.random()*40)+"vw";
})