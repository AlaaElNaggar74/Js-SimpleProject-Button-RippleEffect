let butripple=document.getElementById("butripple");
let changpos=document.getElementById("changpos");

butripple.addEventListener("mouseenter",(e)=>{
console.log(e);
let x=e.pageX - butripple.offsetLeft;
let y=e.pageY - butripple.offsetTop;
changpos.style.left=x+"px";
changpos.style.top=y+"px"; 


});
