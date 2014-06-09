---
layout: post
title: "Swift速览-简单值"
description: ""
category: swift
tags: [译文]
---
{% include JB/setup %}

<div class="show-en">中英对照</div>


使用`let`来申明一个常量，使用`var`申明一个变量。常量无须在编译时指定，但是你必须且只能给它赋值一次。也就是说，如果你希望只赋值一次而在多处使用，你就可以将其赋给一个常量。

<p class="en">
Use let to make a constant and var to make a variable. The value of a constant doesn’t need to be known at compile time, but you must assign it a value exactly once. This means you can use constants to name a value that you determine once but use in many places.
</p>

	var myVariable = 42
	myVariable = 50
	let myConstant = 42
 

常量值或变量值的类型必须与其赋予对象一致。但是，你不需要显式的写数据类型。创建一个常量或变量时，通过赋予一个值可以让编译器推断出其类型。在上面的例子中，编译器可以推断出`myVariable`是整型，因为它的初始化值是一个整数。
如果初始化的值无法提供足够判断类型的信息（或者没有初始值），可以通过在常量/变量名的后面加上冒号和类型名来显示指定具体类型。

<p class="en">
A constant or variable must have the same type as the value you want to assign to it. However, you don’t always have to write the type explicitly. Providing a value when you create a constant or variable lets the compiler infer its type. In the example above, the compiler infers that myVariable is an integer because its initial value is a integer.

If the initial value doesn’t provide enough information (or if there is no initial value), specify the type by writing it after the variable, separated by a colon.
</p>

	let implicitInteger = 70
	let implicitDouble = 70.0
	let explicitDouble: Double = 70 

>实践：创建一个常量，显式声明为`Float`类型，赋值为4.<p class="en">EXPERIMENT:Create a constant with an explicit type of Float and a value of 4.</p>

 
一个值无法从一种类型隐式转换为另一种类型。如果你需要改变值的类型，显式创建一个想要转换的目标类型的实例。

<p class="en">
Values are never implicitly converted to another type. If you need to convert a value to a different type, explicitly make an instance of the desired type.
</p>

	let label = "The width is "
	let width = 94
	let widthLabel = label + String(width)
 
>实践：试着移除最后一行的`String`，看看你会得到什么样的报错？<p class="en">EXPERIMENT:Try removing the conversion to String from the last line. What error do you get?</p>


有一种更简单的方式用以字符串中添加值：即把常量或变量名写在括号中，并在括号前写一个反斜杠(`\`)。例如：

<p class="en">
There’s an even simpler way to include values in strings: Write the value in parentheses, and write a backslash (\) before the parentheses. For example:
</p>

	let apples = 3
	let oranges = 5
	let appleSummary = "I have \(apples) apples."
	let fruitSummary = "I have \(apples + oranges) pieces of fruit."
 

>实践：在字符串中使用`\()`包含一段浮点运算，并且包含某个人的名字作为问候语。<p class="en">EXPERIMENT:Use \() to include a floating-point calculation in a string and to include someone’s name in a greeting.</p>

利用方括号([])可以创建数组（array）和词典（dictionary），通过在方括号中写索引（index）或键（key）就可以访问对应的值。

<p class="en">
Create arrays and dictionaries using brackets ([]), and access their elements by writing the index or key in brackets.
</p>
 
	var shoppingList = ["catfish", "water", "tulips", "blue paint"]
	shoppingList[1] = "bottle of water"


	var occupations = [
	"Malcolm": "Captain",
	"Kaylee": "Mechanic",
	]
	occupations["Jayne"] = "Public Relations" 


使用初始化语法来创建一个空数组或空词典。

<p class="en">
To create an empty array or dictionary, use the initializer syntax.
</p>
 
	let emptyArray = String[]()
	let emptyDictionary = Dictionary<String, Float>()
 
  
如果类型信息是可以推断出来的，那么你可以通过[]来声明一个空数组，用`[:]`声明一个空词典。比如当你想要为变量设置一个新的值或者为一个函数传递一个参数时，你就可以使用这种方法。

<p class="en">
If type information can be inferred, you can write an empty array as [] and an empty dictionary as [:]—for example, when you set a new value for a variable or pass an argument to a function.
</p>
 
	shoppingList = []
	 
	// Went shopping and bought everything.
 
