---
layout: post
title: "移动开发速成班之特殊技巧篇"
description: ""
category: site
tags: [mobile]
---
{% include JB/setup %}

<ol class="directory">
	<li>
		<a href="#textSizeAdjust">
			阻止旋转屏幕时自动调整字体大小
		</a>
	</li>

	<li>
		<a href="#touchCallout">
			禁止长按默认行为
		</a>
	</li>
	<li>
		<a href="#userSelect">
			禁止用户选中文字
		</a>
	</li>
	<li>
		<a href="#fixed">
			
		</a>
	</li>

</ol>

<h2 id="textSizeAdjust">阻止旋转屏幕时自动调整字体大小</h2>

`-webkit-text-size-adjust`是webkit的私有css：

	html, body, form, fieldset, p, div, h1, h2, h3, h4, h5, h6 {-webkit-text-size-adjust:none;}
	
不过这个属性要慎用，因为使用这个属性后就会导致页面缩放的时候，其他元素大小改变，而字体大小无法改变。这个如果是使用在web上的话，尤其要慎重，一般只在局部使用（比如某个地方需要设置字体小于12px，就单独为该元素设置-webkit-text-size-adjust:none;），而不要在整个网站都应用。
当然如果你是在web app上使用，且需求就是在旋转屏幕是字体大小不能变，屏幕也不能放大缩小，那使用这个就很好了。
				

<h2 id="touchCallout">禁止长按默认行为</h2>

在手机上如果你长按某个链接，会弹窗出现很多打开方式的选项；又比如长按一个图片，会出现“保存图像，复制图像，查看图像，设置壁纸”类似的选项。很多时候，我们并不希望这种默认弹窗出现，那么，有什么方法可以禁用呢？

###ios利用css禁用长按默认行为
对ios而言，可以通过指定当前元素的-webkit-touch-callout样式属性为none可以禁止iOS弹出这些按钮。

	#link{
		-webkit-touch-callout:none;
	}
	<a href="http://www.baidu.com" id="link">在当前页面打开百度</a>
	
单这个技巧仅适用iOS，对于Android平台则无效。

###利用js禁用长按默认行为
如果在Android上也希望可以禁用一些长按时出现的弹窗，那就需要用js来禁止touch事件的默认行为`e.preventDefault`，然后再自定义长按事件等。实现过程比较复杂而且需要多多测试以防止一些bug。
本来我想利用zepto库中的longTap事件来禁用默认行为，但是测试发现弹框仍然会出现，继续研究ing~


<h2 id="userSelect">禁止用户选中文字</h2>

禁止用户选择文字在web上来说是不利于用户体验的，但是在手机上恰当的使用却可以大大提高用户体验。
在手机页面中，比如说有些按钮是写在非超链接标签里：

	<span class="btn blue-btn">我是个大按钮啊我</span>
	
这时候，如果我在这个按钮上长按，会选中按钮中的文字，出现“拷贝”之类的选项，但这并不是我所希望的。那么，怎样可以禁止用户选择按钮文字呢？
	.btn{
		-webkit-user-select:none;
		-moz-user-select:none;
	}

由于ios和android手机的浏览器都是webkit内核，所以用这个代码就妥妥了~如果你还希望增加对ie或opera的支持，可以通过在标签中设置属性`unselectable= "on"`来兼容。

	<span unselectable="on" class="btn blue-btn">我是个大按钮啊我</span>

Note:遗憾的是，通过测试，我发现当我在禁用了选择文字的元素上长按时，确实这个元素没法选择文字，但是邻近的元素文字会被选中。而且对于qq，百度浏览器这类来说，因为浏览器本身就有自己重新定义过的弹框，看起来更bug。所以建议慎用此属性，在使用后要多方测试以防有问题。


<h2 id="fixed">支持fixed定位</h2>




参考:
1. [Javascript code prettifier](http://google-code-prettify.googlecode.com/svn/trunk/README.html) 
2. 












