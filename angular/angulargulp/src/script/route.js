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