'use strict';

angular.module('app')
    .factory('homeSvc', ['$http', '$q', 'URL_CONFIG',
        function($http, $q, URL_CONFIG) {
            function getListStoryViewest(pageIndex, pageSize) {
                var params = {};
                if (pageIndex !== null) {
                    params.pageIndex = pageIndex;
                    params.pageSize = pageSize;
                }
                var deferred = $q.defer();
                $http.get(URL_CONFIG.WebApiLocal + 'api/Story/GetListStoryViewest', params).then(function(result) {
                    deferred.resolve(result.data);
                }, function(error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            }

            function getListStoryNewest(pageIndex, pageSize) {
                var params = {};
                if (pageIndex !== null) {
                    params.pageIndex = pageIndex;
                    params.pageSize = pageSize;
                }
                var deferred = $q.defer();
                $http.get(URL_CONFIG.WebApiLocal + 'api/Story/GetListStoryNewest', params).then(function(result) {
                    deferred.resolve(result.data);
                }, function(error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            }

            function getListStoryFinish(pageIndex, pageSize) {
                var params = {};
                if (pageIndex !== null) {
                    params.pageIndex = pageIndex;
                    params.pageSize = pageSize;
                }
                var deferred = $q.defer();
                $http.get(URL_CONFIG.WebApiLocal + 'api/Story/GetListStoryFinish', params).then(function(result) {
                    deferred.resolve(result.data);
                }, function(error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            }

            return {
                getListStoryViewest: getListStoryViewest,
                getListStoryNewest: getListStoryNewest,
                getListStoryFinish: getListStoryFinish
            };
        }
    ]);
