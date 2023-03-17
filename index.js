let btnOneLeft = document.getElementById("#addOneLeft");
let btnTwoLeft = document.getElementById("#addTwoLeft");
let btnThreeLeft = document.getElementById("#addThreeLeft");
let btnOneRight = document.getElementById("#addOneRight");
let btnTwoRight = document.getElementById("#addTwoRight");
let btnThreeRight = document.getElementById("#addThreeRight");
let scoreLeft = document.getElementById("#scoreLeft");
let scoreRight = document.getElementById("#scoreRight");
let scoreHome = 0;
let scoreGuest = 0;

btnOneLeft.addEventListener("click", incrementAddOneHome);
btnTwoLeft.addEventListener("click", incrementAddTwoHome);
btnThreeLeft.addEventListener("click", incrementAddThreeHome);
btnOneRight.addEventListener("click", incrementAddOneGuest);
btnTwoRight.addEventListener("click", incrementAddTwoGuest);
btnThreeRight.addEventListener("click", incrementAddThreeGuest);



function incrementAddOneHome(){
 scoreHome +=1;
 scoreLeft.innerText = scoreHome;
}

function incrementAddTwoHome(){
 scoreHome +=2;
 scoreLeft.innerText = scoreHome;
}

function incrementAddThreeHome(){
    scoreHome +=3;
    scoreLeft.innerText = scoreHome;
}

function incrementAddOneGuest(){
 scoreGuest +=1;
 scoreRight.innerText = scoreGuest;
}

function incrementAddTwoGuest(){
 scoreGuest +=2;
 scoreRight.innerText = scoreGuest;
}

function incrementAddThreeGuest(){
 scoreGuest +=3;
 scoreRight.innerText = scoreGuest;
}


