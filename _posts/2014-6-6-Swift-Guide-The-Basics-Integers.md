---
layout: post
title: "Swift语言基础-整数"
description: ""
category: swift
tags: [swift]
---
{% include JB/setup %}

<div class="show-en">中英对照</div>


<p class="en">	
Integers are whole numbers with no fractional component, such as 42 and -23. Integers are either signed (positive,
zero, or negative) or unsigned (positive or zero).

Swift provides signed and unsigned integers in 8, 16, 32, and 64 bit forms. These integers follow a naming
convention similar to C, in that an 8-bit unsigned integer is of type UInt8, and a 32-bit signed integer is of type
Int32. Like all types in Swift, these integer types have capitalized names.
</p>

整数即没有小数部分的完整数字，如`42`或`-23`.整数包括有符号（`signed`:正数，零或负数）和无符号（`unsigned`:正数或零）两种。

Swift提供8, 16, 32和64位的有符及无符整数。这些整数的命名习惯与C语言类似，如一个8位的无符整数的类型为`UInt8`，一个32位的有符正数的类型为`Int32`。与Swift中的其他类型一样，这些整数类型的名字都以大写字母开头。

<h3>Integer Bounds</h3>
###整数范围

<p class="en">
You can access the minimum and maximum values of each integer type with its min and max properties:
</p>

各类型的最小和最大值可通过其`min`和`max`属性分别获得。 

	let minValue = UInt8.min	// minValue is equal to 0, and is of type UInt8
	let maxValue = UInt8.max	// maxValue is equal to 255, and is of type UInt8
	 
<p class="en">
The values of these properties are of the appropriate-sized number type (such as UInt8 in the example above) and
can therefore be used in expressions alongside other values of the same type.
</p>
 
这些属性的值与数字类型的大小相对应（如上面所说的`UInt8`），因此可以和具有相同类型的其他值在表达式中一起使用。

###Int

<p class="en">
In most cases, you don’t need to pick a specific size of integer to use in your code. Swift provides an additional
integer type, Int, which has the same size as the current platform’s native word size:
</p>
 
大部分情况下，你不需要自己选择在代码中要使用的整数大小。因为Swift还提供了一种整数类型：`Int`，其大小与当前平台的原生字长一样：

<ul class="en">
	<li>On a 32-bit platform, Int is the same size as Int32.</li>
	<li>On a 64-bit platform, Int is the same size as Int64.</li>
</ul>

* 在 32 位平台中，`Int`与 `Int32`大小一致。.
* 在 64 位平台中，`Int`与 `Int64`大小一致.

<p class="en">
Unless you need to work with a specific size of integer, always use Int for integer values in your code. This aids
code consistency and interoperability. Even on 32-bit platforms, Int can store any value between -2,147,483,648
and 2,147,483,647, and is large enough for many integer ranges.
</p>
 
除非你需要处理某种特定大小的整数，否则在代码中应该尽量使用`Int`代表整数。这样可以保证代码的一致性和互通性。即使是在32位平台，`Int`也能存储-2,147,483,648到2,147,483,647间的任何数值，这已经可以满足绝大部分整数区间的需求了。

##UInt

<p class="en">
Swift also provides an unsigned integer type, UInt, which has the same size as the current platform’s native word
size:
</p>

Swift还提供一种无符号的整数类型，即`UInt`，其大小与当前平台的原生字长一样。

<ul class="en">
	<li>On a 32-bit platform, UInt is the same size as UInt32.</li>
	<li>On a 64-bit platform, UInt is the same size as UInt32.</li>
</ul>

* 在 32 位平台中，`UInt`与 `UInt32`大小一致。.
* 在 64 位平台中，`UInt`与 `UInt32`大小一致.


><p class="en">NOTE：Use UInt only when you specifically need an unsigned integer type with the same size as the platform’s native word size. If this is not the case, Int is preferred, even when the values to be stored are known to be non-negative. A consistent use of Int for integer values aids code interoperability, avoids the need to convert between different number types, and matches integer type inference, as described in Type Safety and Type Inference.</p>
注：只有当你确定需要一个与当前平台的原生字长一样的无符号整数类型时，才使用`UInt`。否则则优先使用`Int`，即使你知道存储的值是非负数。这样为所有整数值都是用`Int`可以保证代码的互通性和一致性，避免在不同数值类型间进行类型转换，并与后面在[Type Safety and Type Inference]()中将提到的整数类型推断相匹配。







