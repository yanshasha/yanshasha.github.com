---
layout: post
title: "移动开发速成班之样式布局篇"
description: ""
category: site
tags: [mobile]
---
{% include JB/setup %}

<ol class="directory">
	<li>
		<a href="#meta">
			meta
		</a>
	</li>
	<li>
		<a href="#mediaQuery">
			mediaQuery
		</a>
	</li>
	<li>
		<a href="#layout">
			布局
		</a>
	</li>
	<li>
		<a href="#images">、
			图片大小设置
		</a>
	</li>
	
</ol>

<h2 id="meta">meta</h2>

默认情况下，mobile会像PC上的浏览器一样渲染页面（默认的页面宽度是980px，这个值是可以通过viewport的width属性设置的），然后同比缩放以适应mobile的小屏幕（缩放比例可以通过minimum-scale和maxmum-scale进行设定），因此用户在mobile看这个页面时感觉字体就比较小了，也比较模糊，就像是缩略形式，必须要放大才能看得真切。对此我们可以通过设置viewport来解决。
###设置viewpoint和屏幕等宽

	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" name="viewport" />
	
通过在head部分设置上面这条meta语句，可以强制让文档的宽度与设备的宽度保持1:1，并且文档最大的宽度比例是1.0，且不允许用户点击屏幕放大浏览。

viewport有如下几个属性，width设置viewport的宽度，即mobile最初模拟PC浏览器的宽度，之后mobile会将这个宽度展现的页面同比缩放到mobile屏幕上。设置width=device-width后就不会再进行缩放了，因为宽度正好和mobile的宽度相同（前提是没有设置缩放比例）。 minimum-scale和maximum-scale是控制用户允许设置的缩放比例的。user-scalable标识是否允许对页面进行缩放，取值有两个yes和no。设置为no则不允许进行页面缩放了。initial-scale设置 用户最初看到页面时的缩放比例。

<meta content="yes" name="apple-mobile-web-app-capable" />
iphone设备中的safari私有meta标签，它表示：允许全屏模式浏览；

<meta content="black" name="apple-mobile-web-app-status-bar-style" />
iphone的私有标签，它指定的iphone中safari顶端的状态条的样式；

<meta content="telephone=no" name="format-detection" />
第四个meta标签表示：告诉设备忽略将页面中的数字识别为电话号码；

###设置media
我们可以利用link标签的media属性来限制CSS的应用范围，通过max-device-width：480px 屏蔽PC；通过only screen屏蔽屏幕阅读设备； 通过orientation: portrait来区分横屏竖屏，
@media all and (min-width:500px) { … } @media (min-width:500px) { … } @media (orientation: portrait) { … } @media all and (orientation: portrait) { … } @media screen and (min-width: 400px) and (max-width: 700px) { … }

				
<h2 id="mediaQuery">mediaQuery</h2>
<h2 id="layout">布局</h2>

<h2 id="images">图片大小设置</h2>







参考:
1. [Javascript code prettifier](http://google-code-prettify.googlecode.com/svn/trunk/README.html) 
2. 












