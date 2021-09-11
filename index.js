const root= document.querySelector(".root");
const das = document.querySelector("body > div > button.button.das");
const basu = document.querySelector("body > div > button.button.basu");
const coins = document.querySelectorAll(".coin");
const dasIndicator = document.querySelector("body > div > button.button.das > span");
const basuIndicator = document.querySelector("body > div > button.button.basu >span");
const statsButton = document.querySelector("body > div > button.stats");
const dataViewer = document.querySelector(".data");
const close  = document.querySelector("#close");
const graph = document.querySelector(".graph");
das.addEventListener('click',()=>{
    let total =0 ;
    coins.forEach((coin)=>{
        coin.classList.remove("basu");
        coin.classList.add("das");
        coin.classList.toggle("red");
        coin.classList.toggle("yellow");
        dasIndicator.innerText = "\uD83D\uDD34"
        basuIndicator.innerText= "🟢"
        const i=Math.floor(2*Math.random());
        coin.innerText = i;
        total+=i;
    })
    let a = {};
    if(localStorage.getItem('data') != null){
        a = JSON.parse(localStorage.getItem('data'));
    } 
    a[total] = a[total]?a[total]+1:1
    localStorage.setItem('data',JSON.stringify(a));
    updateStats();
})
basu.addEventListener('click',()=>{
    let total =0 ;
    coins.forEach((coin)=>{
        coin.classList.remove("das");
        coin.classList.add("basu");
        coin.classList.toggle("red");
        coin.classList.toggle("yellow");
        basuIndicator.innerText = "\uD83D\uDD34";
        dasIndicator.innerText= "🟢";
        const i=Math.floor(2*Math.random());
        coin.innerText = i;
        total+=i;
    })
    let a = {};
    if(localStorage.getItem('data') != null){
        a = JSON.parse(localStorage.getItem('data'));
    } 
    a[total] = a[total]?a[total]+1:1
    localStorage.setItem('data',JSON.stringify(a));
    updateStats();
})

statsButton.addEventListener('click',(e)=>{
    dataViewer.style.display = "block"
    updateStats();
})
close.addEventListener('click',()=>{
    dataViewer.style.display = "none";
})

const updateStats = () => {
    const pre = document.createElement('pre');
    pre.innerText = localStorage.getItem('data');
    graph.innerHTML = '';
    graph.appendChild(pre);

}