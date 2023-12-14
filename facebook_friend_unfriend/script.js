const btn = document.querySelector("button");
const stranger = document.querySelector("h5");

let flag = 0;

btn.addEventListener("click", function(){
    if(flag===0){
        btn.innerText="Message";
        btn.style.backgroundColor="grey";
        btn.style.color="black";
        stranger.style.color="green";
        stranger.innerText="Friends";
        flag=1;
    }
    else{
        btn.innerText="Add Friend";
        btn.style.backgroundColor="blue";
        btn.style.color="white";
        stranger.style.color="red";
        stranger.innerText="Stranger";
        flag=0;
    }
    
})

// console.log(btn);
// console.log(stranger);