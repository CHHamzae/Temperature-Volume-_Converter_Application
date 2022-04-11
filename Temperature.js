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
  //Celsius
  if (inputValue === "celsius" && outputValue === "fahrenheit") {
    result = Number(((val.value) * 9 / 5) + 32);

  rounded = Math.round( result * 100) / 100;
 
   
    console.log(rounded,userinput.value);
    if (rounded == userinput.value) {
    

      document.getElementById("result_text").innerHTML = " Correct! ";

    }
    else {

      document.getElementById("result_text").innerHTML = " InCorrect! "
    }




  }
  else if (inputValue === "celsius" && outputValue === "kelvin") {

    result = Number(val.value) + 273.15;
    rounded = Math.round( result * 100) / 100;
    input_rounded =Math.round(inputValue * 100 )/100 ;
    if (rounded == userinput.value) {


      document.getElementById("result_text").innerHTML = " Correct! ";

    }

    else {

      document.getElementById("result_text").innerHTML = " InCorrect! ";
    }


  }

  else if (inputValue === "celsius" && outputValue === "celsius") {
    result = val.value;

    if (result == userinput.value) {
      document.getElementById("result_text").innerHTML = " Correct! ";

    }
    else {

      document.getElementById("result_text").innerHTML = " InCorrect! "
    }



  }


  //Fahrenheit
  if (inputValue === "fahrenheit" && outputValue === "celsius")
  
  {
    result = Number((val.value - 32) * 5) / 9;

    if (result == userinput.value) {
      document.getElementById("result_text").innerHTML = " Correct! ";

    }
    else {

      document.getElementById("result_text").innerHTML = " InCorrect! "
    }






  } else if (inputValue === "fahrenheit" && outputValue === "kelvin") 
  
  
  {
    result = Number((val.value - 32) * 5 / 9) + 273.15;

    if (result == userinput.value) {
      document.getElementById("result_text").innerHTML = " Correct! ";

    }
    else {

      document.getElementById("result_text").innerHTML = " InCorrect! "
    }









  } else if (inputValue === "fahrenheit" && outputValue === "fahrenheit") 
  
  
  {
    result = val.value;
    if (result == userinput.value) {
      document.getElementById("result_text").innerHTML = " Correct! ";

    }
    else {

      document.getElementById("result_text").innerHTML = " InCorrect! "
    }









    
  }


  //Kelvin
  if (inputValue === "kelvin" && outputValue === "celsius") {
    result = Number(val.value) - 273.15;

    if (result == userinput.value) {
      document.getElementById("result_text").innerHTML = " Correct! ";

    }
    else {

      document.getElementById("result_text").innerHTML = " InCorrect! "
    }









  } else if (inputValue === "kelvin" && outputValue === "fahrenheit")
   {
    result = Number((val.value - 273.15) * 9 / 5) + 32;
    if (result == userinput.value) {
      document.getElementById("result_text").innerHTML = " Correct! ";

    }
    else {

      document.getElementById("result_text").innerHTML = " InCorrect! "
    }







  } else if (inputValue === "kelvin" && outputValue === "kelvin") {
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