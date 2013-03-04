---
layout: post
title: "Development Tools"
description: ""
category: mobile
tags: []
---
{% include JB/setup %}

##开发工具

与本地iPhone应用程序开发不同，web应用程序开发并不需要一个特定的集成开发环境（IDE）。只要你拥有一个可以存储为纯文本的编辑器就OK了。

###1.侦测设备
**关于UA**

ios和android的默认浏览器都是基于webkit内核的，而且像它们的桌面版一样，共享相同的基本用户代理字符串格式。
ios设备的基本格式如下：
>Mozilla/5.0（平台；加密类型；操作系统或CPU like Mac OS X；语言）AppleWebkit/AppleWebkit 版本号（KHTML, like Gecko）Version/浏览器版本号 Mobile/移动版本号 Safari/Safari 版本号

注意用户辅助确定Mac操作系统的“like Mac OS X”和额外的Mobile记号。

一般来说，Mobile记号的版本号（移动版本号）没什么用，主要是用来确定Webkit是移动版而非桌面版。而平台则可能是“iPhone”、“iPod”或“iPad”。
	
	Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0   
	Mobile/7A341 Safari/528.16
	
在ios3之前，用户代理字符串中不会出现操作系统版本号
Android浏览器中的默认格式与ios格式相似，没有移动版本号（但有Mobile记号）。
	
	Mozilla/5.0 (Linux; U; Android 2.2; en-us; Nexus One Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0   
	Mobile Safari/533.1
	
这是Google Nexus One手机的用户代理字符串，不过其他的Android设备的模式也一样。

**识别移动设备**

上面我们已经了解了ios和android的UA格式，现在我们就可以根据获取UA来判断移动设备及版本号了。
 
具体代码可以参见<http://yanshasha.fe.baidu.com/webMobileTech/Demos/testUA.html>

由于用户是可以禁用js，且据说也会造成客户端刷新和额外的数据传输，因此可以在服务端侦测设备，进行页面适配（现在的网盘wap就是在服务端进行适配）。

 
###2.有用的meta标签
**设置viewpoint和屏幕等宽**

	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" name="viewport" />
	
强制让文档的宽度与设备的宽度保持1:1，并且文档最大的宽度比例是1.0，且不允许用户点击屏幕放大浏览。

默认情况下，mobile会像PC上的浏览器一样渲染页面（默认的页面宽度是980px，这个值是可以通过viewport的width属性设置的），然后同比缩放以适应mobile的小屏幕（缩放比例可以通过minimum-scale和maxmum-scale进行设定），因此用户在mobile看这个页面时感觉字体就比较小了，也比较模糊，必须要放大才能看得真切。但是我们可以通过设置viewport来解决，
	<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0" />
	
viewport有如下几个属性，width设置viewport的宽度，即mobile最初模拟PC浏览器的宽度，之后mobile会这个宽度展现的页面同比缩放到mobile屏幕上。设置width=device-width后就不会再进行缩放了，因为宽度正好和mobile的宽度相同（前提是没有设置缩放比例）。 minimum-scale和maximum-scale是控制用户允许设置的缩放比例的。user-scalable标识是否允许对页面进行缩放，取值有两个yes和no。设置为no则不允许进行页面缩放了。initial-scale设置 用户最初看到页面时的缩放比例。

<meta content="yes" name="apple-mobile-web-app-capable" />
iphone设备中的safari私有meta标签，它表示：允许全屏模式浏览；

<meta content="black" name="apple-mobile-web-app-status-bar-style" />
iphone的私有标签，它指定的iphone中safari顶端的状态条的样式；

<meta content="telephone=no" name="format-detection" />
第四个meta标签表示：告诉设备忽略将页面中的数字识别为电话号码；糊，必须要放大才能看得真切。但是我们可以通过设置viewport来解决，
	<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0" />
	
viewport有如下几个属性，width设置viewport的宽度，即mobile最初模拟PC浏览器的宽度，之后mobile会这个宽度展现的页面同比缩放到mobile屏幕上。设置width=device-width后就不会再进行缩放了，因为宽度正好和mobile的宽度相同（前提是没有设置缩放比例）。 minimum-scale和maximum-scale是控制用户允许设置的缩放比例的。user-scalable标识是否允许对页面进行缩放，取值有两个yes和no。设置为no则不允许进行页面缩放了。initial-scale设置 用户最初看到页面时的缩放比例。

<meta content="yes" name="apple-mobile-web-app-capable" />
iphone设备中的safari私有meta标签，它表示：允许全屏模式浏览；

<meta content="black" name="apple-mobile-web-app-status-bar-style" />
iphone的私有标签，它指定的iphone中safari顶端的状态条的样式；

<meta content="telephone=no" name="format-detection" />
第四个meta标签表示：告诉设备忽略将页面中的数字识别为电话号码；

设置media
我们可以利用link标签的media属性来限制CSS的应用范围，通过max-device-width：480px 屏蔽PC；通过only screen屏蔽屏幕阅读设备； 通过orientation: portrait来区分横屏竖屏，
@media all and (min-width:500px) { … } @media (min-width:500px) { … } @media (orientation: portrait) { … } @media all and (orientation: portrait) { … } @media screen and (min-width: 400px) and (max-width: 700px) { … }

3.	关于图片大小

检测网络连接方式
如果我们可以知道用户的入网方式，就可以为用户提供不同的体验，在Android2.2以上版本，我们可以通过
navigator.connection
来判断入网方式，有WIFI、CELL_2G、CELL_3G等。Iphone平台上目前并没有相应的接口。

10、如何禁止用户旋转设备
我曾经也想禁止用户旋转设备，也想实现像某些客户端那样：只能在肖像模式或景观模式下才能正常运行。但现在我可以很负责任的告诉你：别想了!在移动版的webkit中做不到！

至少Apple webapp API已经说到了：我们为了让用户在safari中正常的浏览网页，我们必须保证用户的设备处于任何一个方位时，safari都能够正常的显示网页内容（也就是自适应），所以我们禁止开发者阻止浏览器的orientationchange事件，看来苹果公司的出发点是正确的，苹果确实不是一般的苹果。

iOS已经禁止开发者阻止orientationchange事件，那Android呢？对不起，我没有找到任何资料说Android禁止开发者阻止浏览器orientationchange事件，但是在Android平台，确实也是阻止不了的。

iPhone可以在横屏状态下浏览网页，有时候你会想知道用户设备的手持状态来增强可用性和功能。下面一段Javascript可以判断出设备向哪个方向旋转，并且替换css：

window.onload = function initialLoad() {updateOrientation();}
 
function updateOrientation(){
var contentType = “show_”;
switch(window.orientation){
case 0:
contentType += “normal”;
break;
 
case -90:
contentType += “right”;
break;
 
case 90:
contentType += “left”;
break;
 
case 180:
contentType += “flipped”;
break;
}
document.getElementById(“page_wrapper”).setAttribute(“class”, contentType);
}
获取设备翻转状态
我们可以通过获取orientation的值来判断翻转状态，那如果设备不支持orientation怎么样，那我们可以通过 innerWidth和innerHeight的比例来判断翻转状态，代码如下（取自Tangram Mobile的getOrientation），
baidu.page.getOrientation = function() { if ("onorientationchange" in window) { return (window.orientation == 0 || window.orientation == 180) ? 'portrait' : 'landscape'; } else { return (windows.innerHeight > windows.innerWidth) ? 'portrait' : 'landscape'; } };



参考文档：
1.javascript高级程序设计（228）
