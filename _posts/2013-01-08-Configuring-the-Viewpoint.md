---
layout: post
title: "Configuring the Viewport"
description: ""
category: 
tags: []
---
{% include JB/setup %}



###Mobile Safari上的Web Apps

接下来你将要为运行在ios上的Mobile Safari开发web apps。尽管与native apps相比，这拥有更少的平台限制，你还是必须要对你的目标设备特征拥有足够的了解。尤其是，你必须知道你的web apps将以什么样的形式展现。在前段视觉，目标设备——iphone和ipod touch都拥有相同的屏幕尺寸，视觉行为和GUI重现。但随着ipad的发布，你必须要开始考虑不同的设备尺寸和拥有细微区别的GUI组件。

**掌控浏览器**

如果有一样元素你必须彻彻底底了解，那就是Mobile Safari。它不是一个微型版的浏览器，而是一个完全成熟的web解释器，拥有对html，css和javascript的完全支持——包括ajax技术。这也就意味着，任何基于web标准构建的网站都会正确的的显示在Mobile Safari上。它不但是一个完整的浏览器，而且完全可以为它对html5和css3的最新特性支持感到骄傲（尽管有些特性还处于工作草案阶段）。

有一个可以称为微小制约的特点是，上面所提到的三个设备都不使用鼠标，而是使用touch事件来模拟鼠标事件，这也使得交互变得更加自然。在大部分情况下，这种差异性并不影响可用性。

我们只能再三的建议您密切关注由万维网联盟（W3C www.w3.org）和Web超文本应用技术工作组（WHATWG; www.whatwg.org）发起的革新。
在这里你能发现大多数的未来web技术。

**浏览器指标**

Mobile Safari的默认行为是把页面内容缩放到适合屏幕的大小。这当然与在一个桌面浏览器或者在Opera Mini上看网页的浏览体验截然不同（在Opera Mini上，页面会重新排列组合，使得页面在小屏幕上变得可读性更强）。用户在一些特定手势的帮助下可以把屏幕缩放到他们可读的大小。这些手势包括向外捏放（放大），向内捏放（缩小），双击屏幕（聚焦一个特定页面元素）等。

![safarimetrics](/assets/themes/dinky/images/safarimetrics.jpg "safarimetrics")

此外，在Mobile Safari上，并不像桌面浏览器一样存在“page”这个概念，这意味着用户不能够将一个页面向上，向下，向左，向右滚动。它采用的是另外一种方式，通过手势移动，像移动摄像机一样将可见视图（摄像机的镜头）移动到用户想看到的内容上。

你的页面的可见区域不只受限于屏幕大小，你还必须处理地址栏和导航栏，它们分别位于屏幕的顶部和底部。但是地址栏会随着用户的拖动而动，点击顶部的状态栏可以让地址栏显示。在这一点上，ipad就略有不同，由于ipad屏幕更宽，因此地址栏和导航栏被组合成了一块并置于顶部，此栏也不会随着用户的拖动而消失。

下表列出了你可能将使用的尺寸。记住他们。每次当你为苹果设备设计一个web app的时候你都需要将他们作为参考。
>Table 4-1
<table>
	<tr>
		<th>设备</th>
		<th>竖屏模式</th>
		<th>横屏模式</th>
	</tr>
	<tr>
		<td>iPhone,iPod touch</td>
		<td>
			<dl>
				<dt>320x460</dt>
				<dd>减去高44px的导航栏</dd>
				<dd>减去高60px的地址栏</dd>
				<dd>减去高50px的调试控制台</dd>
			</dl>
		</td>
		<td>
			<dl>
				<dt>480x300</dt>
				<dd>减去高32px的导航栏</dd>
				<dd>减去高60px的地址栏</dd>
				<dd>减去高50px的调试控制台</dd>
			</dl>
		</td>
	</tr>
	<tr>
		<td>iPad</td>
		<td>
			<dl>
				<dt>768x1004</dt>
				<dd>减去高58px的导航栏</dd>
				<dd>减去高50px的调试控制台</dd>
			</dl>
		</td>
		<td>
			<dl>
				<dt>1024x748</dt>
				<dd>减去高58px的导航栏</dd>
				<dd>减去高50px的调试控制台</dd>
			</dl>
		</td>
	</tr>
</table>

这些指标都不是绝对限制，因为上述三种设备都允许web apps以全屏方式运行。在这种情况下，只有状态栏是可见的，而你的应用程序则会在屏幕的剩余部分自由展示。

###关于“Web App”的思考
上面所提到的浏览模型显然是与web app体验的原则相悖的。一个web app的目标在于无缝的提供一项服务。对于端用户而言，必须手动的缩放页面才能访问到一个菜单或者看清特定内容是不合理的，这样一来你的web app的用户忠实度也会大大降低。因此你必须完全拥有对你的应用程序的空间掌控权，隐藏浏览器导航，让用户可以使用你自己的应用程序所提供的内部导航。

