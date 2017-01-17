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

如果路径没问题的话，用浏览器打开 index.html 就可以看到 Hi, AngularJS! 可以看到<test-show>这个标签已经被<div>Hi, AngularJS!</div>这个标签替换掉了

**注意：**
- replace: true的含义
- restrict的取值：
	- A: 属性(Attribute), 举例: ``<span test-show=""></span>``    [常用]
	- E: 元素(Element), 举例: ``<test-show></test-show>``         [默认]
	- M: 注释(Comment), 举例: ``<!-- -->``                        [不常用]
	- C: 样式(Class), 举例: ``<span class="test-show"></span>``   [不常用]

这也是以上mike.js代码里面replace:true这行配置的作用使其发生了替换，代码里面的template配置就是我们需要的div标签或者是内容，至于指令restrict:'E'这个配置项的含义，详情请看下面：