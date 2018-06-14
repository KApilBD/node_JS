var mod = angular.module('restmod',[]);

mod.controller("rest",['httpservice','$scope',(httpservice,$scope)=>{
    $scope.pattern="trt";

    $scope.companies=[];

    $scope.readpattern=()=>{
        console.log($scope.pattern);
        httpservice.getCompanies($scope.pattern).then(
            (data)=>{
                $scope.companies=data;
                $scope.digest;
            },
            (error)=>{
                $scope.companies=[];
                $scope.digest;   
            }
        );
    }
}]);


mod.service('httpservice',['$http',function($http){
    this.getCompanies=(pattern)=>{
        return new Promise(function(resolve,reject){

        $http.get("http://localhost:5000/mongo-api/cnames/"+pattern).then(
        (res)=>{resolve(res.data);},
        (error)=>{reject([]);}
        );

        });
        
}
}])