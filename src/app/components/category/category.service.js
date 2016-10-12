'use strict';

angular.module('app')
    .factory('categorySvc', ['$http', '$q', 'URL_CONFIG',
        function($http, $q, URL_CONFIG) {
            function getListStoryByCategoryID(catid) {
                var params = { catid: catid };
                var deferred = $q.defer();
                $http.get(URL_CONFIG.WebApiLocal + 'api/Story/GetListStoryByCategoryID',
                    { params: params }
                ).then(function(result) {
                    deferred.resolve(result.data);
                }, function(error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            }

            return {
                getListStoryByCategoryID: getListStoryByCategoryID
            };
        }
    ]);
