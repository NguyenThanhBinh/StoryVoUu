'use strict';

angular.module('app')
    .factory('storySvc', ['$http', '$q', 'URL_CONFIG',
        function($http, $q, URL_CONFIG) {
            function getStoryByID(id) {
                var params = {id: id };
                var deferred = $q.defer();
                $http.get(URL_CONFIG.WebApiLocal + 'api/Story/GetStoryByID',
                    { params: params }
                ).then(function(result) {
                    deferred.resolve(result.data);
                }, function(error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            }

            function getListChapterByStoryID(id) {
                var params = {id: id };
                var deferred = $q.defer();
                $http.get(URL_CONFIG.WebApiLocal + 'api/Story/GetListChapterByStoryID',
                    { params: params }
                ).then(function(result) {
                    deferred.resolve(result.data);
                }, function(error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            }

            return {
                getStoryByID: getStoryByID,
                getListChapterByStoryID: getListChapterByStoryID
            };
        }
    ]);
