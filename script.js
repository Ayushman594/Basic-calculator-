let str=""; //variable used for declaring results

let btn=document.querySelectorAll(".button"); //selecting all buttons with class button using DOM

let btn1=document.getElementById("sqrt");// Variable which select button with id sqrt

let userInput=document.querySelector("input");//Variable which selects input tag for taking inputs and displaying results

 //creating array of buttons and also creating a event on the button for performing operations 
Array.from(btn).forEach((button)=>{
  
    button.addEventListener('click',(e)=>{

       //code for evaluating expressions after clicking = and code for error handling
      if(e.target.innerHTML=="="){
        try{
        str=eval(userInput.value);
        userInput.value=str;
        }
        catch(err){
          userInput.value=`error`;
        }
       }
        

      //This is a code for Calculating 1/x where Value of X is the value given as an input 
      else if (e.target.innerHTML=="1/x"){
          str=eval(1/userInput.value);
          userInput.value=str;
      }

      //This is a code for Calculating x! (Factorial of x) where Value of X is the value given as an input
      else if (e.target.innerHTML=="x!"){
        if(userInput.value==0 || userInput.value==1){
          str="1";
          userInput.value=str;
        }
        else{
           const n=Number.parseInt(userInput.value);
           str=n;
           for(let i=n-1;i>0;i--){
              str*=i;
           }
           userInput.value=str;
        }
    }

    //This is a code for Calculating square root of x where Value of X is the value given as an input
    else if(e.target.innerHTML==btn1.innerHTML){
      str=Math.sqrt(userInput.value);
      userInput.value=str;
    }

    // This is a code which deletes the value on the display
      else if(e.target.innerHTML=="DEL"){
         str=userInput.value;
         str=str.substring(0,str.length-1)
         userInput.value=str;
      }

      // Above code clears the display screen
      else if (e.target.innerHTML=="C"){
        str="";
        userInput.value=str;
      }
      
      
       //This code takes values as input in a display screen
      else{
        str+=e.target.innerHTML;
        userInput.value=str;
      }
    })    
})