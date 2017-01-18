###如何自定义标签

index.html

```html
<body ng-app="directivesApp">
	<test-show></test-show>

	<script src="http://cdn.bootcss.com/angular.js/1.6.1/angular.js"></script>
	<script type="text/javascript" src="test.js"></script>
</body>
```

```javascript
angular.module('directivesApp', []).
	directive('testShow', function() {
		return {
			restrict: 'E',
			template: '<div>Hi, AngularJS!</div>',
			replace: true
		};
	});
```

如果路径没问题的话，用浏览器打开 index.html 就可以看到 Hi, AngularJS! 可以看到``<test-show>``这个标签已经被``<div>Hi, AngularJS!</div>``这个标签替换掉了

**注意：**
- replace: true的含义
- restrict的取值：
	- A: 属性(Attribute), 举例: ``<span test-show=""></span>``    [常用]
	- E: 元素(Element), 举例: ``<test-show></test-show>``         [默认]
	- M: 注释(Comment), 举例: ``<!-- -->``                        [不常用]
	- C: 样式(Class), 举例: ``<span class="test-show"></span>``   [不常用]
- replace: true使得指令起作用


###如何处理标签中的子标签
```javascript
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
```
指令的作用是把我们自定义的语义化标签替换成浏览器能够认识的HTML标签。那好，如果我们自定义的标签内部出现了子标签，应该如何去处理呢？很显然，transclude就是用来处理这种情况的。

transclude的作用可以简化地理解成：把``<test-show>``标签替换成我们所编写的HTML模板但是``<test-show>``标签内部的内容Hi,angularjs保持不变。指令有时候会嵌套，所以加上transclude指令可以保证每一个指令的内容不会被替换掉


###怎样使用templateUrl加载html模板
templateUrl可以来替代template,目的是为了能够让显示的内容是来自一个Url而不是像上面一样,这样显示的内容非常的有限，而且会使得字符串累加，页面相当的繁琐。从而可以把模板写到一个独立的HTML文件中。
```javascript
angular.module('directivesApp', []).
	directive('testShow', function() {
		return {
			restrict: 'AEMC',
			templateUrl: 'hello.html'
		};
	});
```