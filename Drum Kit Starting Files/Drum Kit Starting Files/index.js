/*                                                         Code Explanation 

This is a piece of code that creates a drum kit simulator. The user can click on the drum buttons or press the corresponding keyboard keys to hear a sound, and 
the button/key will also have a temporary animation when it is clicked/pressed.

Here is what the code does step by step:

The first line of code creates a variable named numberOfDrumButtons and assigns it the number of elements that have the class "drum" in the HTML document.

The for loop that follows sets up event listeners for each drum button. It loops through each drum button using the numberOfDrumButtons variable as the loop condition, 
and assigns a click event listener to each button. When the button is clicked, the makeSound() function and the buttonAnimation() function are called with the buttonInnerHTML 
parameter, which is the text inside the button.
javascript

The next part sets up an event listener for keyboard presses. When a key is pressed, the makeSound() function and buttonAnimation() function are called with 
the event.key parameter, which is the key that was pressed.

The makeSound() function takes in a parameter key, and plays a different sound depending on which key was pressed. It uses a switch statement to determine which
 sound to play. For example, if the "w" key was pressed, it plays the sound file "tom-1.mp3".

Finally, the buttonAnimation() function takes in a parameter currentKey, which is the button or key that was pressed. It finds the corresponding button in the HTML document using 
document.querySelector("." + currentKey), and adds the "pressed" class to it to create the temporary animation. It then removes the "pressed" class after 100 milliseconds using 
setTimeout().

                                                               What is a Switch Statement?
In JavaScript, a switch statement is a control flow statement that allows you to execute different blocks of code based on the value of an expression. 
The expression is evaluated once, and then compared to each case in the switch statement until a match is found.

Here's the basic syntax of a switch statement in JavaScript:

switch (expression) {
  case value1:
    // code to execute if expression matches value1
    break;
  case value2:
    // code to execute if expression matches value2
    break;
  // more cases can be added here
  default:
    // code to execute if expression doesn't match any of the cases
    break;
}

Let's break down the different parts of a switch statement:

expression: This is the value that is being compared to each case in the switch statement. It can be any expression that returns a value.

case: Each case represents a possible value that the expression could evaluate to. If the expression matches a case, then the code inside that case is executed.

break: The break keyword is used to break out of the switch statement and prevent the code from falling through to the next case. It's important to include break 
statements at the end of each case to avoid unintended behavior.

default: The default case is used as a catch-all if the expression doesn't match any of the cases. If there is no default case and the expression doesn't match any 
of the cases, then the switch statement will simply do nothing.

*/



var numberOfDrumButtons = document.querySelectorAll(".drum").length;



for (var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);



    });
    }

    //Detecting Keyboard Press
     
    document.addEventListener("keydown", function() {
        makeSound(event.key);
        buttonAnimation(event.key);
    })


    function makeSound(key) {
        switch (key) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
            break;

            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
            break;  
            
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
            break;   

            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
            break; 

            case "j":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
            break; 

            case "k":
                var kickBrass = new Audio("sounds/kick-bass.mp3");
                kickBrass.play();
            break;   

            case "l":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
            break;   

            default: console.log(buttonInnerHTML);

        }
    }

    

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}


