let str="";// variable used for declaring results
let btn=document.querySelectorAll(".button");// selecting all buttons with class button using DOM

let userInput=document.querySelector("input");

// creating array of buttons and also creating a event on the for 
Array.from(btn).forEach((button)=>{
  
    button.addEventListener('click',(e)=>{
      // code for evaluating expressions
      if(e.target.innerHTML=="="){
        str=eval(userInput.value);
        userInput.value=str;
      }
      else if(e.target.innerHTML=="X"){
        e.target.innerHTML="*";
        str+=e.target.innerHTML;
        userInput.value=str;
      }
      else if (e.target.innerHTML=="C"){
        str="";
        userInput.value=str;
      }
      // else if(str==0){
      //   str=e.target.innerHTML;
      //   userInput.value=str;
      // }
      else{
        str+=e.target.innerHTML;
        userInput.value=str;
    }
   })
})