在提高你的web app用户体验方面，ajax可以给予很大的帮助。在下面的章节中我们将要介绍两种方式使得页面不需要刷新就可以跳转到特定的页面：第一种是利用javascript方法（window.location.hash），而另一种则是最新的css3方法（利用:target伪选择器）。

###配置Viewpoint

在ios上，viewpoint的概念不是指浏览器的客户端展示的部分，更不是屏幕的尺寸。它是一块逻辑上的区域，代表一个web页面的哪部分可以展示，它可能大于或者小于设备屏幕。默认情况下，mobile会像PC上的浏览器一样渲染页面（默认的页面宽度是980px，这个值是可以通过viewport的width属性设置的），然后同比缩放以适应mobile的小屏幕（缩放比例可以通过minimum-scale和maxmum-scale进行设定）。但是对一个web app而言，你并不希望你的页面要被缩放才能看清内容：用户应该能够通过最少的操作直接访问到他们想访问的内容，因此让他们一开始就必须要缩放页面才能达到目的是不应该的。为此，你必须好好构建自己的页面，来避免这种情况。

在页面的头部你可以通过设置viewpoint meta来定义viewpoint选项。下面这行代码可以满足你大部分情况的需求：

	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" name="viewport" />
	
这行代码强制让viewpoint的宽度与设备的宽度保持1:1，并且viewpoint最大的宽度比例是1.0，且不允许用户点击屏幕放大浏览。

viewport有几个属性：width设置viewport的宽度，即mobile最初模拟PC浏览器的宽度，之后mobile会这个宽度展现的页面同比缩放到mobile屏幕上。设置width=device-width后就不会再进行缩放了，因为宽度正好和mobile的宽度相同（前提是没有设置缩放比例）。 minimum-scale和maximum-scale是控制用户允许设置的缩放比例的。user-scalable标识是否允许对页面进行缩放，取值有两个yes和no。设置为no则不允许进行页面缩放了。initial-scale设置 用户最初看到页面时的缩放比例。具体请参加下表：

<table>
	<tr>
		<th>属性</th>
		<th>描述</th>
	</tr>
	<tr>
		<td>width</td>
		<td>viewpoint的宽度（单位：像素）。默认值为980，范围在200到10,000之间。这个属性的值可以不是数值，而使用常量device-width或device-height。</td>
	</tr>
	<tr>
		<td>height</td>
		<td>viewpoint的高度（单位：像素）。默认值是基于width的值和设备长宽比计算得出的。范围在223到10,000之间。这个属性同样可以使用常量device-width或device-height。</td>
	</tr>
	<tr>
		<td>initial-scale</td>
		<td>viewpoint的初始缩放比例。默认值是通过让web页面适配在页面可视区域来计算得到的。初始缩放值的取值范围决定于minimum-scale和maximum-scale属性。</td>
	</tr>
	<tr>
		<td>minimum-scale</td>
		<td>指定viewpoint的最小缩放值。默认为0.25，范围从0到10.0.</td>
	</tr>
	<tr>
		<td>maximum-scale</td>
		<td>指定viewpoint的最大缩放值。默认为1.6，范围从0到10.0.</td>
	</tr>
	<tr>
		<td>user-scalable</td>
		<td>决定了是否允许用户缩放页面。默认为“yes”。设为“yes”（或1）表示允许缩放，“no”（或0）表示禁止缩放。</td>
	</tr>
</table>

在viewpoint的scale为1时，它就是一个屏幕的可视区域，不管它的宽度是980还是220，都是被缩放到占满可视区域的。

*下面都假设页面的实际宽度是980*
*当不设置viewpoint属性时，viewpoint为980px，且页面被同比缩放到mobile的屏幕上，这个时候相当于让一个本来980px的图片缩到320px（设备可视宽度），自然页面元素就被缩小了。
*当设置了`<meta content="width=xxx" name="viewport" />`属性时，viewpoint的宽度被设置为xxx。比如设置width=200。这就相当于镜头只拍了原来页面的200px（从左上角开始算，宽200px，高根据设备的宽高比计算出。）把原来的页面想成一张大图的话，现在相当于是截取了200px的图，然后把这个宽200的图放到320px的可视区域中，所以看起来元素都是放大了的。
而原始页面在这个截图之外的部分就要通过拖拽页面才能看到。

现在我们来推理一下在写web app页面的时候到底应该设计多少的宽度比较好。首先，根据上面的说法，要让页面元素不会被缩小也不会被放大，最好就是页面的viewpoint=原始页面宽度=设备宽度。也就是说，对iphone而言，最好是在设计原始页面的时候以320px为准。（当然实际上我们在写css的时候宽度最好都是用百分比进行流式布局，这样不管是横屏还是对ipad都更加灵活）

<http://developer.apple.com/library/safari/#documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html>











































