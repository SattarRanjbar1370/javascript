// add number for console

let n = 1;
let number_prompt;
let total = 0;

do{
    number_prompt = prompt("plese enter add: ");
    number_prompt = parseInt(number_prompt);
    if(0 < number_prompt && number_prompt <= 20){
        total = number_prompt + total
        console.log("   -- "+ n + " --   ::: " + number_prompt);
        console.log( "                     ::::>>>  " + total)
        n++;
    }else{
        alert("Invalid number, please trys '0 to 20'  ");
        number_prompt = prompt("plese enter add: ");
        number_prompt = parseInt(number_prompt);
    }
    
    
}while(total < 50);