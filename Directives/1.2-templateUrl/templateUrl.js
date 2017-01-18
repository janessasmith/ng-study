angular.module('directivesApp', []).
	directive('testShow', function() {
		return {
			restrict: 'AEMC',
			templateUrl: 'hello.html'
		};
	});