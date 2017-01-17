angular.module('directivesApp', []).
	directive('testShow', function() {
		return {
			restrict: 'E',
			template: '<div>Hi, AngularJs!</div>',
			replace: true
		};
	});