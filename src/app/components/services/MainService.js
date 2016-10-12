'use strict';

angular.module('app')
    .factory('mainSvc', ['$http', '$q', '$window', '$log', 'URL_CONFIG',
        function($http, $q, $window, $log, URL_CONFIG) {
            function listCategories() {
                var params = {};
                var deferred = $q.defer();
                $http.get(URL_CONFIG.WebApiLocal + 'api/Story/GetListCategories').then(function(result) {
                    deferred.resolve(result.data);
                }, function(error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            }

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
                listCategories: listCategories,
                getListStoryByCategoryID: getListStoryByCategoryID,
                getStoryByID: getStoryByID,
                getListChapterByStoryID: getListChapterByStoryID,
                getChapter: getChapter,
                getListStoryViewest: getListStoryViewest,
                getListStoryNewest: getListStoryNewest,
                getListStoryFinish: getListStoryFinish
            };
        }
    ]);