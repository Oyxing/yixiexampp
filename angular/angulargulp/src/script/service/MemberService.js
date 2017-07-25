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