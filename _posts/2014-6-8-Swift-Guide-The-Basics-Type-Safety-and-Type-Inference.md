---
layout: post
title: "Swift语言基础-类型安全和类型推断"
description: ""
category: swift
tags: [swift]
---
{% include JB/setup %}

<div class="show-en">中英对照</div>


Swift是一门类型安全的语言，类型安全语言要求你对代码使用的值的类型非常明确。如果代码部分要求的是`String`类型，那么你就无法错误地传递一个`Int`类型值给它。

由于Swift是类型安全的，在编译代码时它会执行类型检查，并将任何不匹配的类型标注为错误。这使得你可以在开发过程中尽早的发现和解决问题。

当需要处理不同类型的值时，类型检查可以帮助你避免出错。但是这并不意味着你需要为声明的每个常量和变量指定类型。如果你不指定值的类型，Swift会利用类型推断（type inference）来找到适当的类型。类型推断使得编译器在编译时，通过检测你提供的值，自动推断出某个特定表达式的类型。

<p class="en">	
Swift is a type safe language. A type safe language encourages you to be clear about the types of values your code can work with. If part of your code expects a String, you can’t pass it an Int by mistake.

Because Swift is type safe, it performs type checks when compiling your code and flags any mismatched types as errors. This enables you to catch and fix errors as early as possible in the development process.

Type-checking helps you avoid errors when you’re working with different types of values. However, this doesn’t mean that you have to specify the type of every constant and variable that you declare. If you don’t specify the type of value you need, Swift uses type inference to work out the appropriate type. Type inference enables a compiler to deduce the type of a particular expression automatically when it compiles your code, simply by examining the values you provide.
</p>

得益于类型推断，Swift需要的类型声明比其他语言（如C或Objective-C）少得多。常量和变量仍然是拥有显式类型，只是指定它们类型的大部分工作Swift已经替你做了。

类型推断在使用了初始值来申明常量或变量的情况下尤其有用。通过在声明常量或变量时赋字面值（即字面量`literal`）实现。（字面值是指在源代码中直接出现的值，如下例中的`42`和`3.14159`）。

例如，如果你将字面量`42`赋给一个常量，而不指明其类型，Swift会推断你想要的常量类型为`Int`，因为你用来初始化这个常量的值看起来很像一个整数：

<p class="en">	
Because of type inference, Swift requires far fewer type declarations than languages such as C or Objective-C. Constants and variables are still explicitly typed, but much of the work of specifying their type is done for you.

Type inference is particularly useful when you declare a constant or variable with an initial value. This is often done by assigning a literal value (or literal) to the constant or variable at the point that you declare it. (A literal value is a value that appears directly in your source code, such as 42 and 3.14159 in the examples below.)

For example, if you assign a literal value of 42 to a new constant without saying what type it is, Swift infers that you want the constant to be an Int, because you have initialized it with a number that looks like an integer:
</p>

	let meaningOfLife = 42
	// meaningOfLife is inferred to be of type Int
 

同样，如果你不为一个浮点字面量指明类型，Swift会假定你想要创建的是一个`Double`类型：

<p class="en">
Likewise, if you don’t specify a type for a floating-point literal, Swift infers that you want to create a Double:	
</p>
 
	let pi = 3.14159
	// pi is inferred to be of type Double
 
Swift总会使用`Double`（而非 `Float`）来推断浮点数的类型。

如果某个表达式中同时使用了整数和浮点数的字面量，那么根据上下文推断出来的类型会是`Double`类型。

<p class="en">	
Swift always chooses Double (rather than Float) when inferring the type of floating-point numbers.

If you combine integer and floating-point literals in an expression, a type of Double will be inferred from the context:
</p>

	let anotherPi = 3 + 0.14159
	// anotherPi is also inferred to be of type Double 

字面量3没有显式类型，因此输出类型为`Double`类型是根据求和因子中有浮点字面量推断出的。

<p class="en">	
The literal value of 3 has no explicit type in and of itself, and so an appropriate output type of Double is inferred from the presence of a floating-point literal as part of the addition.
</p>










