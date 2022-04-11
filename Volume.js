function convertTemperature() {
    let val = document.getElementById("input_value");
    let userinput = document.getElementById("userinput");
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    let result_text = document.getElementById("result_text")
  
  
    val.addEventListener("keyup", convertTemperature);
    input.addEventListener("change", convertTemperature);
    output.addEventListener("change", convertTemperature);
  
    let inputValue = input.value;
    let outputValue = output.value;
    let result;
  let rounded;
  
    //Liters
    if (inputValue === "liters" && outputValue === "gallons") {
      result = (Number(val.value) * 0.264) ; 
 
    rounded = Math.round( result * 100) / 100;debugger;
   
    console.log (rounded);
      console.log(rounded,userinput.value);
      if (rounded == userinput.value) {
      
  
        document.getElementById("result_text").innerHTML = " Correct! ";
  
      }
      else {
  
        document.getElementById("result_text").innerHTML = " InCorrect! "
      }
  
  
  
  
    }
    else if (inputValue === "liters" && outputValue === "cups") {
  
      result = Number(val.value)  * 4.227;
      rounded = Math.round( result * 100) / 100;
      input_rounded =Math.round(inputValue * 100 )/100 ;
      if (rounded == userinput.value) {
  
  
        document.getElementById("result_text").innerHTML = " Correct! ";
  
      }
  
      else {
  
        document.getElementById("result_text").innerHTML = " InCorrect! ";
      }
  
  
    }
  
    else if (inputValue === "liters" && outputValue === "liters") {
      result = val.value;
  
      if (result == userinput.value) {
        document.getElementById("result_text").innerHTML = " Correct! ";
  
      }
      else {
  
        document.getElementById("result_text").innerHTML = " InCorrect! "
      }
  
  
  
    }
  
  
    //Gallons
    if (inputValue === "gallons" && outputValue === "cups")
    
    {
      result = Number((val.value ) * 16) ;
  
      if (result == userinput.value) {
        document.getElementById("result_text").innerHTML = " Correct! ";
  
      }
      else {
  
        document.getElementById("result_text").innerHTML = " InCorrect! "
      }
  
  
  
  
  
  
    } else if (inputValue === "gallons" && outputValue === "liters") 
    
    
    {
      result = Number((val.value ) * 3.785) ;
  
      if (result == userinput.value) {
        document.getElementById("result_text").innerHTML = " Correct! ";
  
      }
      else {
  
        document.getElementById("result_text").innerHTML = " InCorrect! "
      }
  
  
  
  
  
  
  
  
  
    } else if (inputValue === "gallons" && outputValue === "gallons") 
    
    
    {
      result = val.value;
      if (result == userinput.value) {
        document.getElementById("result_text").innerHTML = " Correct! ";
  
      }
      else {
  
        document.getElementById("result_text").innerHTML = " InCorrect! "
      }
  
  
  
      
    }
  
  
    //Cups
    if (inputValue === "cups" && outputValue === "gallons") {
      result = Number(val.value) *  0.0625;
  
      if (result == userinput.value) {
        document.getElementById("result_text").innerHTML = " Correct! ";
  
      }
      else {
  
        document.getElementById("result_text").innerHTML = " InCorrect! "
      }
  
  
  
  
  
  
  
  
  
    } else if (inputValue === "cups" && outputValue === "liters")
     {
      result = Number((val.value ) * 0.237) ;
      if (result == userinput.value) {
        document.getElementById("result_text").innerHTML = " Correct! ";
  
      }
      else {
  
        document.getElementById("result_text").innerHTML = " InCorrect! "
      }
  
  
  
  
  
  
  
    } else if (inputValue === "cups" && outputValue === "cups") {
      result = val.value;
  
  
      if (result == userinput.value) {
        document.getElementById("result_text").innerHTML = " Correct! ";
  
      }
      else {
  
        document.getElementById("result_text").innerHTML = " InCorrect! "
      }
  
  
  
  
  
  
    }
  
  
  }
  
  function reset() {
    convertTemperature();
  }