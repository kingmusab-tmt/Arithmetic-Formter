const myInput = ["3232 - 698", "3 - 5900", "500 + 209", "2322 + 4993", "3 - 2090"];
function arithmetic_arranger(myInput){
if(myInput.length > 5){
  console.log ("Too Many Problems")
  }  else {
    for (value of myInput) {
      let item = value.split(" ")
      let numm1 = item[0];
      let numm2 = item[2];
      numm1 = +numm1;
      numm2 = +numm2;
      if (isNaN(numm1) || isNaN(numm2)){
        console.log ("Numbers must only contain digits");
      } else if (item[1] !== "+" && item[1] !== "-"){
        console.log("Operator must be '+' or '-' ")
      } else {
      if (item[0].length > 4 || item[2].length > 4){
      console.log("Numbers cannot be more than four digits \n")
    } else{
if (value.length <= 11 && value.includes("+")) {
    value = value.split("+")
    
    if (value[0].length > value[1].length) {
      if((value[0].length - value[1].length) == 3){
       console.log(`  ${value[0]}`)
      console.log(`+   ${value[1]}`)
      console.log("------")
      let num1 = +value[0];
      let num2 = +value[1];
      sum = num1 + num2
      console.log(` ${sum}\n`);
     } else if((value[0].length - value[1].length) == 2){
       console.log(`  ${value[0]}`)
      console.log(`+  ${value[1]}`)
      console.log("------")
      let num1 = +value[0];
      let num2 = +value[1];
      sum = num1 + num2
      console.log(` ${sum}\n`);
     }  
     else {
        console.log(`  ${value[0]}`)
      console.log(`+ ${value[1]}`)
      console.log("------")
      let num1 = +value[0];
      let num2 = +value[1];
      sum = num1 + num2
      console.log(` ${sum}\n`);
     }
    } else if (value[0].length < value[1].length) {
      if((value[0].length - value[1].length) == -3){
        console.log(`      ${value[0]}`)
      console.log(`+ ${value[1]}`)
      console.log("-------")
      let num1 = +value[0];
      let num2 = +value[1];
      sum = num1 + num2
      console.log(` ${sum}\n`);
      } else if ((value[0].length - value[1].length) == -2){
      console.log(`     ${value[0]}`)
      console.log(`+ ${value[1]}`)
      console.log("-------")
      let num1 = +value[0];
      let num2 = +value[1];
      sum = num1 + num2
      console.log(` ${sum}\n`);
      } else{
          console.log(`    ${value[0]}`)
      console.log(`+ ${value[1]}`)
      console.log("------")
      let num1 = +value[0];
      let num2 = +value[1];
      sum = num1 + num2
      console.log(` ${sum}\n`);
      }
      
    } else if (value[0].length == value[1].length) {
      console.log(`   ${value[0]}`)
      console.log(`+ ${value[1]}`)
      console.log("-------")
      let num1 = +value[0];
      let num2 = +value[1];
      sum = num1 + num2
      console.log(`   ${sum}\n`);
    }
    }
   
  else if (value.length <= 11 && value.includes("-")) {
    value = value.split("-");
     if (value[0].length > value[1].length) {
     if((value[0].length - value[1].length) == 3){
       console.log(`  ${value[0]}`)
      console.log(`-   ${value[1]}`)
      console.log("------")
      let num1 = +value[0];
      let num2 = +value[1];
      diff = num1 - num2
      console.log(`  ${diff}\n`);
     } else if((value[0].length - value[1].length) == 2){
       console.log(`  ${value[0]}`)
      console.log(`-  ${value[1]}`)
      console.log("------")
      let num1 = +value[0];
      let num2 = +value[1];
      diff = num1 - num2
      console.log(`  ${diff}\n`);
     }  
     else {
        console.log(`  ${value[0]}`)
      console.log(`- ${value[1]}`)
      console.log("------")
      let num1 = +value[0];
      let num2 = +value[1];
      diff = num1 - num2
      console.log(`  ${diff}\n`);
      }
       
    } else if (value[0].length < value[1].length) {
      if((value[0].length - value[1].length) == -3){
        console.log(`      ${value[0]}`)
      console.log(`- ${value[1]}`)
      console.log("-------")
      let num1 = +value[0];
      let num2 = +value[1];
      diff = num1 - num2
      console.log(` ${diff}\n`);
      } else if ((value[0].length - value[1].length) == -2){
      console.log(`     ${value[0]}`)
      console.log(`- ${value[1]}`)
      console.log("-------")
      let num1 = +value[0];
      let num2 = +value[1];
      diff = num1 - num2
      console.log(` ${diff}\n`);
      } else{
          console.log(`    ${value[0]}`)
      console.log(`- ${value[1]}`)
      console.log("------")
      let num1 = +value[0];
      let num2 = +value[1];
      diff = num1 - num2
      console.log(` ${diff}\n`);
      }
    } else if (value[0].length == value[1].length) {
      console.log(`   ${value[0]}`)
      console.log(`- ${value[1]}`)
      console.log("-------")
      let num1 = +value[0];
      let num2 = +value[1];
      diff = num1 - num2
      console.log(`   ${diff}\n`);
    }
     } 
        }}
    }
}}
arithmetic_arranger(myInput);