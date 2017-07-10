angular.module('alurapic')
    .factory('tokenInterceptor', function($q, $window, $location) {

        var interceptor = {};

        interceptor.response = function (response) {
            var token = response.headers('x-access-token');
            if (token) {
                $window.localStorage.token = token;
            }
            return response;
        },

        interceptor.request = function (config) {
            config.headers = config.headers || {};

            if ($window.localStorage.token) {
                config.headers['x-access-token'] = $window.localStorage.token;
            }

            return config;
        },

        interceptor.responseError = function(rejection) {

            if (rejection != null && rejection.status === 401) {
                console.log('Removendo token da sessão')
                delete $window.sessionStorage.token;
                $location.path("/login");
            } 
            return $q.reject(rejection);
        }

    return interceptor;

});