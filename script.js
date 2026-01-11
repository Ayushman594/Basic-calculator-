let str = "";
let btn = document.querySelectorAll(".button");
let btn1 = document.getElementById("sqrt");
let userInput = document.querySelector("input");

// Attach click listeners to buttons
Array.from(btn).forEach((button) => {
  button.addEventListener("click", (e) => {
    calculations(e);
  });
});

// Attach one keydown listener to the input
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    // Manually trigger "=" operation
    try {
      str = eval(userInput.value);
      userInput.value = str;
    } catch (err) {
      userInput.value = "error";
    }
  }
});

function calculations(e) {
  if (e.target.innerHTML == "=") {
    try {
      str = eval(userInput.value);
      userInput.value = str;
    } catch (err) {
      userInput.value = "error";
    }
  } else if (e.target.innerHTML == "1/x") {
    str = 1 / userInput.value;
    userInput.value = str;
  } else if (e.target.innerHTML == "x!") {
    const n = Number.parseInt(userInput.value);
    if (n === 0 || n === 1) {
      str = "1";
    } else {
      str = n;
      for (let i = n - 1; i > 0; i--) {
        str *= i;
      }
    }
    userInput.value = str;
  } else if (e.target.innerHTML == btn1.innerHTML) {
    str = Math.sqrt(userInput.value);
    userInput.value = str;
  } else if (e.target.innerHTML == "DEL") {
    str = userInput.value;
    str = str.substring(0, str.length - 1);
    userInput.value = str;
  } else if (e.target.innerHTML == "C") {
    str = "";
    userInput.value = str;
  } else {
    str += e.target.innerHTML;
    userInput.value = str;
  }
}
