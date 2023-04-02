let butripple=document.getElementById("butripple");
// let changpos=document.getElementById("changpos");

butripple.addEventListener("click",(e)=>{
console.log(e);
let changpos=document.createElement("div")
changpos.classList="mobripp active";
// changpos.classList="active";
butripple.appendChild(changpos)
let x=e.clientX - butripple.offsetLeft;
let y=e.clientY - butripple.offsetTop;
changpos.style.left=x+"px";
changpos.style.top=y+"px"; 

setTimeout(()=>{
  changpos.remove();
},1000)


});
// butripple.addEventListener("mouseleave",(e)=>{



// });
// butripple.onmouseleave