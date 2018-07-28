"use strict;"

function pageOpen(pagID){
    var mainContent = document.getElementById("bodydiv");
    var homeContent = document.getElementById(pagID).innerHTML;
    mainContent.style.opacity = 0;
    window.setTimeout(function () {
                                    mainContent.innerHTML = homeContent;
                                    console.log(pagID+"opened");
                                    mainContent.style.opacity = 1;
                                    if(pagID==="homePage"){
                                        homePageBoxWidth();
                                    }
                                    },500);
}
function validateText(x) {
    var element = document.getElementById(x);
    console.log("validated the char")
    element.value = element.value.replace(/[^a-zA-Z]+/, '');
}
function validateNum(x) {
    var element = document.getElementById(x);
    console.log("validated the phone number")
    element.value = element.value.replace(/[^0-9]+/, '');
}

//facebook button

function displayID(did){
    var element = document.getElementById(did).style.visibility = "visible"
} 
function countLines() {
    var divHeight = document.getElementById("homePageId").offsetHeight
    var lineHeight = parseInt(getComputedStyle(document.getElementById("homePageId")).lineHeight);
    var lines = divHeight / lineHeight;
    console.log("Lines: " + lines);
    return(lines);
}
function homePageBoxWidth(){
    var docmnt = document.getElementById("homePageId")
    var lines = countLines();        
    if(lines<2){
        docmnt.style.lineHeight = "100vmin";
        docmnt.style.fontSize = "100vmin";
    }
    else if(lines<3){
        docmnt.style.lineHeight = "50vmin";
        docmnt.style.fontSize = "50vmin";
    }
    else if(lines<4){
        docmnt.style.lineHeight = "30vmin";
        docmnt.style.fontSize = "30vmin";
    }
}



