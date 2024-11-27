// the main program

const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = 'ur mom';
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = 'pick the fucking right number u dumbass';
    }
}