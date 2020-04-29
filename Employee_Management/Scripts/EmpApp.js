/// <reference path="angular.min.js" />

var myEmpApp = angular
    .module("myEmployeeRouteModule",['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                url:'/home',
                templateUrl: "/Templates/EmployeeHome.html",
                controller: "myEmpController"
            })
            .state('employeetable', {
                url:'/employeetable',
                templateUrl: "/Templates/EmployeeTable.html",
                controller: "myEmpTableController"
            })
            .state('employeelist', {
                url:'/employeelist',
                templateUrl: "/Templates/EmployeeList.html",
                controller: "myEmpTableController"
            })
            .state('employeecrud', {
                url:'/employeecrud',
                templateUrl: "/Views/Employees_CRUD.html",
                controller: "myEmpController"
            })
    })
    /* .controller("myEmpHomeController", function($scope){
        $scope.message = "Employee Home Page";
    }) */
    .controller("myEmpTableController", function($scope){
        var employees = [
            {EmployeeName : "Sridhar B T",
            names : [
            {firstName : "Sridhar"},{lastName : "B T"}
            ],
            gender : "Male",salary : 55000, technologieName: "C#", likes:0,dislikes:0},
            {EmployeeName : "Kuldeep Singh",
            names : [
            {firstName : "Kuldeep"},{lastName : "Singh"}
            ],
            gender : "Male",salary : 60000, technologieName: "ASP.NET", likes:0,dislikes:0},
            {EmployeeName : "Paneesh Kumar",
            names : [
            {firstName : "Paneesh"},{lastName : "Kumar"}
            ],
            gender : "Male",salary : 65000, technologieName: "SQL", likes:0,dislikes:0},
            {EmployeeName : "Uthra Manoj",
            names : [
            {firstName : "Uthra"},{lastName : "Manoj"}
            ],
            gender : "Female",salary : 80000, technologieName: "AngularJS", likes:0,dislikes:0},
            {EmployeeName : "Madhu Rao",
            names :[
            {firstName : "Madhu"},{lastName : "Rao"}
            ],
            gender : "Male",salary : 75000, technologieName: "NodeJS", likes:0,dislikes:0} 
        ];

        $scope.employees = employees;
    })