(function() {
    'use strict';

    angular
    .module('app')
    .controller('HomeController', HomeController);

    /* @ngInject */
    function HomeController(homeSvc, $state) {
        var vm = this;
        vm.storiesViewest = [];
        vm.storiesNewest = [];
        vm.storiesFinish = [];
        vm.currentPage = 1;
        vm.itemsPerPage = 8;
        vm.maxSize = 8;
        vm.isLoadingViewest = false;
        vm.isLoadingNewest = false;
        vm.isLoadingFinish = false;

        // vm.getListStoryViewest = function() {
        //     vm.isLoadingViewest = true;
        //     homeSvc.getListStoryViewest(vm.currentPage, vm.itemsPerPage).then(function(response) { // success callback
        //         if (response.Status === 'Success') {
        //             vm.storiesViewest = response.Data;
        //             console.log(vm.storiesViewest);
        //             // $(vm.storiesViewest).each(function(idx, item) {
        //             //     item.photoUrlSrc = 'C:\\Users\\BINH\\Desktop\\Demo\\GetDataWeb\\GetDataWeb\\bin\\Debug\\Images\\' + item.PhotoUrl;
        //             // });
        //             // vm.totalItemsViewest = response.Data.length;
        //             vm.isLoadingViewest = true;
        //         } else {
        //             vm.MessageError = response.Data;
        //         }
        //     }, function(rejectParam) { // error callback with reason
        //         vm.MessageError = rejectParam.message;
        //     });
        // };

        // vm.getListStoryNewest = function() {
        //     vm.isLoadingNewest = true;
        //     homeSvc.getListStoryNewest(vm.currentPage, vm.itemsPerPage).then(function(response) { // success callback
        //         if (response.Status === 'Success') {
        //             vm.storiesNewest = response.Data;
        //             console.log(vm.storiesNewest);
        //             // $(vm.storiesNewest).each(function(idx, item) {
        //             //     item.photoUrlSrc = 'C:\\Users\\BINH\\Desktop\\Demo\\GetDataWeb\\GetDataWeb\\bin\\Debug\\Images\\' + item.PhotoUrl;
        //             // });
        //             // vm.totalItemsNewest = response.Data.length;
        //             vm.isLoadingNewest = false;
        //         } else {
        //             vm.MessageError = response.Data;
        //         }
        //     }, function(rejectParam) { // error callback with reason
        //         vm.MessageError = rejectParam.message;
        //     });
        // };

        vm.getListStoryFinish = function() {
            vm.isLoadingFinish = true;
            homeSvc.getListStoryFinish(vm.currentPage, vm.itemsPerPage).then(function(response) { // success callback
                if (response.Status === 'Success') {
                    vm.storiesFinish = response.Data;
                    console.log(vm.storiesFinish);
                    // $(vm.storiesFinish).each(function(idx, item) {
                    //     item.photoUrlSrc = 'C:\\Users\\BINH\\Desktop\\Demo\\GetDataWeb\\GetDataWeb\\bin\\Debug\\Images\\' + item.PhotoUrl;
                    // });
                    // vm.totalItemsFinish = response.Data.length;
                    vm.isLoadingFinish = false;
                } else {
                    vm.MessageError = response.Data;
                }
            }, function(rejectParam) { // error callback with reason
                vm.MessageError = rejectParam.message;
            });
        };

        vm.init = function() {
            // vm.getListStoryViewest();
            // vm.getListStoryNewest();
            vm.getListStoryFinish();
        };

        vm.init();

        vm.gotoStory = function(storyID) {
            $state.go('celtic-healthcare.default.dashboard.story', {
                id: storyID
            }, {
                reload: true
            });
        };

        vm.gotoAuthorName = function(authorName) {
            $state.go('celtic-healthcare.default.dashboard.author', {
                name: authorName
            }, {
                reload: true
            });
        };

        vm.gotoStoryDetail = function(storyDetailID) {
            $state.go('celtic-healthcare.default.dashboard.storydetail', {
                id: storyDetailID
            }, {
                reload: true
            });
        };

        vm.gotoCategory = function(categoryID) {
            $state.go('celtic-healthcare.default.dashboard.category', {
                id: categoryID
            }, {
                reload: true
            });
        };
    }

})();
