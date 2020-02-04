// im doing this in vanilla javascript becuase when possible i like to avoid using libraries unless the architect or senior developer says otherwise

// declare all the controllers and things we need to control. 
// due to repetition in this case I will make them global, typically local/block scope is preferable depending on use case

// define containers
let redcontainer = document.getElementById('red');
let greencontainer = document.getElementById('green');
let bluecontainer = document.getElementById('blue');
let whitecontainer = document.getElementById('white');

// im utilizing inline onclick as opposed to attachong an event listener becuase im unsure what browser my client is using 
// if they arent using IE there could be an argument for utilizing event listeners instead. 
const allRed = () =>{
    greencontainer.style.backgroundColor='red';
    bluecontainer.style.backgroundColor='red';
    redcontainer.style.backgroundColor='red';
}

const allGreen = () =>{
    greencontainer.style.backgroundColor='green';
    bluecontainer.style.backgroundColor='green';
    redcontainer.style.backgroundColor='green';

}

const allBlue = () =>{
    greencontainer.style.backgroundColor='blue';
    bluecontainer.style.backgroundColor='blue';
    redcontainer.style.backgroundColor='blue';

}

const allNormal = () =>{
    greencontainer.style.backgroundColor='green';
    bluecontainer.style.backgroundColor='blue';
    redcontainer.style.backgroundColor='red';
}