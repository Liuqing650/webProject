var userInfoModule = angular.module("UserInfoModule",[]);
userInfoModule.controller("UserInfoCtrl",['$scope',function ($scope) {
    $scope.userInfo = {
        username:"Liuqing",
        password:"123456",
        passwordRepeat:"123456",
        email:"1006822621@qq.com",
        serviceProvision:true
    };
    $scope.getFormDate=function () {
        console.log($scope.userInfo);
    };
    $scope.setFormDate=function () {
        $scope.userInfo = {
            username:"Yuanyuan",
            password:"123456",
            passwordRepeat:"123456",
            email:"123456798@qq.com",
            serviceProvision:true
        };
    };
    $scope.resetFormDate=function () {
        $scope.userInfo = {
            username:"Liuqing",
            password:"123456",
            passwordRepeat:"123456",
            email:"1006822621@qq.com",
            serviceProvision:true
        };
    };
}])
