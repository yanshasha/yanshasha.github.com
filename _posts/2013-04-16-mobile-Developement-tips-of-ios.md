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




参考:
1. [Javascript code prettifier](http://google-code-prettify.googlecode.com/svn/trunk/README.html) 
2. 












