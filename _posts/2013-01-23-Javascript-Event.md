---
layout: post
title: "Event"
description: ""
category: Javascript
tags: [Javascript]
---
{% include JB/setup %}

##绑定/移除事件

abc.onclick=function() {} 这样的形式 那还有办法
这样的直接就 abc.onclick= null 就OK了
	 
你可以这样整理代码 ，把这些函数放进 数组里。 如下

var funcs = []; 
funcs[0] =  function(e){ startDrag(e);};
funcs[1] = function(e){ endDrag(e);};
funcs[2] = function(e){ followMouse(e);};


那你使用就方便了呀，
 bar.attachEvent("onmousemove", funcs[2]);
 bar.detachEvent("onmousemove",funcs[2]);
 
 
最早给DOM节点绑定事件处理函数的方法是onevent方式，例如：

function handler()  {
    // 函数内容略
}
var aaa = document.getElementById('aaa');
aaa.onclick = handler;
这种方式具有不错的兼容性，但是缺点是最多只能给一个元素绑定一个函数，后面绑定的函数会把前面绑定的函数覆盖掉。

2001年Scott Andrew LePera写了一个包裹函数addEvent()来解决事件绑定的问题，后来被开发人员广泛采用。但是这个函数略显复杂，ppk在《ppk谈javascript》里面推荐的两个函数是这个函数的简化版：

function addEventSimple(obj,evt,fn) {
 if (obj.addEventListener)
  obj.addEventListener(evt,fn,false);
 else if (obj.attachEvent)
  obj.attachEvent('on'+evt,fn);
}

function removeEventSimple(obj,evt,fn) {
 if (obj.removeEventListener)
  obj.removeEventListener(evt,fn,false);
 else if (obj.detachEvent)
  obj.detachEvent('on'+evt,fn);
}
这个函数解决了给一个元素绑定多个事件处理函数的问题，然而缺点是在ie里面是事件处理函数里面的this关键字不能指向所绑定的DOM对象，而是指向window对象，即作用域错误。为了解决这个问题ppk在2005年举办了一个addEvent()函数重构竞赛。竞赛的优胜者是jQuery的作者john Resig，他的函数如下：

function addEvent( obj, type, fn ) {
  if ( obj.attachEvent ) {
    obj['e'+type+fn] = fn;
    obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
    obj.attachEvent( 'on'+type, obj[type+fn] );
  } else
    obj.addEventListener( type, fn, false );
}
function removeEvent( obj, type, fn ) {
  if ( obj.detachEvent ) {
    obj.detachEvent( 'on'+type, obj[type+fn] );
    obj[type+fn] = null;
  } else
    obj.removeEventListener( type, fn, false );
}
这个函数修正了作用域，也有相配套的解除绑定函数，但是仍然有严重缺陷：他将字符串和函数相加以得到唯一的hash值，这种做法效率低下，并且不兼容某些手机浏览器。后来John Resig自己也说他不建议别人使用这两个函数（需要翻墙）。

在ppk的竞赛结束之后，作为评委的Dean Edwards也写了一个自己的addEvent()函数：

// written by Dean Edwards, 2005
// <a href="http://dean.edwards.name/">http://dean.edwards.name/</a>

function addEvent(element, type, handler) {
  // 为每个事件处理程序分配一个唯一的id  
  if (!handler.$$guid) handler.$$guid = addEvent.guid++;
  // 为该元素的各种事件类型创建一个hash表
  if (!element.events) element.events = {};
  // 为每一个元素/事件对的所有事件处理程序创建一个hash表
  var handlers = element.events[type];
  if (!handlers) {
    handlers = element.events[type] = {};
    // 存储已经存在的事件处理程序(如果有的话)
    if (element["on" + type]) {
      handlers[0] = element["on" + type];
    }
  }
  // 将事件处理程序存储到hash表内
  handlers[handler.$$guid] = handler;
  // 剩下的任务交给一个全局的事件处理程序来搞定
  element["on" + type] = handleEvent;
};
// 一个用来分配唯一ID的计数器
addEvent.guid = 1;

function removeEvent(element, type, handler) {
  // 从hash表里面删除该事件处理程序
  if (element.events && element.events[type]) {
    delete element.events[type][handler.$$guid];
  }
};
function handleEvent(event) {
  var returnValue = true;
  // 取得event对象(IE使用了一个全局的事件对象)
  event = event || fixEvent(window.event);
  // 找到事件处理程序的hash表
  var handlers = this.events[event.type];
  // 执行各个事件处理程序
  for (var i in handlers) {
    this.$$handleEvent = handlers[i];
    if (this.$$handleEvent(event) === false) {
      returnValue = false;
    }
  }
  return returnValue;
};

function fixEvent(event) {
  // 增加符合W3C标准的事件模型
  event.preventDefault = fixEvent.preventDefault;
  event.stopPropagation = fixEvent.stopPropagation;
  return event;
};
fixEvent.preventDefault = function() {
  this.returnValue = false;
};
fixEvent.stopPropagation = function() {
  this.cancelBubble = true;
};
Dean Edwards的这个方法是相对来说最完美的一个方案，没有使用addEventListener和attachEvent就实现了多重函数的绑定，并且事件处理函数支持this关键字。

上面提到的这些都有提供相配套的解除绑定函数，但是大部分时候我们只需要绑定，不需要解绑，这种情况下下面这个简单的函数已经足够满足我们的需要了。

function addEvent( obj, type, fn ) {
        if (obj.addEventListener)
                obj.addEventListener(type, fn, false);
        else if (obj.attachEvent)
                obj.attachEvent('on' + type, function() { return fn.call(obj, window.event);});
}
大部分开源的js框架，如jQuery和YUI都有提供很方便的事件绑定接口，其实现的方式就复杂多了，当然功能也要强大得多。等有时间再研究。

参考：
1. [javascript的事件绑定函数](http://biaoge.me/2009/12/253)



