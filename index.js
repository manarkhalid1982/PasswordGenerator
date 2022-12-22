const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1=[]
let password2=[]

function generatePW(){
let option1el=document.getElementById("option1-el")
let option2el=document.getElementById("option2-el")
let CharLeg=characters.length
    for (let i=0 ; i <= 15 ; i++){
    let randomNumber= Math.floor(Math.random()*CharLeg)
    password1+=characters[randomNumber]
    }
    for (let i=0 ; i <= 15 ; i++){
    let randomNumber= Math.floor(Math.random()*CharLeg)
    password2+=characters[randomNumber]
    }
option1el.textContent+=password1
option2el.textContent+=password2

}


