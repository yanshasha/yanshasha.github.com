---
layout: post
title: "Swift语言基础-浮点数"
description: ""
category: swift
tags: [swift]
---
{% include JB/setup %}


<div class="show-en">中英对照</div>

<p class="en">	
Floating-point numbers are numbers with a fractional component, such as 3.14159, 0.1, and -273.15.

Floating-point types can represent a much wider range of values than integer types, and can store numbers that are much larger or smaller than can be stored in an Int. Swift provides two signed floating-point number types:
</p>

浮点数即带有小数部分的数字，如`3.14159`, `0.1`和`-273.15`。

浮点类型可以表示的数值范围比整型大得多，也可以存储比`Int`类型更大或更小的数值。Swift提供了两种有符号的浮点数值类型：

<ul>
	<li>Double represents a 64-bit floating-point number. Use it when floating-point values must be very large or particularly precise.</li>
	<li>Float represents a 32-bit floating-point number. Use it when floating-point values do not require 64-bit precision. </li>
</ul>

* `Double`代表64位的浮点数值。应用于浮点数值非常大或者特别精确的情况。
* `Float`代表32位的浮点数值。当浮点数值不需要64位的精度时可以使用。

><p class="en">NOTE：Double has a precision of at least 15 decimal digits, whereas the precision of Float can be as little as 6 decimal digits. The appropriate floating-point type to use depends on the nature and range of values you need to work with in your code.</p>
`Double`的精度至少有15位十进制，而`Float`的精度则只有6位十进制。你可以根据你代码中需要的值的性质和范围来选择使用哪种浮点类型。





