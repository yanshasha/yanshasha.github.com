---
layout: post
title: "The Anatomy of a Web Application"
description: ""
category: 
tags: []
---
{% include JB/setup %}

##剖析web应用程序

用手机浏览网页的功能已经出现了一段时间，但是用手机去访问普通web端的页面并不方便，页面元素缩小，原本的页面元素变得很难点，事件触发也不一样。
后来出现了单独的wap页面，但是和原生app相比，不管从流畅度还是交互效果来说，都显得很没有竞争力。因此移动互联网虽然出现了很长一段时间，但一直还没有引起开发者足够的兴趣。

###iPhone革命###

随着苹果公司发布了iPhone，用户突然发现了一个全新的移动体验，访问互联网逐渐变得无缝。而Safari浏览器对html5，css3的良好支持也使得web页面的交互能够达到更加接近native app的效果。

###对Web Apps的信仰

远在苹果公司发布iPhone SDK之前，它是指望web应用程序来扩展其智能手机的可能性的。也许最大的证据就是大部分的web应用程序是通过苹果web站点<http://www.apple.com/webapps/>的一个专栏进行
分发的。而后来native app更被开发者所青睐，导致web应用暂时退居二线。

然而，尽管native app取得了巨大的成果，苹果仍然没有放弃对web app的开发。苹果拥有很多持续性的项目如Dashcode。尽管这主要是为创建桌面widget而设计的，dashcode还是很快成为了构建web
apps的有趣工具。它拥有针对Mobile Safari的新功能，如iPhone风格的web应用程序模板等。

最近出现了PastryKit和AdLib Frameworks两个强大的框架，他们分别为iPhone和iPad开发而生，致力于ios集成web应用程序，并为一些长期存在的不可用问题（如无法在移动端使用css的fixed属性）带来了解决方案。它们同样为提高用户交互体验带来了令人振奋的特性，比如提供了一个类似native app的固定头部，使用户仿佛至于native应用中。

到现在为止，PastryKit框架似乎只被用在了iPhone的用户指南上<http://help.apple.com/iphone/guide/>，也许在你的iPhone书签里你也能见到。但是围绕它所产生的热情与好奇是一个标志，标志着苹果仍然在为web应用程序的未来而努力，而开发者也对这个领域将要产生的更高质量的服务非常期待。

事实上，很多开源开发者也早就发不了很多其他类似的框架，充分展示了他们对iphone web应用程序发展的热情。在这些框架中典型的例子比如iUI(原iPhoneNav，由Joe Hewitt，Firebug背后的男人所开发)，紧跟着第一版iPhone的发布而产生；WebApp.Net——一个轻量级，最优化的框架；还有jQTouch，基于jQuery库而开发。

iPhone上的web应用程序正变得越来越有吸引力。移动Safari的性能正与日俱增，而对于最新web标准的支持也在迅速发展。最近，ios的浏览器甚至获得了如地理定位能力等核心工具。随着越来越多的公司提供了能包含在web应用程序中的web服务，也随着大受用户欢迎的ipad的发布，未来web应用程序的发展大有前途。

###那么究竟神马是Web App呢？

为iPhone开发有三种可能性：开发本地应用程序，制作常规的web页面，或者开发web apps（处于前两者之间）。一个web应用程序类似一个native ios应用，但是与普通web页面有同样的访问方式和同样的开发技术（如HTML和JavaScript）。

苹果构建web应用程序的指导方针强调了这方面的几点，并且对于所有苹果设备的定位都非常接近。根据苹果的说法，web app是为用户的特定需求带来特定的解决方案，而剩余的部分就应该模仿ios界面，因此在适当的时候使用特殊的ios用户体验特征。

这个观点就是去尽可能的减少用户的浏览感，让用户是在实际使用页面而不是浏览页面。为了达到这个效果，苹果非常推崇支持web标准，尽可能使用ajax来避免载入页面。

