var app = angular.module('amexApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/login.html",
        controller: "loginController"
    })
    
    .when("/invoice", {
        templateUrl : "views/invoice.html",
        controller:"invoiceController"
    })
    .when("/logout", {
        templateUrl : "views/logout.html"
    })
    
});
