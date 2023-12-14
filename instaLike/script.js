const count = document.querySelector(".like");
const love = document.querySelector(".love");

let flag = 0;

count.addEventListener("click",function (){
    if(flag==0){
        count.style.color = "red";
        flag=1;
    }
    else{
        count.style.color = "black";
        flag=0;
    }
    
} )