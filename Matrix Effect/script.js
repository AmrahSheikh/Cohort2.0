const p = document.querySelector("p")
const text = p.innerText

const charctor="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"

let iteration = 0
let int;
function randomText(){
    const str = text.split("").map((char,idx)=>{
        if(idx<iteration){
            return char
        }
        return charctor.split("")[ Math.floor(Math.random() * 62) ]
    }).join("")
    p.innerText =str

    iteration+= 0.3
}

p.addEventListener("mouseenter", ()=>{
    iteration = 0;
    clearInterval(int);
    int = setInterval(randomText, 30);
})
p.addEventListener("mouseleave",()=>{
    clearInterval(int);
    p.innerText = text;
})
