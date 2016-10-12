(function() {
	'use strict';

	angular
	.module('angularMaterialAdmin')
	.provider('PageMenu', pageMenuProvider);


	/* @ngInject */
	function pageMenuProvider() {
		$stateProvider
		.state('home', {
			url: '',
			templateUrl: 'app/views/main.html',
			controller: 'MainController',
			controllerAs: 'vm',
			abstract: true
		})
		.state('home.dashboard', {
			url: '/dashboard',
			templateUrl: 'app/views/dashboard.html',
			data: {
				title: 'Dashboard'
			}
		})
		.state('home.profile', {
			url: '/profile',
			templateUrl: 'app/views/profile.html',
			controller: 'ProfileController',
			controllerAs: 'vm',
			data: {
				title: 'Profile'
			}
		})
		.state('home.table', {
			url: '/table',
			controller: 'TableController',
			controllerAs: 'vm',
			templateUrl: 'app/views/table.html',
			data: {
				title: 'Table'
			}
		});
	}
});