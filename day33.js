const prevel=document.querySelector(".prev")
const nextel=document.querySelector(".next")
const imgCont=document.querySelector(".image")
const imageel=document.querySelectorAll(".img")


let idx=0;
let interval=setInterval(run,2000)

function run()
{
   idx++;
   changeImage()
}

function changeImage()
{
    if(idx>imageel.length-1){
       idx=0;
    }
    else if(idx<0){
        idx=imageel.length-1;
    }

    imgCont.style.transform=`translateX(${-idx*100}%)`;
}

function resetInterval(){
    clearInterval(interval)
    interval=setInterval(run,2000)
}

prevel.addEventListener("click",()=>{
    idx--;
    changeImage();
    resetInterval();
})

nextel.addEventListener("click",()=>{
    idx++;
    changeImage();
    resetInterval();
})