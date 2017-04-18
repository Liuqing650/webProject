/**
 * Created by admin on 2016/9/27.
 */
angular.module('myApp',[])
    .controller('LoginController',function ($scope) {
        $scope.logindata = {};
        $scope.submitForm = function () {
            console.log($scope.logindata);
            if ($scope.loginUpForm.$invalid)
                alert('请检查您的信息');
            else
            {
                // 控制台打印输入的数据
                console.log($scope.logindata);
                // alert('提交成功！');
            }
        }
    })

    // .directive('compare',function () {
    //     var O = {};
    //     O.strict = 'AE';
    //     O.scope = {
    //         orgText: '=compare'
    //     }
    //     O.require = 'ngModel';
    //     // O.link = function (域,元素,属性,ngModel-Controller)
    //     O.link = function (sco,ele,att,con) {
    //         con.$validators.compare = function (v) {
    //             return v == sco.orgText;
    //         }
    //         sco.$watch('orgText',function () {
    //             con.$validate();
    //         });
    //     }
    //     return O;
    // });
