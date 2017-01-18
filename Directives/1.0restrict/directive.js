angular.module('directivesApp', []).
	directive('testShow', function() {
		return {
			restrict: 'AEMC',
			template: '<div>Hi, AngularJs!</div>',
			replace: true
		};
	});