let hpDisplay = document.getElementById("home-point")
let gtDisplay = document.getElementById("guest-point")


let homePoints = 0;
let guestPoints =0;


function add1point(){
    homePoints+=1
    hpDisplay.textContent = homePoints
}
function add2point(){
    homePoints+=2
     hpDisplay.textContent = homePoints
}
function add3point(){
    homePoints+=3
     hpDisplay.textContent = homePoints
}
function gadd1point(){
    guestPoints+=1
    gtDisplay.textContent = guestPoints
}
function gadd2point(){
   guestPoints+=1
   gtDisplay.textContent = guestPoints
}
function gadd3point(){
    guestPoints+=1
    gtDisplay.textContent = guestPoints
}
function reset(){
    homePoints=0
    guestPoints=0
    hpDisplay.textContent = homePoints
    gtDisplay.textContent = guestPoints
}