---
layout: post
title: "移动开发速成班之JS组件篇"
description: ""
category: site
tags: [mobile]
---
{% include JB/setup %}

<ol class="directory">
	<li>
		<a href="#clientType">
			判断客户端类型
		</a>
	</li>
	<li>
		<a href="#networkStatus">
			判断网络状况
		</a>
	</li>
	<li>
		<a href="#hideAddress">
			自动隐藏地址栏
		</a>
	</li>
	<li>
		<a href="#clickState">
			增加手机点击态
		</a>
	</li>
	<li>
		<a href="#fixed">
			支持fixed定位
		</a>
	</li>
	<li>
		<a href="#screenOrient">
			检测屏幕翻转
		</a>
	</li>
	<li>
		<a href="#getScroll">
			获取滚动条
		</a>
	</li>
	<li>
		<a href="#upload">
			html5上传
		</a>
	</li>
</ol>

<h2 id="clientType">判断客户端类型</h2>
###关于UA
ios和android的默认浏览器都是基于webkit内核的，而且像它们的桌面版一样，共享相同的基本用户代理字符串格式。
ios设备的基本格式如下：
>Mozilla/5.0（平台；加密类型；操作系统或CPU like Mac OS X；语言）AppleWebkit/AppleWebkit 版本号（KHTML, like Gecko）Version/浏览器版本号 Mobile/移动版本号 Safari/Safari 版本号

注意用户辅助确定Mac操作系统的“like Mac OS X”和额外的Mobile记号。一般来说，Mobile记号的版本号（移动版本号）没什么用，主要是用来确定Webkit是移动版而非桌面版。而平台则可能是“iPhone”、“iPod”或“iPad”。e.g.

>Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16

在ios3之前，用户代理字符串中不会出现操作系统版本号

Android浏览器中的默认格式与ios格式相似，没有移动版本号（但有Mobile记号）。e.g.

>Mozilla/5.0 (Linux; U; Android 2.2; en-us; Nexus One Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1

这是Google Nexus One手机的用户代理字符串，不过其他的Android设备的模式也一样。

###识别移动设备

上面我们已经了解了ios和android的UA格式，现在我们就可以根据获取UA来判断移动设备及版本号了。

	/*判断用户客户端类型*/
	var clientSystem = (function() {
		var ua = navigator.userAgent, p = navigator.platform;
	
		var system = {
			win : false,
			iphone : false,
			ipad : false,
			android : false,
			nokiaN : false,
			winMobile : false
		}
		system.win = p.indexOf('Win') == 0;
		system.iphone = ua.indexOf('iPhone')>-1||ua.indexOf('iPod') > -1;
		system.ipad = ua.indexOf('iPad') > -1;
		system.android=/Android (\d+\.\d+)/.test(ua)|| /HTC/.test(ua);/*个别HTC的手机中没有android字段*/
		system.nokiaN = ua.indexOf('nokiaN') > -1;
		
		return system;
	
	})();

由于用户是可以禁用js，且据说也会造成客户端刷新和额外的数据传输，因此如果是比较大的项目可以在服务端侦测设备，进行页面适配（现在的网盘wap就是在服务端进行适配）。

而如果只是一个简单的wap页面则可以直接js判断（如嵌入各端的扩容页面和反馈页面，页面独立无依赖）
				
<h2 id="networkStatus">判断网络状况</h2>
<h2 id="hideAddress">自动隐藏地址栏</h2>
这是个很常见的需求，也非常必要。由于手机设备的高度本来就不高，而地址栏总会占用很多的空间，这会影响页面内容的展示。而且为了让webapp看上去更像nativeapp，自动隐藏地址栏也是非常必要的。那么，怎样实现呢？

网上一搜，很多答案，往往都是一行简单的代码: 

	window.scrollTo(0, 1);
	
但实际，只调用这一句话一般不会起作用，我们需要

	setTimeout(function() {window.scrollTo(0, 1);}, 300);

大部分情况下，这个就够了，但是对于那些本身页面高度不够的来说，还是没法隐藏地址栏。因此我们需要先把body高度撑高，隐藏地址栏后再还原回来：

	var hideAddressBar = (function() {
		var innerHeight = window.innerHeight, isExtend = true;
		return function() {
			var container = $('body'), initHeight = container.height();
			innerHeight >= initHeight ? container.height(innerHeight + 100, 'px') : ( isExtend = false );
			setTimeout(function() {
				window.scrollTo(0, 1);
				isExtend && container.height(window.innerHeight, 'px')
			}, 300);
		}
	})()


<h2 id="clickState">增加手机点击态</h2>
<h2 id="fixed">支持fixed定位</h2>
关于漂浮定位，测试后发现 { position: fixed; } 不能为其用，
可以改为 { position:absolute; } 来实现，可以使用iphone看下DEMO：iphone-fixed-positioning

position:fixed
在pc上我们经常使用position:fixed，在iphone上似乎并不管用，官方给了很多解释，但是它还是不好使，这样我们只能自己来 实现这种效果，首先我们需要一个setPosition方法，
function setPosition(top, left){ //根据top、left把元素设置到视图区相应位置 }
然后，我们需要注册scroll事件和onrientation事件
element.addEventListener('scroll', setPosition); element.addEventListener('onrientationchange', setPosition);
具体代码可以参考Tangram Mobile的Toolbar组件


<h2 id="screenOrient">检测屏幕翻转</h2>
我曾经也想禁止用户旋转设备，也想实现像某些客户端那样：只能在肖像模式或景观模式下才能正常运行。但遗憾的是，在移动版的webkit中做不到！

正如Apple webapp API所说的：我们为了让用户在safari中正常的浏览网页，我们必须保证用户的设备处于任何一个方位时，safari都能够正常的显示网页内容（也就是自适应），所以我们禁止开发者阻止浏览器的orientationchange事件。

iOS已经禁止开发者阻止orientationchange事件，那Android呢？貌似也是阻止不了的。

虽然我们无法通过代码强制禁止屏幕旋转，但是我们可以检测到屏幕的旋转方向，从而提供不同的样式等。

在设备支持window.orientation属性（等于0为竖版，180为横向）的情况下，我们可以通过获取orientation的值来判断翻转状态，那如果设备不支持orientation怎么样，那我们可以通过 innerWidth和innerHeight的比例来判断翻转状态，代码如下:

	var getOrientation = function() { 
		if ("onorientationchange" in window) { 
			return (window.orientation == 0 || 	window.orientation == 180) ? 'portrait' : 'landscape'; 
		} 
		else { 
			return (windows.innerHeight > 	windows.innerWidth) ? 'portrait' : 'landscape'; 
		} 
	};

<h2 id="getScroll">获取滚动条</h2>
桌面浏览器中想要获取滚动条的值是通过document.scrollTop和document.scrollLeft得到的，但在iOS中你会发现这两个属性是未定义的，为什么呢？因为在iOS中没有滚动条的概念，在Android中通过这两个属性可以正常获取到滚动条的值，那么在iOS中我们该如何获取滚动条的值呢？
通过window.scrollY和window.scrollX我们可以得到当前窗口的y轴和x轴滚动条的值。

<h2 id="upload">html5上传</h2>


参考:
1. [Javascript code prettifier](http://google-code-prettify.googlecode.com/svn/trunk/README.html) 
2. 