这些观点让web app与另外两个方式的区别变得明显，但仍然不算非常明确。如果你还在茫然你脑子里的项目到底是web app还是普通的web页面，记住区别在于用户定位：如果你所开发的程序是致力于服务端用户，且你自己也觉得那是一个web app，那么很可能它就是。在实际生活中，如果你的用户不断的为了同一个目标返回你的页面，那很有可能你的页面可以成为一个web app。因此，一些产品如iPhone优化后的Gmail或者Google Maps都可以被认为是web app。

###Apps的星球：谁来统治？

很多人都通过app store扑向丰富多彩的iphone应用程序市场。因此你也许觉得奇怪，既然native app已经被苹果支持并且为人们提供了在那么短的时间为人们提供了那么丰富的应用，为什么我们还要去开发web app呢？事实上，这一点需要澄清：在app store上的应用程序数量是巨大的，正因为如此，要建立起知名度就变成了一个非常复杂的任务。为了达到这点，强大的营销策略变得越来越重要，即便如此，要获得成功也非常难。而且，要在app store发布需要得到苹果的授权，这又将消耗很多时间和精力。当然，除此之外，还有很多其他的因素需要考虑。

**跨平台的主宰者**

构建web apps在很多方面都比构建一个native app要好，第一点就是关于跨平台的兼容性——事实是双重的跨平台兼容性。

确实，构建web apps不依赖于某个特定的操作系统或者特定的工具。你可以使用任何编辑器：从最简单的纯文本编辑器到复杂的所见即所得编辑器以及IDE等，而对native apps而言，如果不使用Mac OS X的Xcode，开发将变得低效。

然后你的web app本身在某些程度上也是独立于平台的。不管是Google的Android浏览器还是Palm的webOS都是基于Webkit内核的，因此它们渲染页面的方式类似于Mobile Safari。Webkit引擎变得越来越流行了，不只是针对桌面浏览器（Epiphany最近也从Gecko换到了Webkit），对于逐渐增长的移动设备也是如此，如RIM的BlackBerry。不管ios如何流行，针对它的native app总是依赖于它的底层平台和API，而在其他设备上则无法工作，因此web app在这点上极具优势。

**硬件访问不再是禁止武器**

也许你听说过，native apps与ios本身拥有更加紧密的联系，拥有更多的硬件访问能力，可以从平台获取更多的资源，当没有网络连接时也拥有更多的可能性。现在，这些不再是全部正确的了。

首先，你的应用程序比Mobile Safari需要更多能力来运行这一点是不可能的，而且native apps也不会使用它们拥有的所有能力。至于存储，从2.0版开始，你已经可以选择直接在设备上使用javascript数据库，从而使得你的程序数据在执行完后再执行。

此外，现在用户还可以在离线模式下访问web apps，这也就意味着在没有网络连接的情况下用户仍然可以访问静态内容。考虑到你的页面的静态元素并不需要每次都被重新加载，加上html5提供的最新的存储功能，你可以在无网络连接的情况下为用户提供很多的可访问内容。

最后，尽管native apps确实能够从OS获取更多的工具，为web apps所做的改变也正在来临。在3.0版本中，ios为浏览器访问提供了地理信息，或许这正是另外一个迹象，表示苹果正将它的未来押在web apps上。

**释放你的内容**

web apps和native apps相比的第二个优点是你的发布内容将更加自由。由于native apps需要得到苹果的验证，因此在你的内容多多少少都受到了一些限制，周期也更长。而web apps则更加自由，你甚至可以每天都释放更新一个版本。

**更新版本**

对用户而言，不管过程如何简单，native apps总是需要安装和不断更新的过程。安装对web apps来说显然是不需要的，而更新则是实时的。对native apps而言，即使更新都需要苹果的验证，这也意味着必定会有一些延迟。

###Mobile Safari上的Web Apps

