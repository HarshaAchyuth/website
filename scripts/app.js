"use strict";
var moduleAsh = angular.module('harsha',['ngRoute']);
moduleAsh.controller('harshacontroller',function($scope){
    console.log("something is working");
})
moduleAsh.config(function($routeProvider,$locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'directories/home.html'
        })

        // route for the about page
        .when('/aboutPage', {
            templateUrl : 'directories/aboutPage.html'
        })
        // route for the about page
        .when('/blogPage', {
            templateUrl : 'directories/blogPage.html'
        })

        // route for the contact page
        .when('/contactPage', {
            templateUrl : 'directories/contactPage.html'
        })

        .otherwise({redirectTo:'/'});
});

// Opens the required page after 0.5 seconds. The page name should be sent as string parameter.
// function pageOpen(pageID){
//     var mainContent = document.getElementById("bodydiv");
//     var homeContent = document.getElementById(pageID).innerHTML;
//     mainContent.style.opacity = 0;
//     window.setTimeout(function () 
//     {
//         mainContent.innerHTML = homeContent;
//         console.log(pageID+"opened");
//         mainContent.style.opacity = 1;
//         if(pagID==="homePage"){
//             homePageBoxWidth();
//         }
//     },500);
// }

// Validates text for the field input while typing. Replaces any char not [a-zA-Z] with a "" while typing.
// function validateText(charInput) {
//     var element = document.getElementById(charInput);
//     console.log("validated the char")
//     element.value = element.value.replace(/[^a-zA-Z]+/, '');
// }

// Validates text for the field input while typing. Replaces any char not [0-9] with a "" while typing.
// function validateNum(numInput) {
//     var element = document.getElementById(numInput);
//     console.log("validated the phone number")
//     element.value = element.value.replace(/[^0-9]+/, '');
// }

// Displays the element with the ID sent as string as the parameter.
// function displayID(dID){
//     var element = document.getElementById(dID).style.visibility = "visible"
// }