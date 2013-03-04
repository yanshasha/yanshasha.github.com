---
layout: post
title: "jQuery.extend"
description: ""
category: js
tags: [jquery]
---
{% include JB/setup %}



##jQuery.extend 函数详解

JQuery的extend扩展方法：
Jquery的扩展方法extend是我们在写插件的过程中常用的方法，该方法有一些重载原型，在此，我们一起去了解了解。
###一、Jquery的扩展方法原型是:　　　

	extend(dest,src1,src2,src3...);

它的含义是将src1,src2,src3...合并到dest中,返回值为合并后的dest,由此可以看出该方法合并后，是修改了dest的结构的。如果想要得到合并的结果却又不想修改dest的结构，可以如下使用：

	var newSrc=$.extend({},src1,src2,src3...)//也就是将"{}"作为dest参数。

 这样就可以将src1,src2,src3...进行合并，然后将合并结果返回给newSrc了。如下例：

	var result=$.extend({},{name:"Tom",age:21},{name:"Jerry",sex:"Boy"})

那么合并后的结果

	result={name:"Jerry",age:21,sex:"Boy"}

也就是说后面的参数如果和前面的参数存在相同的名称，那么后面的会覆盖前面的参数值。

###二、省略dest参数
上述的extend方法原型中的dest参数是可以省略的，如果省略了，则该方法就只能有一个src参数，而且是将该src合并到调用extend方法的对象中去，如：

**1、$.extend(src)**

该方法就是将src合并到jquery的全局对象中去，如：

	$.extend({
	hello:function(){alert('hello');}
	});

就是将hello方法合并到jquery的全局对象中。

**2、$.fn.extend(src)**

该方法将src合并到jquery的实例对象中去，如:

	$.fn.extend({
	hello:function(){alert('hello');}
	});

　　 就是将hello方法合并到jquery的实例对象中。

下面例举几个常用的扩展实例：

	$.extend({net:{}});

这是在jquery全局对象中扩展一个net命名空间。

	$.extend($.net,{
	hello:function(){alert('hello');}
	})

这是将hello方法扩展到之前扩展的Jquery的net命名空间中去。

###三、Jquery的extend方法还有一个重载原型：  

	extend(boolean,dest,src1,src2,src3...)

第一个参数boolean代表是否进行深度拷贝，其余参数和前面介绍的一致，什么叫深层拷贝，我们看一个例子：

	var result=$.extend( true,  {},  
	{ name: "John", location: {city: "Boston",county:"USA"} },  
	{ last: "Resig", location: {state: "MA",county:"China"} } ); 

我们可以看出src1中嵌套子对象location:{city:"Boston"},src2中也嵌套子对象location:{state:"MA"},第一个深度拷贝参数为true，那么合并后的结果就是： 

	result={name:"John",last:"Resig",
        location:{city:"Boston",state:"MA",county:"China"}}
 

也就是说它会将src中的嵌套子对象也进行合并，而如果第一个参数boolean为false，我们看看合并的结果是什么，如下：

	var result=$.extend( false, {},  
	{ name: "John", location:{city: "Boston",county:"USA"} },  
	{ last: "Resig", location: {state: "MA",county:"China"} }  
                    ); 

那么合并后的结果就是:

    result={name:"John",last:"Resig",location:{state:"MA",county:"China"}}
 
以上就是$.extend()在项目中经常会使用到的一些细节。


参考：
1. [jQuery.extend 函数详解](http://www.cnblogs.com/RascallySnake/archive/2010/05/07/1729563.html)
2. [window.oninput](https://developer.mozilla.org/zh-CN/docs/DOM/window.oninput)


































