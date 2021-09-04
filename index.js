const root= document.querySelector(".root");
const das = document.querySelector("body > div > button.button.das");
const basu = document.querySelector("body > div > button.button.basu");
const coins = document.querySelectorAll(".coin")
das.addEventListener('click',()=>{
    coins.forEach((coin)=>{
        coin.classList.remove("basu");
        coin.classList.add("das");
        coin.classList.toggle("red");
        coin.classList.toggle("yellow");
        const i=Math.floor(2*Math.random());
        coin.innerText = i;
    })
})
basu.addEventListener('click',()=>{
    coins.forEach((coin)=>{
        coin.classList.remove("das");
        coin.classList.add("basu");
        coin.classList.toggle("red");
        coin.classList.toggle("yellow");
        const i=Math.floor(2*Math.random());
        coin.innerText = i;
    })
})
