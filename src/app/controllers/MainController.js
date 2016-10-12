(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    /* @ngInject */
    function MainController(mainSvc, $state) {
        var vm = this;
        vm.menuItems = [];
        vm.MessageError = null;

        vm.listCategories = function() {
            mainSvc.listCategories().then(function(response) { // success callback
                if (response.Status === 'Success') {
                    vm.menuItems = response.Data;
                } else {
                    vm.MessageError = response.Data;
                }
            }, function(rejectParam) { // error callback with reason
                vm.MessageError = rejectParam.message;
            });
        };

        vm.initData = function() {
            vm.listCategories();
        };

        vm.initData();

        vm.gotoHome = function() {
            $state.go('home.dashboard', {}, { reload: true });
        }
    }
})();