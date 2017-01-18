angular.module('directivesApp', []).
	directive('testShow', function() {
		return {
			restrict: 'E',
			template: '<div>Hi angularjs 
                  	   <span ng-transclude>
                  	   <p ng-transclude>
                  	   <a ng-transclude>
                  	   <h ng-transclude></h>
                  	   </a></p></span></div>',
			//自定义的标签内部出现了子标签div里面有个span，可以用ng-transclude解决这个问题
      	    transclue: true
		};
	});