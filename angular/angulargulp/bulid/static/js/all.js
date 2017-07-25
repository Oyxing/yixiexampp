//引用模板
var app = angular.module('starkapp',[
    'ngRoute',
    //'ngMaterial',
    'controllers',
    'services',
])

angular.module('controllers',[]);

angular.module('services',[])
app.config(
    ['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/',{
                    template: '<div><h1>今天天气不错！{{msg}}</h1>></div>',
                    controller: function ($scope) {
                        $scope.msg = '呵呵';
                    }
                })

                //路由设置
                .when('/activity',{
                    templateUrl: '/view/activity/index.html',
                    controller: 'ActivityCtrl'
                })
                //路由设置
                .when('/member',{
                    templateUrl: '/view/member/index.html',
                    controller: 'MemberCtrl'
                })
        }
    ]
)




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

angular.module('starkapp')
    .factory('$MemberManage',[
        '$http',
        function ($http) {

            return{
                fetchMemberInfo:function () {
                    //此时的api是从后端过来的
                    return $http.get('/data/member.json').then(function (data) {
                        return data
                    })
                }
            }
        }
    ])
