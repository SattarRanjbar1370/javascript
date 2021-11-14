// add number for console

let n = 1;
let number_prompt;
let total = 0;

do{
    number_prompt = prompt("plese enter add: ");
    number_prompt = parseInt(number_prompt);
    total = number_prompt + total
    console.log("   -- "+ n + " --   ::: " + number_prompt);
    console.log( "                     ::::>>>  " + total)
    n++;
}while(total < 50);