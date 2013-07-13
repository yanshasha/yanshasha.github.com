---
layout: post
title: "移动开发速成班之性能篇"
description: ""
category: site
tags: [mobile]
---
{% include JB/setup %}

在开发web app的时候,由于手机浏览器本身性能的问题,在开发时提高代码性能就显得尤为重要.下面是一些可以帮助提高代码性能的tips,大部分都是来自网上的资料,我在这里做了一下整理,希望能帮助大家提高web app的运行效率.

##页面
1. 建议使用HTML5新标签布局页面。
例如header、footer、section、nav、article。因为他们速度快，结构合理，浏览器上识别能力强。
2. 减少HTML标签嵌套深度。
建议不要连续多层标签的嵌套深度。嵌套越深，其移动端的Web页面渲染速度以及滚动流畅度都会有所减低。
3. 一个Web App的可视页面应该只有一种功能模块。
例如一个Web App页面只有一个资讯文章列表，就不要再同时出现第二个文章列表，这会影响小屏幕的Web用户体验。至于第二个文章列表，可通过相应按钮引导用户指向另外一个Web列表页面。
4. 使用HTML5 Application Cache缓存静态资源页面，减少网络资源的重复下载。
对于某些Web页面中含有静态图片资源，可通过Cache把它们缓存到浏览器上，减少用户在访问时的http资源请求数。并且允许用户离线访问。
5. 创建多种可重复使用的HTML模板。
对于动态生成DOM元素或HTML片段的代码，通常将重复的代码片段整理成模版，然后通过程序一次性生成并渲染到Web页面中。这样做的优点是建立统一模版，减少页面渲染的次数
6. 选择性加载外部文件。
如非必要，不要一次性加载所有Web App页面、JavaScirpt、CSS代码。可以通过按模块加载或者按需加载。
7. 将图片存储为适当的格式以减少它们的尺寸。
如果你的网站有很多图片,那么怎样选择最适合的图片格式就非常重要了. web图片文件存储的格式中主要有三种: JPEG, GIF和PNG.一般情况下,如果是色调比较单一的图标,可以使用GIF或PNG,而如果图片的色彩比较丰富,比如平滑的渐变,照片等就最好使用JPEG. 
GIF和PNG这两种格式很类似,但是一般PNG尺寸更小一点.关于这两种格式的比较,可以参考下这篇文章:<a title="Getting the Most Out of PNG on Coding Horror." href="http://www.codinghorror.com/blog/archives/000810.html">weigh-in on using PNG’s  over GIF’s</a>
8.避免使用行内css和Javascript。
默认情况下,外部引入的css和Javascript文件是会被用户浏览器缓存下来的.而如果你的css和js都是写在HTML文档里,他们是不会缓存的,这样就没法利用web浏览器的缓存特性了.


##JavaScript
1. 尽可能使用基于移动端优化的工具或类库，如zeptojs、jqMobl、iScroll等。
由于jQuery、prototype.js等JS库文件较大，不利于移动端的网络传输，同时他们提供的功能更多的是兼容PC桌面端各种浏览器的差异，并没有针对移动端独有的优化，所以一般不建议使用。
2. 按需加载JavaScript文件。
如某个JavaScirpt功能是在Web App使用过程中时才需要使用，可根据用户的需求按需加载该JS功能。
3. 减少全局变量的调用和适当缓存全局变量，如window、document、DOM等。
4. 减少原型链的深度。
属性或方法在原型链的位置越深，访问它的速度越慢。因此，建议深度不要超过5层以上，并合理缓存方法返回的值。
5. 合理缓存对象成员值，减少对象成员访问次数。
6. 访问复杂的DOM元素时，建议使用JavaScript新API接口：querySelector和querySelectorAll。
7. 减少对DOM元素的修改次数,尤其是对HTML元素集合的循环操作，如innerHTML方法。Android平台的低端手机和高端手机其性能效果差异很大。
比如当我们需要对DOM元素进行一系列操作时，可以通过document fragments来减少重绘和重排的次数。它可以在当前DOM之外构建一个子树，对齐进行修改之后，再把它拷贝回文档。
其具体使用示例代码如下：

>var fragment = document.createDocumentFragment();

>appendDataToElment(fragment, data);

>document.getElementById("mylist").appendChild(fragment);
	
8. 合理使用正则表达式。
9. 合理使用Web Worker线程。
运算量较大的JavaScript代码片段，如手机端支持Web Worker，建议使用Web Workers增加线程，避免JavaScript和UI共享同一线程导致糟糕的用户体验。
10. 使用JSON数据格式。
数据传输格式方面建议使用JSON。JSON是轻量级的并且解析速度快。不推荐使用XML。
11. 注意JavaScript内存问题，包括闭包产生的内存问题。 

13. 合并和压缩JavaScript代码,由于脚本的阻塞特性，将JavaScript脚本放在文件的最底端以及成组加载。
由于每个`<script>`标签在下载时都会阻塞页面解析的过程，所以限制页面`<script>`总数也可以改善性能。所以成组加载JavaScript脚本可以提升页面整体性能，这个规则不仅对内联脚本有效，对外部脚本同样适用。


##CSS
1. 使用CSS Sprite或把图片转换成Data URL scheme处理图片,以减少HTTP请求。
CSS Sprite即把多张小图合并为一张大图,然后通过 background-position属性来控制小图的显示.你可以自己手动拼,可以使用如cssgaga之类的自动化的工具来拼图.
2. 减少使用\*或多class选择器。
CSS方面性能消耗最大的就是选择器。减少使用\*就是减少查找元素数量，提升CSS选择器查询性能。
3. 减少阴影、渐变样式的使用。
例如border-radius是最影响性能的属性之一，其余的属性如阴影（box-shadow和text-shadow）、渐变（-webkit-gradient），属性使用得越多，repaint性能越差。
4. 减少使用transition的使用次数以及频率。
5. 用于交互操作的按钮，建议不要使用A标签，可考虑使用button标签替代。
6. 合理使用CSS3动画效果，不能过度和盲目使用。
使用变换特效时,将2D的CSS变换更改为Z轴为0的3D CSS转换，以便充分利用GPU的硬件特性
7. 如果要为某个元素动态添加样式，使用addClass()而不是css()。	
使用`$('#id').addClass('bg')`就比`$('#id').css({background-color:red})`要效率高


参考:
1. [使用 HTML5 开发 WebApp 性能注意点](http://software.intel.com/zh-cn/articles/phonegap-html5) 
2. [如何有效提高Web App应用程序的运行效率以及性能](http://h5dev.uc.cn/article-23-1.html) 












