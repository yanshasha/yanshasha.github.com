---
layout: post
title: "Swift语言基础-常量和变量"
description: ""
category: swift
tags: [译文]
---
{% include JB/setup %}

<div class="show-en">中英对照</div>


常量和变量可以将一个名称（如`maximumNumberOfLoginAttempts`或`welcomeMessage`）与一个特定类型的值（如数字`10`或字符串`"Hello"`）关联起来。常量的值一旦被设定就无法改变，而变量的值则可以后续不断修改重新赋值。

<p class="en">
Constants and variables associate a name (such as maximumNumberOfLoginAttempts or welcomeMessage) with a value of a particular type (such as the number 10 or the string "Hello"). The value of a constant cannot be changed once it is set, whereas a variable can be set to a different value in the future.
</p>

###声明常量和变量

<h3 class="en">Declaring Constants and Variables</h3>

常量和变量在使用前必须被申明。使用关键字`let`声明常量，`var`声明变量。下例展示了常量和变量如何用于跟踪用户尝试登录的次数。

<p class="en">
Constants and variables must be declared before they are used. You declare constants with the let keyword and variables with the var keyword. Here’s an example of how constants and variables can be used to track the number of login attempts a user has made:
</p>
 
	let maximumNumberOfLoginAttempts = 10
	var currentLoginAttempt = 0
 


这段代码可以这样理解：
“声明一个新的常量，名为`maximumNumberOfLoginAttempts`，并赋值为10.然后声明一个新的变量，名为`currentLoginAttempt`，并赋初始值0。”

在这个例子中，用户允许尝试的最多登录次数被声明为一个常量，因为这个最多的次数是不会变化的。而当前尝试的登录次数则被声明为一个变量，因为每次登录失败后这个值都会加一。

你可以在同一行声明多个常量或变量，用逗号分开。

<p class="en">
This code can be read as: 

“Declare a new constant called maximumNumberOfLoginAttempts, and give it a value of 10. Then, declare a new variable called currentLoginAttempt, and give it an initial value of 0.”

In this example, the maximum number of allowed login attempts is declared as a constant, because the maximum value never changes. The current login attempt counter is declared as a variable, because this value must be incremented after each failed login attempt.

You can declare multiple constants or multiple variables on a single line, separated by commas:
</p>

	var x = 0.0, y = 0.0, z = 0.0


>注：如果代码中需要存储的值不需要改变，那么优先将其存储为一个常量。仅在那种需要在多处改变值的情况下才使用变量。<p class="en">NOTE:If a stored value in your code is not going to change, always declare it as a constant with the let keyword. Use variables only for storing values that need to be able to change.</p>


###类型说明

<h3 class="en">Type Annotations</h3>

在声明一个常量或变量时，可以为其提供类型说明（type annotation），以此指明这个常量或变量值的类型。类型说明的写法为：在常量或变量名后面紧跟一个冒号，一个空格和要使用的类型名称。
本例为一个名为1welcomeMessage1的变量提供了类型说明，指明其可以存储String类型的值。

<p class="en">
You can provide a type annotation when you declare a constant or variable, to be clear about the kind of values the constant or variable can store. Write a type annotation by placing a colon after the constant or variable name, followed by a space, followed by the name of the type to use.

This example provides a type annotation for a variable called welcomeMessage, to indicate that the variable can store String values:
</p>

	var welcomeMessage: String


其中冒号的意思是“...的类型是...”，因此上面的代码可理解为：
“声明一个名为welcomeMessage的变量，其类型为String。”

<p class="en">
The colon in the declaration means “…of type…,” so the code above can be read as:

“Declare a variable called welcomeMessage that is of type String.”

The phrase “of type String” means “can store any String value.” Think of it as meaning “the type of thing” (or “the kind of thing”) that can be stored.

The welcomeMessage variable can now be set to any string value without error:
</p>

	welcomeMessage = "Hello"

>注：在实践中很少会需要主动的去写类型说明。因为如果你在定义一个常量或变量时赋予了初始值，Swift通常能自己推断出该常量或变量的类型，详情可参见“Type Safety and Type Inference”部分。在上面关于`welcomeMessage`的例子中，由于没有提供任何初始值，所以才需要通过类型说明来制定`welcomeMessage`变量的类型，而不是通过初始值判断。<p class="en">NOTE：It is rare that you need to write type annotations in practice. If you provide an initial value for a constant or variable at the point that it is defined, Swift can almost always infer the type to be used for that constant or variable, as described in Type Safety and Type Inference. In the `welcomeMessage` example above, no initial value is provided, and so the type of the `welcomeMessage` variable is specified with a type annotation rather than being inferred from an initial value.</p>

