---
layout: post
title: "移动开发速成班之性能篇"
description: ""
category: site
tags: [mobile]
---
{% include JB/setup %}

<ol class="directory">
	<li>
		<a href="#metas">
			特殊meta标签
		</a>
	</li>
	<li>
		<a href="#autoCapitalize">
			关闭ios中键盘自动大写
		</a>
	</li>
	<li>
		<a href="#touchCallout">
			ios利用css禁用长按默认行为
		</a>
	</li>
	

</ol>
HTML5应用性能调优工具WAPA
<h2 id="">将for循环条件语句中的.length属性存入一个局部变量</h2>


该规则是指：在使用循环的时候，要尽量避免使用for in, 除非是在一个不明确的对象里面，需要迭代其内部对象。如果已经知道其结构和内容数据类型，避免使用for in。在循环中，将i.length存储为局部变量，可以提高for循环的效率。从下列三个算法的测试结果即可看出。

算法一，使用for in，：

	var i=0
	for (i in geo){
	       document.write("The country is " + geo[i] +"<br />")
	}
运行时间结果是最长的，即最没有效率的：（24ms）

 

算法二，for循环

	for (var i=0 ; i < geo.length; i++){
	       document.write("The country is " + geo[i] +"<br />")
	}
运行时间结果，比较有效率（17ms）

 

算法三 for循环，将i.length存储为局部变量

	for (var i=0, len=geo.length; i < len; i++){
	       document.write("The country is " + geo[i] +"<br />")
	}
运行时间结果，最高效。（14ms）

<h2 id="">如果要为某个元素动态添加样式，使用addClass()而不是css()</h2>

	
	e.g. 
	.bg{background-color:red}
	$('#id').addClass('bg')就比$('#id').css({background-color:red})要效率高

<h2 id="">appendChild()的部分使用document fragments来修改DOM元素</h2>
当我们需要对DOM元素进行一系列操作时，可以通过document fragments来减少重绘和重排的次数。它可以在当前DOM之外构建一个子树，对齐进行修改之后，再把它拷贝回文档。

其具体使用示例代码如下：

	var fragment = document.createDocumentFragment();
	appendDataToElment(fragment, data);
	document.getElementById("mylist").appendChild(fragment);

<h2 id="">CSS 中将 2D的CSS变化转化为 3D的CSS变换</h2>
CSS的变换正在变得越来越强大，3D的CSS变换已经能够非常完整地支持GPU硬件加速，而传统的2D CSS转换仍然无法使用GPU进行加速，导致的结果就是2D的CSS转换比3D CSS转换还要慢。我们建议开发者，将2D的CSS变换更改为Z轴为0的3D CSS转换，以便充分利用GPU的硬件特性


<h2 id="">在HTML文档中，将inline的 JavaScript代码转化为独立的JavaScript文件</h2>
虽然JavaScript是动态解释执行的语言，绝大多数的Web Runtime为了提高JavaScript的解释执行时间，都会将JavaScript进行预编译为一个中间态的文件。WebKit，IE10等都不例外。但是HTML文档中的JavaScript代码是无法被预编译为中间态文件的，这会显著减低执行效率和时间，所以我们强烈建议PhoneGap的开发人员将HTML中的JavaScript代码剥离出来，放入单独的JavaScript文件中

<h2 id=""> 由于脚本的阻塞特性，将JavaScript脚本放在文件的最底端以及成组加载</h2>
由于每个<script>标签在下载时都会阻塞页面解析的过程，所以限制页面<script>总数也可以改善性能。所以成组加载JavaScript脚本可以提升页面整体性能，这个规则不仅对内联脚本有效，对外部脚本同样适用。

原因是在于每个HTTP 请求都会产生额外的性能负担，下载一个100KB的脚本远比下载4个25KB的脚本要快。

同时将页面和页面初始化无关的JavaScript文件放在页面的最低端进行加载都可以提高性能。