接下来你将要为运行在ios上的Mobile Safari开发web apps。尽管与native apps相比，这拥有更少的平台限制，你还是必须要对你的目标设备特征拥有足够的了解。尤其是，你必须知道你的web apps将以什么样的形式展现。在前段视觉，目标设备——iphone和ipod touch都拥有相同的屏幕尺寸，视觉行为和GUI重现。但随着ipad的发布，你必须要开始考虑不同的设备尺寸和拥有细微区别的GUI组件。

**掌控浏览器**

如果有一样元素你必须彻彻底底了解，那就是Mobile Safari。它不是一个微型版的浏览器，而是一个完全成熟的web解释器，拥有对html，css和javascript的完全支持——包括ajax技术。这也就意味着，任何基于web标准构建的网站都会正确的的显示在Mobile Safari上。它不但是一个完整的浏览器，而且完全可以为它对html5和css3的最新特性支持感到骄傲（尽管有些特性还处于工作草案阶段）。

有一个可以称为微小制约的特点是，上面所提到的三个设备都不使用鼠标，而是使用touch事件来模拟鼠标事件，这也使得交互变得更加自然。在大部分情况下，这种差异性并不影响可用性。

我们只能再三的建议您密切关注由万维网联盟（W3C www.w3.org）和Web超文本应用技术工作组（WHATWG; www.whatwg.org）发起的革新。
在这里你能发现大多数的未来web技术。

**浏览器指标**
Mobile Safari的默认行为是把页面内容缩放到适合屏幕的大小。这当然与在一个桌面浏览器或者在Opera Mini上看网页的浏览体验截然不同（在Opera Mini上，页面会重新排列组合，使得页面在小屏幕上变得可读性更强）。用户在一些特定手势的帮助下可以把屏幕缩放到他们可读的大小。这些手势包括向外捏放（放大），向内捏放（缩小），双击屏幕（聚焦一个特定页面元素）等。

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

在ios上，viewpoint的概念不是指浏览器的客户端展示的部分，更不是屏幕的尺寸。它是一块逻辑上的区域，代表一个web页面的哪部分可以展示，它可能大于或者小于设备屏幕。当载入一个页面时，这个页面的所有内容尺寸会自动调整并以最佳方式适应到viewpoint中，并保持纵横比不变。viewpoint的默认宽度是980px（这个宽度在当今web站点中比例最高）。但是对一个web app而言，你并不希望你的页面被缩放：用户应该能够通过最少的操作直接访问到他们想访问的内容，因此让他们一开始就必须要缩放页面才能达到目的是不应该的。为此，你必须好好构建自己的页面，来避免这种情况。

在页面的头部你可以通过设置viewpoint meta来定义viewpoint选项。下面这行代码可以满足你大部分情况的需求：

	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" name="viewport" />
	
这行代码强制让viewpoint的宽度与设备的宽度保持1:1，并且viewpoint最大的宽度比例是1.0，且不允许用户点击屏幕放大浏览。根据上面所提到的，默认情况下，mobile会像PC上的浏览器一样渲染页面（默认的页面宽度是980px，这个值是可以通过viewport的width属性设置的），然后同比缩放以适应mobile的小屏幕（缩放比例可以通过minimum-scale和maxmum-scale进行设定）。

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
		<td>viewpoint的高度（单位：像素）。默认值是基于width的值和长宽比计算得出的。范围在223到10,000之间。这个属性同样可以使用常量device-width或device-height。</td>
	</tr>
	<tr>
		<td>initial-scale</td>
		<td></td>
	</tr>
	<tr>
		<td>minimum-scale</td>
		<td></td>
	</tr>
	<tr>
		<td>maximum-scale</td>
		<td></td>
	</tr>
	<tr>
		<td>user-scalable</td>
		<td>决定了是否允许用户缩放页面。默认为“yes”。设为“yes”（或1）表示允许缩放，“no”（或0）表示禁止缩放。</td>
	</tr>
</table>












































