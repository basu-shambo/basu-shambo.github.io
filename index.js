const letters =[
    {primary:"1", secondary:[".",",","!"]},
    {primary:"2", secondary:["a","b","c"]},
    {primary:"3", secondary:["d","e","f"]},
    {primary:"4", secondary:["g","h","i"]},
    {primary:"5", secondary:["j","k","l"]},
    {primary:"6", secondary:["m","n","o"]},
    {primary:"7", secondary:["p","q","r","s"]},
    {primary:"8", secondary:["t","u","v"]},
    {primary:"9", secondary:["w","x","y","z"]},
    {primary:"*", secondary:[]},
    {primary:"0", secondary:[" "]},
    {primary:"#", secondary:[]},

]

//selecting the keypad class where to add the buttons
const keypad = document.querySelector(".keypad")
const output = document.querySelector("#output")

// function to generate the buttons and its content
const generateButtons=(letters,keypad)=>{
    let ih = "";
    letters.forEach((letter,index)=>{
        const secondary = letter["secondary"].length? letter["secondary"].reduce((r,l)=>r+` ${l}`):" "
        ih+=`<button class="button" id=${index}>${letter["primary"]}<div>${secondary}</div></button>`
    })
    keypad.innerHTML = ih;

}

generateButtons(letters,keypad);


//getting the clicks and setting the values
let text = ""; // the text that will be stored in the 
output.textContent = text;
let start = 0; //to calculate the time elapsed
let last = null; //id of the last button that was clicked
let clicks = -1; //to get the number of clicks on the button
let lastmd = 0; //time of the last mousedown event

const shortClick = 500; // max duartion b/w mouseup  for a short click in ms

//logic for short clicks and long clicks

//getting the 
keypad.addEventListener('mousedown',(e)=>{
    e.stopPropagation(); 
    if(Date.now()-lastmd>=shortClick){ //checking if the last mousedown event to findout where the next cahracter will go
        clicks=-1; 
        
    }
    //setting the variables in case of a mousedown
    start = Date.now();  //this will help in checking if the click is short or long
    // last = e.target.id;
    lastmd = Date.now();
        
    
})

keypad.addEventListener('mouseup',(e)=>{
    e.stopPropagation();
        const time = Date.now()-start; // to check if the click is a short click or a long click
        if(time <= shortClick ){ // checking if the click is a short one
            clicks++;
            arr = letters[parseInt(e.target.id)]['secondary'] //since the click is short getting the secondary character array
            //checking if the same button is clicked as before
            if(last==e.target.id){ 
                //checking if the button is clicked before
                if(clicks){
                    //setting the output and checking if the button even has a secondarry array
                    output.textContent = arr.length?
                                            output.textContent.slice(0,-1)+arr[clicks%arr.length]:
                                            output.textContent+letters[parseInt(e.target.id)]['primary']
                    
                }
                else{
                    output.textContent = arr.length?
                                            output.textContent+arr[clicks%arr.length]:
                                            output.textContent+letters[parseInt(e.target.id)]['primary']
                }
            }
            else{
                clicks=0;
                output.textContent = arr.length?
                                            output.textContent+arr[clicks%arr.length]:
                                            output.textContent+letters[parseInt(e.target.id)]['primary']
                
            }
            start = Date.now();
            last = e.target.id;
        
        }
        else if(time> shortClick){
            
            output.textContent = output.textContent + letters[parseInt(e.target.id)]['primary']
            start = 0;
            clicks = -1;
            

        }
        

    
})

//just for clearing
const clear = document.querySelector("#clear");
if(clear){
    clear.addEventListener('click',(e)=>{
        e.stopPropagation();
        output.textContent = output.textContent.slice(0,-1);
    })
}
