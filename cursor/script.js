const main = document.querySelector(".main");
const crsr = document.querySelector(".cursor");

main.addEventListener("mousemove", function(a){
    crsr.style.left = a.x+"px";
    crsr.style.top = a.y + "px";
})