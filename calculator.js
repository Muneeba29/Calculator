//as we give it id so we select it by id we can also select it by classes
let input = document.getElementById('inputbox');

// to select all buttons we can't use classes  we use query selector ,it will select our all buttons in this variable button 
let buttons = document.querySelectorAll('button');

//we take empty string in which we store our result and show it in input 
let string = "";

//to select all buttons we make an array so we make array (cal) 
let cal = Array.from(buttons)

// we can make a loop in this array it can't play on buttons it play on our foreach loop
//we play a arrow function here we can also use callback function here 
//now we add a click listener here for that we  make an  event listener here whenever any one click on button so what will happen.We add e here by clicking on button e will be add here
//after that we add arrow function here so whenever we click on button the value will appear in our string 
// *if* we use it to check whether the button is click or not is that is key or a equal button if it is a equal button we have to show output so weso we target equal button is that out target .inner html is equal ,then if it is equal so we show this condition code
//in a string we start a function of evalute 
//*evaluate is a function in java script that evaluate mathematically everything which is present in ourr string *
// then we store our string in our input value so whenever equal button is pressed the value of string appear in input box


//*if* it is not an equal button so we add it in string 

//*AC* we target it if anyone click on it so the text become 0 for this we make an empty string  and then we store our string value in our input box

//*DEL* to delete last value from input box we use substring function I take 0 to -1 length of string so that it will  run by excluding it according to  length 
cal.forEach(button => {
    button.addEventListener('click', (e) => {
         if(e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }

        else if (e.target.innerHTML== 'AC') {
            string = "";
            input.value = string;
        }

        
        else if (e.target.innerHTML== 'DEL') {
            string = string.substring(0,string.length-1);
            input.value = string;
        }

        else {
            string += e.target.innerHTML;
            input.value = string;
        }
  })
})