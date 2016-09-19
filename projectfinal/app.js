var app = angular.module('plunker', ['ui.bootstrap', 'ui.router','ngMessages']);

app.controller('homeCtrl', function($scope,$state) {
  $scope.tabs = [
    { title:'Plan', route: 'home.plan' },
    { title:'Report', route: 'home.report', ng-disable=true}
  ];
  
  $scope.parentName = 'homeCtrl';
  
  $scope.go = function(route) {
    $state.go(route);
  }; 
});

 app.controller('myCtrl1', ["$scope", "$rootScope", function($scope, $rootScope) {
     $scope.update=function(user)
     {
          $scope.errMessage1 = '';
   
        $rootScope.rootScopeMsg = user.name; 
       $rootScope.rootScopeMsg1 = user.number;
         if(user.number>100 || user.number<0 ){
             
             
          $scope.numbererrMessage ='limits of 1 - 100  required';
          return false;
         }
    }
     
    $scope.checkErr = function(startDate,endDate) {
        dateFormat: "dd-M-yy"
        $scope.errMessage = '';
        var curDate = new Date();
         $rootScope.rootScopeMsg2 = startDate;
      $rootScope.rootScopeMsg3 = endDate;
        
        if(new Date(startDate) > new Date(endDate)){
          $scope.errMessage = 'End Date should be greater than start date';
          return false;
        }
        
    };

    
}]);

    app.controller('myCtrl2', ["$scope", "$rootScope", function($scope, $rootScope) {
        $scope.name = $rootScope.rootScopeMsg;
        $scope.number = $rootScope.rootScopeMsg1;
        $scope.startDate = $rootScope.rootScopeMsg2;
        $scope.endDate = $rootScope.rootScopeMsg3;
        
        
        
    }]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
// Angular Routing
$stateProvider.state('home', {
    url: '/home',
    templateUrl: 'home.html',
    controller: 'homeCtrl'
}).state('home.plan', {
    url: 'home/plan/{id}',
    controller: 'myCtrl1',
    templateUrl: 'plan.html'
}).state('home.report', {
    url: 'home/report',
    controller: 'myCtrl2',
    templateUrl: 'report.html'
});

$urlRouterProvider.otherwise('home'); 

}]); 