var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		// controller: 'HomeController'
		templateUrl: '/partials/home.partial.html'
	})
	.when('/products', {
		// controller: 'HomeController'
		templateUrl: '/partials/products.partial.html'
	})
	.when('/login', {
		// controller: 'HomeController'
		templateUrl: '/partials/login.partial.html'
	})
	.when('/register', {
		// controller: 'HomeController'
		templateUrl: '/partials/register.partial.html'
	})
	// .when('/users', {
	// 	controller: 'UsersController',
	// 	controllerAs: 'usersCtrl',
	// 	templateUrl: '/partials/users.partial.html'
	// })
	// .when('/users/details', {
	// 	controller: 'UserController',
	// 	controllerAs: 'userCtrl',
	// 	templateUrl: '/partials/user.partial.html'
	// })
	
	.otherwise('/')
})