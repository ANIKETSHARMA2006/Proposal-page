const rightBox=document.querySelector(".Right");
const left = document.querySelector(".left");
let image=document.querySelector(".image");
function move(){
    const step = 10;
    const max = 100;
    const a = Math.floor(Math.random() * (max / step)) * step;
    const b= Math.floor(Math.random() * (max / step)) * step -2;
    rightBox.style.top=a+"vh";
    rightBox.style.left=b+"vw";
}
function yes(){
    image.src="afterBackground.png";
    left.style.display="none";
    rightBox.style.display="none";
}
rightBox.addEventListener("click",move);
left.addEventListener("click",yes);