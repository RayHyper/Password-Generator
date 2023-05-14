let outputBox = document.getElementById("user-pass")

 let inputElement = document.getElementById("amount");

let message = document.getElementById("strong");

function makePassword(){

  let userInput = inputElement.value;
  
  if(userInput <= 20){
    
  
  if(userInput > 15){
     message.style.color = "green";
  message.innerText = "(Password is strong)"
  }
else if(userInput >= 10 && userInput <= 15){
  message.style.color = "#FFA500";
  message.innerText = "(Password is good)"
}
  else if(userInput<10){
     message.style.color = "red";
  message.innerText = "(Password is weak)"
  }
  
  
  outputBox.innerText= generatePassword(userInput);
 
  }
  else{
    outputBox.innerText = "Length too long...";
  }
  
}


function generatePassword(amount){
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
               'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
               '!', '@', '#', '$', '&'];
               
               
let randomNum;
let password = "";

for(let i = 0; i<amount; i++){
    randomNum = Math.floor((Math.random() * letters.length));
    password += letters[randomNum];
}

return password;
    
    
}