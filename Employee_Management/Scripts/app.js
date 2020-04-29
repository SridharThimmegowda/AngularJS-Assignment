/// <reference path="angular.min.js" />

//var myEmpApp = 
angular
    .module("myEmployeeRouteModule")
    
    .controller("myEmpController", function($scope){

    var employee = {
        firstName : "Paneesh",
        middleName : "",
        lastName : "Kumar",
        gender : "Male",
        state : "Karnataka",
        country : "India",
    };


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
        gender : "Male",salary : 60000, technologieName: "javascript", likes:0,dislikes:0},
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



    $scope.message = "Employee Management";

    $scope.employee = employee;

    $scope.employees = employees;

    $scope.incrementLikes = function (technology) {
        technology.likes++;
    };

    $scope.incrementDislikes = function (technology) {
        technology.dislikes++;
    };

    $scope.rowCount = 5;

    $scope.sortColumn = "name";

    $scope.reverseSort = false;

    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumn == column) ?
            !$scope.reverseSort : false;
        $scope.sortColumn = column;
    }

    $scope.getSortClass = function (column) {

        if ($scope.sortColumn == column) {
            return $scope.reverseSort
                ? 'arrow-down'
                : 'arrow-up';
        }

        return '';
    }

    $scope.search = function (item) {
        if ($scope.searchText == undefined) {
            return true;
        }
        else {
            if (item.gender.toLowerCase()
                         .indexOf($scope.searchText.toLowerCase()) != -1 ||
                item.EmployeeName.toLowerCase()
                         .indexOf($scope.searchText.toLowerCase()) != -1) {
                return true;
            }
        }

        return false;
    };

    $scope.employeeView = "";


    //CRUD OPERATIONS

    $scope.EmpModel = {  
        Id: 0,  
        Salary: 0,  
        Name: '',  
    };  

    $scope.EmpList = [];  
    $scope.AddData = function () {  
        if($scope.EditStatus != true){
        var _emp = {  
            Id: $scope.EmpList.length + 1,  
            Name: $scope.EmpModel.Name,  
            Salary: $scope.EmpModel.Salary  
        };  
        $scope.EmpList.push(_emp);  
     }
     else
     {
         for (i in $scope.EmpList) {

             if ($scope.EmpList[i].Id == $scope.EmpModel.Id) {
              
                 var _emp = {  
                     Id: $scope.EmpModel.Id,  
                     Name: $scope.EmpModel.Name,  
                     Salary: $scope.EmpModel.Salary  
                 };  
                 $scope.EmpList[i]=_emp;
              
             }
              
         }
         $scope.EditStatus = false;
     }
        ClearModel();  
    }  

    function ClearModel() {  
        $scope.EmpModel.Id = 0;  
        $scope.EmpModel.Name = '';  
        $scope.EmpModel.Salary = 0;  
    }
    
    $scope.DeleteData = function (emp) {  
     var _index = $scope.EmpList.indexOf(emp);  
     $scope.EmpList.splice(_index, 1);  
     } 
     
     $scope.EditData = function (emp) {  
         var _index = $scope.EmpList.indexOf(emp);  
         $scope.EmpModel = angular.copy($scope.EmpList[_index]);
         $scope.EditStatus = true; 
     }
});