<h2 id=""> 高效的Web App页面</h2>
建议使用HTML5新标签布局页面。
例如header、footer、section、nav、article。因为他们速度快，结构合理，浏览器上识别能力强。
减少HTML标签嵌套深度。
建议不要连续多层标签的嵌套深度。嵌套越深，其移动端的Web页面渲染速度以及滚动流畅度都会有所减低。
一个Web App的可视页面应该只有一种功能模块。
例如一个Web App页面只有一个资讯文章列表，就不要再同时出现第二个文章列表，这会影响小屏幕的Web用户体验。至于第二个文章列表，可通过相应按钮引导用户指向另外一个Web列表页面。
使用HTML5 Application Cache缓存静态资源页面，减少网络资源的重复下载。
对于某些Web页面中含有静态图片资源，可通过Cache把它们缓存到浏览器上，减少用户在访问时的http资源请求数。并且允许用户离线访问。
创建多种可重复使用的HTML模板。
对于动态生成DOM元素或HTML片段的代码，通常将重复的代码片段整理成模版，然后通过程序一次性生成并渲染到Web页面中。这样做的优点是建立统一模版，减少页面渲染的次数
选择性加载外部文件。
如非必要，不要一次性加载所有Web App页面、JavaScirpt、CSS代码。可以通过按模块加载或者按需加载。

<h2 id=""> 高性能的JavaScript</h2>
尽可能使用基于移动端优化的工具或类库，如zeptojs、jqMobl、iScroll等。
由于jQuery、prototype.js等JS库文件较大，不利于移动端的网络传输，同时他们提供的功能更多的是兼容PC桌面端各种浏览器的差异，并没有针对移动端独有的优化，所以一般不建议使用。
按需加载JavaScript文件。
如某个JavaScirpt功能是在Web App使用过程中时才需要使用，可根据用户的需求按需加载该JS功能。
减少全局变量的调用和适当缓存全局变量，如window、document、DOM等。
减少原型链的深度。
属性或方法在原型链的位置越深，访问它的速度越慢。因此，建议深度不要超过5层以上，并合理缓存方法返回的值。
合理缓存对象成员值，减少对象成员访问次数。
访问复杂的DOM元素时，建议使用JavaScript新API接口：querySelector和querySelectorAll。
减少对DOM元素的修改次数。
尤其是对HTML元素集合的循环操作，如innerHTML方法。Android平台的低端手机和高端手机其性能效果差异很大。
合理使用正则表达式。
合理使用Web Worker线程。
运算量较大的JavaScript代码片段，如手机端支持Web Worker，建议使用Web Workers增加线程，避免JavaScript和UI共享同一线程导致糟糕的用户体验。
使用JSON数据格式.
数据传输格式方面建议使用JSON。JSON是轻量级的并且解析速度快。不推荐使用XML。
注意JavaScript内存问题，包括闭包产生的内存问题。
合并和压缩JavaScript代码。

<h2 id="">合理使用CSS属性</h2>
使用CSS Sprite或把图片转换成Data URL scheme处理图片。
减少使用*或多class选择器。
CSS方面性能消耗最大的就是选择器。减少使用*就是减少查找元素数量，提升CSS选择器查询性能。
减少阴影、渐变样式的使用。
例如border-radius是最影响性能的属性之一，其余的属性如阴影（box-shadow和text-shadow）、渐变（-webkit-gradient），属性使用得越多，repaint性能越差。
减少使用transition的使用次数以及频率。
用于交互操作的按钮，建议不要使用A标签，可考虑使用button标签替代。
合理使用CSS3动画效果，不能过渡和盲目使用。

参考:
1. [使用 HTML5 开发 WebApp 性能注意点](http://software.intel.com/zh-cn/articles/phonegap-html5) 
2. [使用 HTML5 开发 WebApp 性能注意点](http://h5dev.uc.cn/article-23-1.html) 












