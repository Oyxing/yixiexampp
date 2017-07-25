angular.module('controllers').controller('MemberCtrl',[
    '$scope',
    '$route',
    '$routeParams',
    '$MenberMange',
    function (
        $scope,
        $route,
        $routeParams,
        $MemberManage
    ) {
        $MemberManage.fetchMemberInfo().then(function (data) {
            $scope.userinfo = data.data.stark;
        })
    }
])
