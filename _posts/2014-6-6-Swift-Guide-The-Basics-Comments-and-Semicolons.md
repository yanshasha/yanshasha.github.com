---
layout: post
title: "Swift语言基础-注释&分号"
description: ""
category: swift
tags: [swift]
---
{% include JB/setup %}


<div class="show-en">中英对照</div>


##注释

<p class="en">
Use comments to include non-executable text in your code, as a note or reminder to yourself. Comments are ignored by the Swift compiler when your code is compiled.

Comments in Swift are very similar to comments in C. Single-line comments begin with two forward-slashes (//):
</p>

使用注释可以在代码中嵌入不需要执行的文本，作为代码的标注或对自己的提示。注释的内容在代码编译时会被Swift编译器忽略。
Swift中的注释和C语言中的注释非常类似，单行注释以双斜杠（`//`）开头：

	// this is a comment
	
<p class="en">
You can also write multiline comments, which start with a forward-slash followed by an asterisk (/*) and end with an asterisk followed by a forward-slash (*/):
</p>

以斜杠和星号（/*）开头，星号和斜杠（*/）结尾，可以编写多行注释。


	/* this is also a comment,
	 but written over multiple lines */
 
<p class="en">
Unlike multiline comments in C, multiline comments in Swift can be nested inside other multiline comments. You write
nested comments by starting a multiline comment block and then starting a second multiline comment within the first
block. The second block is then closed, followed by the first block:
</p>
 
与C语言中的多行注释不同的是，Swift中的多行注释可以嵌入在其他的多行注释中。写法为在外层的多行注释内插入一个新的多行注释，在内层注释先结束，然后外层注释才结束。


	/* this is the start of the first multiline comment
	/* this is the second, nested multiline comment */
	this is the end of the first multiline comment */

<p class="en">	
Nested multiline comments enable you to comment out large blocks of code quickly and easily, even if the code
already contains multiline comments.
</p>
 
可嵌套的多层注释使你可以快速方便的注释掉大块代码，即使这段代码里已经存在多层注释。

##Semicolons

<p class="en">
Unlike many other languages, Swift does not require you to write a semicolon (;) after each statement in your code,
although you can do so if you wish. Semicolons are required, however, if you want to write multiple separate
statements on a single line:
</p>
 
与其他语言不同，在Swift中，你不需要在每段语句后加上分号（`;`），当然你加上也无妨。但是，如果你希望在一行写多条语句，你就必须在每条语句后加上分号了：
 
	let cat = " "; println(cat)
	// prints " "
 




 




