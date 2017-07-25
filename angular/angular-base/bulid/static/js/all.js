var app = angular.module('starkapp', [
    // 'ngMaterial',
    // 'ngMessages',
    'ngRoute',
    'controllers',
    'services'
]);


// init submodule

angular.module('controllers', []);


angular.module('services', []);
app.config(
    ['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    template: '<div><h1>今天天气不错哦！{{msg}}</h1> </div>',
                    controller: function($scope) {
                        $scope.msg = '呵呵';
                    }
                })
                .when('/activity', {
                    templateUrl: '/view/activity/index.html',
                    controller: 'ActivityCtrl'
                })
                .when('/member', {
                    templateUrl: '/view/member/index.html',
                    controller: 'MemberCtrl'
                })
                .when('/blog', {
                    templateUrl: '/view/blog/index.html',
                    controller: 'BlogCtrl'
                })
        }

    ]
)
angular.module('controllers').controller('ActivityCtrl', [
    '$scope',
    '$route',
    '$routeParams',
    '$timeout',
    '$q',
    '$log',
    function(
        $scope,
        $route,
        $routeParams,
        $timeout, $q, $log
    ) {

        // var self = this;
        // self.simulateQuery = false;
        // self.isDisabled = false;

        // // list of `state` value/display objects
        // self.states = loadAll();

        // // console.log(self.states);
        // self.querySearch = querySearch;
        // self.selectedItemChange = selectedItemChange;
        // self.searchTextChange = searchTextChange;

        // self.newState = newState;

        // function newState(state) {
        //     alert("Sorry! You'll need to create a Constitution for " + state + " first!");
        // }

        // // ******************************
        // // Internal methods
        // // ******************************

        // /**
        //  * Search for states... use $timeout to simulate
        //  * remote dataservice call.
        //  */
        // function querySearch(query) {
        //     var results = query ? self.states.filter(createFilterFor(query)) : self.states,
        //         deferred;
        //     if (self.simulateQuery) {
        //         deferred = $q.defer();
        //         $timeout(function() {
        //             deferred.resolve(results);
        //         }, Math.random() * 1000, false);
        //         return deferred.promise;
        //     } else {
        //         return results;
        //     }
        // }

        // function searchTextChange(text) {
        //     $log.info('Text changed to ' + text);
        // }

        // function selectedItemChange(item) {
        //     $log.info('Item changed to ' + JSON.stringify(item));
        // }

        // /**
        //  * Build `states` list of key/value pairs
        //  */
        // function loadAll() {
        //     var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
        //                 Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
        //                 Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
        //                 Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
        //                 North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
        //                 South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
        //                 Wisconsin, Wyoming';

        //     return allStates.split(/, +/g).map(function(state) {
        //         return {
        //             value: state.toLowerCase(),
        //             display: state
        //         };
        //     });
        // }

        // /**
        //  * Create filter function for a query string
        //  */
        // function createFilterFor(query) {
        //     var lowercaseQuery = angular.lowercase(query);

        //     return function filterFn(state) {
        //         return (state.value.indexOf(lowercaseQuery) === 0);
        //     };

        // }
    }
])
angular.module('controllers').controller('BlogCtrl', [
    '$scope',
    '$route',
    '$routeParams',
    '$BlogManage',
    function(
        $scope,
        $route,
        $routeParams,
        $BlogManage
    ) {
        $BlogManage.fetchPosts().then(function(data) {
            console.log(data);
            $scope.blog = data.data;

            // $scope.title = data.data.title.rendered;
        })
    }
])
angular.module('controllers').controller('MemberCtrl', [
    '$scope',
    '$route',
    '$routeParams',
    '$MemberManage',
    function(
        $scope,
        $route,
        $routeParams,
        $MemberManage
    ) {
        $MemberManage.fetchMemberInfo().then(function(data) {
            console.log(data);
            $scope.userinfo = data.data.member;
        })
    }
])
angular.module('starkapp').directive('appHead', [function() {
    return {
        restrict: 'A',
        templateUrl: 'view/common/head.html'
    }
}])
angular.module('starkapp')
    .factory('$BlogManage', [
        '$http',
        function(
            $http
        ) {
            return {
                fetchPosts: function() {
                    var url = 'http://blog.shudong.wang/wp-json/wp/v2/posts';
                    return $http.get(url).then(function(data) {
                        return data;
                    })
                }

            }
        }
    ])
angular.module('starkapp')
    .factory('$MemberManage', [
        '$http',
        function(
            $http
        ) {
            return {
                fetchMemberInfo: function() {
                    // 此時的api是從後端過來的
                    return $http.get('/data/member.json').then(function(data) {
                        return data;
                    })
                }

            }
        }
    ])