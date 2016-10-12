'use strict';

angular.module('app')
    .factory('storyDetailSvc', ['$http', '$q', 'URL_CONFIG',
        function($http, $q, URL_CONFIG) {
            function getChapter(id) {
                var params = { id: id };
                var deferred = $q.defer();
                $http.get(URL_CONFIG.WebApiLocal + 'api/Story/GetChapter',
                    { params: params }
                ).then(function(result) {
                    deferred.resolve(result.data);
                }, function(error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            }

            return {
                getChapter: getChapter
            };
        }
    ]);