###为常量和变量命名

<h3 class="en">Naming Constants and Variables</h3>

你可以使用你喜欢的几乎所有字符来为常量和变量命名，甚至包括Unicode字符：

<p class="en">
You can use almost any character you like for constant and variable names, including Unicode characters:
</p>
 
	let π = 3.14159
	 
	let 你好= "你好世界"
	 
	let 🐶🐮 = "dogcow"
 
>译者注：下面那个let后面跟的是一个狗头和一个牛头额...原谅偶不晓得如何打出来啊...

常量和变量名不能包含数学符号，箭头，私有（或无效的）Unicode码位或用来绘制线盒的字符。且名称不能以数字开头，但是数字可以出现在除了开头以外的其他位置。

<p class="en">
Constant and variable names cannot contain mathematical symbols, arrows, private-use (or invalid) Unicode code points, or line- and box-drawing characters. Nor can they begin with a number, although numbers may be included elsewhere within the name.

Once you’ve declared a constant or variable of a certain type, you can’t redeclare it again with the same name, or change it to store values of a different type. Nor can you change a constant into a variable or a variable into a constant.
</p>

>注：如果需要将常量或变量命名为Swift的保留字，可以通过用一对反引号（```）包围来实现。尽管如此，还是应该尽量避免使用关键字作为名称，除非你没有其他选择。<p class="en">NOTE：If you need to give a constant or variable the same name as a reserved Swift keyword, you can do so by surrounding the keyword with back ticks (`) when using it as a name. However, you should avoid using keywords as names unless you have absolutely no choice.</p>

变量的值可以随时改变，只要类型一致。下例中，`friendlyWelcome`变量的值从`"Hello!"`变成了`"Bonjour!"`。

<p class="en">
You can change the value of an existing variable to another value of a compatible type. In this example, the value of friendlyWelcome is changed from "Hello!" to "Bonjour!":
</p>
 
	var friendlyWelcome = "Hello!"
	friendlyWelcome = "Bonjour!"
	// friendlyWelcome is now "Bonjour!"
 

与变量不同，常量的值一旦设置就不可改变。强制改变的话会在编译时报错。

<p class="en">
Unlike a variable, the value of a constant cannot be changed once it is set. Attempting to do so is reported as an error when your code is compiled:
</p>


	let languageName = "Swift"
	languageName = "Swift++"
	// this is a compile-time error - languageName cannot be changed
 
###打印常量和变量

<h3 class="en">Printing Constants and Variables </h3>

通过函数`println`可以打印常量或变量的当前值。

<p class="en">
You can print the current value of a constant or variable with the println function:
</p>
 
	println(friendlyWelcome)
	// prints "Bonjour!"
 
`println`是一个全局函数，可以将值打印在适当的输出界面，以换行符结尾。例如在Xcode环境下，	`println`会将其内容打印在Xcode的“console”面板。（另一个函数`print`的功能几乎和`println`一样，唯一的区别是，`print`不会在打印值的后面增加换行符。）
`println`函数可以打印你传给它的任何字符串值。

<p class="en">
println is a global function that prints a value, followed by a line break, to an appropriate output. If you are working in Xcode, for example, println prints its output in Xcode’s “console” pane. (A second function, print, performs the same task without appending a line break to the end of the value to be printed.)

The println function prints any String value you pass to it:
</p>

	println("This is a string")
	// prints "This is a string"
 

`println`还能打印更复杂的日志信息，用法与Cocoa的`NSLog`函数类似。这些信息可以包含常量和变量的当前值。
Swift 通过`string interpolation`将常量或变量的名称作为占位符内嵌到较长的字符串中，借此提示 Swift 将其替换为常量或变量的当前值。将名称置于括号之间，并在左括号之前通过反斜杠转义：

<p class="en">
The println function can print more complex logging messages, in a similar manner to Cocoa’s NSLog function. These messages can include the current values of constants and variables.

Swift uses string interpolation to include the name of a constant or variable as a placeholder in a longer string, and to prompt Swift to replace it with the current value of that constant or variable. Wrap the name in parentheses and escape it with a backslash before the opening parenthesis:
</p>


	println("The current value of friendlyWelcome is \(friendlyWelcome)")
	// prints "The current value of friendlyWelcome is Bonjour!"
 


>注：关于`String Interpolation`的内容在后面会有详述。<p class="en">NOTE：All options you can use with string interpolation are described in String Interpolation.</p>
















