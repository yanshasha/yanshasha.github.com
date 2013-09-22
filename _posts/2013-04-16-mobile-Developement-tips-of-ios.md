---
layout: post
title: "移动开发速成班之IOS技巧篇"
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
<h2 id="detect">检测iPhone 5/iOS 6</h2>

检测iOS 6很简单，用ua就可以了：

>Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25

但是刷了iOS 6的所有iPhone的ua都是这个，那么判断是否是iPhone 5就要用js或者media query的方法了：

js：

>isPhone4inches = (window.screen.height==568);

CSS：

>@media (device-height: 568px) and (-webkit-min-device-pixel-ratio: 2) {
>/* iPhone 5 or iPod Touch 5th generation */
>}

<h2 id="metas">特殊meta标签</h2>

通过设置这个属性，当用户将页面“添加到主屏幕”后，在主屏幕点击icon打开，可以使网页全屏显示。
	<meta content="yes" name="apple-mobile-web-app-capable" />
	
用户将网页“添加到主屏幕”时，可将其在主屏幕显示的icon设置为自定义的icon:
	<link rel = "apple-touch-icon"  href = "/custom_icon.png" />

用户将网页“添加到主屏幕”后，可以通过下列代码，设定在载入网页时的等待画面:（不过我试了好像没看到等待画面额~一定是我打开的姿势不对5555~）
	<link rel = "apple-touch-startup-image"  href = "/startup.png" >

用户将网页“添加到主屏幕”后，可以将最上的状态列设定为其他颜色(发觉只能设定为黑色)，在head 加入以下设定:	
	<meta content="black" name="apple-mobile-web-app-status-bar-style" />

iphone会将页面中的一串数字识别为电话号码，如果点击那串数字，会弹框问你要不要加到通讯录之类的，而下面这串就是告诉设备忽略将页面中的数字识别为电话号码	
	<meta content="telephone=no" name="format-detection" />
			
<h2 id="autoCapitalize">关闭ios中键盘自动大写</h2>

在iOS中，当虚拟键盘弹出时，默认情况下键盘是开启首字母大写的功能的。 如果需要关闭这个功能，可以通过为input元素指定autocapitalize="off"来实现。

	<input type="text" autocapitalize="off"/>
	
<h2 id="touchCallout">ios利用css禁用长按默认行为</h2>

在手机上如果你长按某个链接，会弹窗出现很多打开方式的选项；又比如长按一个图片，会出现“保存图像，复制图像，查看图像，设置壁纸”类似的选项。很多时候，我们并不希望这种默认弹窗出现，那么，有什么方法可以禁用呢？

对ios而言，可以通过指定当前元素的-webkit-touch-callout样式属性为none可以禁止iOS弹出这些按钮。

	#link{
		-webkit-touch-callout:none;
	}
	<a href="http://www.baidu.com" id="link">在当前页面打开百度</a>
	
单这个技巧仅适用iOS，对于Android平台则无效。


<h2 id="fixed">支持fixed定位</h2>

<h2 id="upload">ios6支持上传</h2>
在ios6以下,都是不支持文件上传的;而从ios6开始,可以简单的支持文件上传了，同时也支持多文件上传：

	<input type="file"><!--单文件-->
	<input type="file" multiple> <!--多文件-->
但是，由于iOS的资源管理机制的限制，你只能上传照片和视频，不能上传其它格式文件，也不支持getUserMedia api(camera api)。

<h2 id="banner">smart app banner</h2>
如果你的网站同时提供的有app在itunes app store，可以通过一个简单的meta标签来提示用户，让用户下载安装你的native app(或者是hybrid app)：

	<meta name="apple-itunes-app" content="app-id=9999999">

也支持itunes affiliate program（推广联盟）：

	<meta name="apple-itunes-app" content="app-id=9999999, app-argument=xxxxxx">
	<meta name="apple-itunes-app" content="app-id=9999999, app-argument=xxxxxx, affiliate-data=partnerId=99&siteID=XXXX">

需要注意的是，app banner占位为156px的高度——高分屏为312px。

<h2 id="f-">smart app banner</h2>

参考:
1. [Javascript code prettifier](http://google-code-prettify.googlecode.com/svn/trunk/README.html) 
2. [iPhone 5/iOS 6前端开发指南](http://www.qianduan.net/iphone5ios6-front-end-development-guide.html)












