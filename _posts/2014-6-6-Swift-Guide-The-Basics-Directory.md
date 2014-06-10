---
layout: post
title: "Swift语言基础-引言"
description: ""
category: swift
tags: [译文]
---
{% include JB/setup %}

<div class="show-en">中英对照</div>

尽管Swift是一门用于iOS和OS X应用开发的全新编程语言，但是它的开发体验与C或者Objective-C有很多相似之处。
对于C或Objective-C中的数据类型，Swift都提供了它自己的版本。包括代表整数的`Int`；代表浮点数的`Double`和`Float`；代表布尔型的`Bool`；以及代表文本数据的`String`。除了这些基本数据类型外，Swift还提供了两种主要的集合类型：`Array`和`Dictionary`，详情可参看[集合类型]()。

<p class="en">
Swift is a new programming language for iOS and OS X app development. Nonetheless, many parts of Swift will be familiar from your experience of developing in C and Objective-C.

Swift provides its own versions of all fundamental C and Objective-C types, including Int for integers; Double and Float for floating-point values; Bool for Boolean values; and String for textual data. Swift also provides powerful versions of the two primary collection types, Array and Dictionary, as described in Collection Types.
</p>

和C语言类似，Swift也采用变量存储数据，通过标识符来引用变量值。
Swift 还扩充了值不可变的量——常量的用法，使它比 C 语言中的常量强大得多。 当在代码中操作不需要改变值的数据时，常量的使用可以使得Swift代码更安全也更简洁。
除了常见类型以外，Swift还引入了一些在Objective-C中不存在的高级类型，其中包括元组（`tuple`）。元组使你可以新建或传递一组值，如在函数中，可以将多个值作为一个整体值返回。

<p class="en">
Like C, Swift uses variables to store and refer to values by an identifying name. Swift also makes extensive use of variables whose values cannot be changed. These are known as constants, and are much more powerful than constants in C. Constants are used throughout Swift to make code safer and clearer in intent when you work with values that do not need to change.

In addition to familiar types, Swift introduces advanced types not found in Objective-C. These include tuples, which enable you to create and pass around groupings of values. Tuples can return multiple values from a function as a single compound value.
</p>

Swift还介绍了一种类型叫可选（`optional`）类型，用以处理没有值的情况。Optional的意思是指可能“存在一个值，且这个值等于x”，也可能“不存在任何值”。Optional类似在Objective-C中使用零（`nil`）指针，但是Optional可用于任何类型，而不只针对类（`class`）。`Optional`比Objective-C中的零指针更安全也更有表现力，它是Swift很多强大特征的核心所在。

<p class="en">
Swift also introduces optional types, which handle the absence of a value. Optionals say either “there is a value, and it equals x” or “there isn’t a value at all”. Optionals are similar to using nil with pointers in Objective-C, but they work for any type, not just classes. Optionals are safer and more expressive than nil pointers in Objective-C and are at the heart of many of Swift’s most powerful features.
</p>

`Optional`是Swift类型安全的一个体现。Swift帮助你明确你的代码可以使用哪些类型。如果你的代码需要一个字符串（`String`），类型安全会阻止你向其错误的传递一个整型（`Int`）。这样就使得你可以尽早的发现和修复在开发过程中可能遇到的错误。

<p class="en">
Optionals are an example of the fact that Swift is a type safe language. Swift helps you to be clear about the types of values your code can work with. If part of your code expects a String, type safety prevents you from passing it an Int by mistake. This enables you to catch and fix errors as early as possible in the development process.
</p>



1. [Swift语言基础-常量和变量](http://yanshasha.com/2014/06/06/Swift-Guide-The-Basics-Constants-and-Variables/)
2. [Swift语言基础-注释&分号](http://yanshasha.com/2014/06/06/Swift-Guide-The-Basics-Comments-and-Semicolons/)
3. [Swift语言基础-整数](http://yanshasha.com/2014/06/06/Swift-Guide-The-Basics-Integers/)
4. [Swift语言基础-浮点数](http://yanshasha.com/2014/06/07/Swift-Guide-The-Basics-Floating-Point-Numbers/)
5. [Swift语言基础-类型安全及类型推断](http://yanshasha.com/2014/06/07/Swift-Guide-The-Basics-Type-Safety-and-Type-Inference/)
6. [Swift语言基础-数字字面量](http://yanshasha.com/2014/06/08/Swift-Guide-The-Basics-Numeric-Literals/)





