---
layout: post
title: "Liquid for Designers"
description: ""
category: 
tags: []
---
{% include JB/setup %}



在Liquid中有两种类型的标记： Output and Tag.

* 输入标记（有些可能解析文本）被包含在：
{% raw %} 
	{{ 两个配对的花括号中 }}
{% endraw %}
	
* 标签标记（不能解析文本）被包含在:
{% raw %} 
	{% 成对的花括号和百分号中 %}
{% endraw %}
	
##输入
下面是关于输出标记的简单实例：

{% raw %}
	Hello {{name}}
	Hello {{user.name}}
	Hello {{ 'tobi' }}
{% endraw %}

###高级输入：过滤器

输入标记带有过滤器，方法很简单。第一个参数总是过滤器左边值的输出。当下个过滤器运行时，刚刚所得到的过滤器返回值就会成为新的左边值。直到最后没有过滤器时，模板就会接受最后的结果字符串。

{% raw %}
	Hello {{ 'tobi' | upcase }}
	Hello tobi has {{ 'tobi' | size }} letters!
	Hello {{ '*tobi*' | textilize | upcase }}
	Hello {{ 'now' | date: "%Y %h" }}
{% endraw %}

输出结果是：

	Hello {{ 'tobi' | upcase }}
	Hello tobi has {{ 'tobi' | size }} letters!
	Hello {{ '*tobi*' | textilize | upcase }}
	Hello {{ 'now' | date: "%Y %h" }}

###标准过滤器

{% raw %}
* `date` - reformat a date syntax reference
* `capitalize` - capitalize words in the input sentence
* `downcase` - 将输入字符串转为小写
* `upcase` - 将输入字符串转为大写
* `first` - 得到传递数组的第一个元素
* `last` - 得到传递数组的最后一个元素
* `join` - 将数组中的元素连成一串，中间通过某些字符分隔
* `sort` - 对数组元素进行排序
* `map` - 从一个给定属性中映射/收集一个数组
* `size` - 返回一个数组或字符串的大小
* `escape` - 对一串字符串进行编码
* `escape_once` - 返回一个转义的html版本，而不影响现有的转义文本
* `strip_html` - 去除一串字符串中的所有html标签
* `strip_newlines` - 从字符串中去除所有换行符(\n) 
* `newline_to_br` - 将所有的换行符(\n)换成html的换行标记
* `replace` - 匹配每一处指定字符串，如 {{ 'foofoo' | replace:'foo','bar' }} #=> 'barbar'
* `replace_first` - 匹配第一处指定的字符串，如 {{ 'barbar' | replace_first:'bar','foo' }} #=> 'foobar'
* `remove` - 删除每一处匹配字符串，如 {{ 'foobarfoobar' | remove:'foo' }} #=> 'barbar'
* `remove_first` - 删除第一处匹配的字符串，如 {{ 'barbar' | remove_first:'bar' }} #=> 'bar'
* `truncate` - 将一串字符串截断为x个字符
* `truncatewords` - 将一串字符串截断为x个单词
* `prepend` - 在一串字符串前面加上指定字符串，如 {{ 'bar' | prepend:'foo' }} #=> 'foobar'
* `append` - 在一串字符串后面加上指定字符串，如 {{ 'foo' | append:'bar' }} #=> 'foobar'
* `minus` - 减，如 {{ 4 | minus:2 }} #=> 2
* `plus` - 加，如 {{ '1' | plus:'1' }} #=> '11', {{ 1 | plus:1 }} #=> 2
* `times` - 乘，如 {{ 5 | times:4 }} #=> 20
* `divided_by` - 除，如 {{ 10 | divided_by:2 }} #=> 5
* `split` - 将一串字符串根据匹配模式分割成数组，如 {{ "a~b" | split:~ }} #=> ['a','b']
* `modulo` - 余数，如 {{ 3 | modulo:2 }} #=> 1
{% endraw %}

##标签
标签用于你的模板逻辑。新的标签很容易开发，因此我希望在发布这些代码后，大家可以为标准标签库增加更多的内容。

下列是当前已经支持的标签：

* **assign** - Assigns some value to a variable
* **capture** - Block tag that captures text into a variable
* **case** - Block tag, its the standard case...when block
* **comment** - Block tag, comments out the text in the block
* **cycle** - Cycle is usually used within a loop to alternate between values, like colors or DOM classes.
* **for** - For loop
* **if** - Standard if/else block
* **include** - Includes another template; useful for partials
* **raw** - temporarily disable tag processing to avoid syntax conflicts.
* **unless** - Mirror of if statement

###注释

注释是最简单的标签Comment is the simplest tag. It just swallows content.

We made 1 million dollars {% comment %} in losses {% endcomment %} this year

###Raw

Raw暂时性的禁用的标签的解析。这在需要展示一些可能产生冲突的内容（如本页面，要展示liquid语句，就需要包含在raw标签间，否则会被解析）时非常有用。 

{% raw %}
	{% raw %}
	  In Handlebars, {{ this }} will be HTML-escaped, but {{{ that }}} will not.
	{% endraw %}
{% endraw %}

###If / Else

if / else在其他编程语言里应该已经被熟知了。Liquid使得你可以通过if或unless（elsif和else为可选）编写简单的表达式:

{% raw %}
	{% if user %}
	  Hello {{ user.name }}
	{% endif %}
	
	{% if user.name == 'tobi' %}
	  Hello tobi
	{% elsif user.name == 'bob' %}
	  Hello bob
	{% endif %}
	
	{% if user.name == 'tobi' or user.name == 'bob' %}
	  Hello tobi or bob
	{% endif %}
	
	{% if user.name == 'bob' and user.age > 45 %}
	  Hello old bob
	{% endif %}
	
	{% if user.name != 'tobi' %}
	  Hello non-tobi
	{% endif %}

	# 同上
	{% unless user.name == 'tobi' %}
	  Hello non-tobi
	{% endunless %}
	
	# 检测是否用户有一张信用卡
	{% if user.creditcard != null %}
	   poor sob
	{% endif %}
	
	# 同上
	{% if user.creditcard %}
	   poor sob
	{% endif %}
	
	# Check for an empty array
	{% if user.payments == empty %}
	   you never paid !
	{% endif %}
	
	{% if user.age > 18 %}
	   Login here
	{% else %}
	   Sorry, you are too young
	{% endif %}
	
	# array = 1,2,3
	{% if array contains 2 %}
	   array includes 2
	{% endif %}
	
	# string = 'hello world'
	{% if string contains 'hello' %}
	   string includes 'hello'
	{% endif %}
{% endraw %}

###Case语句

如果你需要更多的条件判断，你可以使用case语句:

{% raw %}
	{% case condition %}
	{% when 1 %}
	hit 1
	{% when 2 or 3 %}
	hit 2 or 3
	{% else %}
	... else ...
	{% endcase %}
{% endraw %}

Example:

{% raw %}
	{% case template %}
	
	{% when 'label' %}
	     // {{ label.title }}
	{% when 'product' %}
	     // {{ product.vendor | link_to_vendor }} / {{ product.title }}
	{% else %}
	     // {{page_title}}
	{% endcase %}
{% endraw %}

###Cycle

我们常常需要在不同的颜色或类似的任务间轮流切换。Liquid对于这样的操作有内置支持，通过使用cicle标签。

{% raw %}
	{% cycle 'one', 'two', 'three' %}
	{% cycle 'one', 'two', 'three' %}
	{% cycle 'one', 'two', 'three' %}
	{% cycle 'one', 'two', 'three' %}
	
	will result in
	
	one
	two
	three
	one
{% endraw %}

如果一组cycle没有命名，那默认情况下有用相同参数的会被认为是一个组。

如果你希望完全控制cycle组，你可以指定一个组名，这个组名甚至可以是一个变量。

{% raw %}
	{% cycle 'group 1': 'one', 'two', 'three' %}
	{% cycle 'group 1': 'one', 'two', 'three' %}
	{% cycle 'group 2': 'one', 'two', 'three' %}
	{% cycle 'group 2': 'one', 'two', 'three' %}
	
	will result in
	
	one
	two
	one
	two
{% endraw %}

###循环

Liquid允许循环一个集合 allows for loops over collections:

{% raw %}
	{% for item in array %}
	  {{ item }}
	{% endfor %}
{% endraw %}
	
During every for loop, the following helper variables are available for extra styling needs:

	forloop.length      # => length of the entire for loop
	forloop.index       # => index of the current iteration
	forloop.index0      # => index of the current iteration (zero based)
	forloop.rindex      # => how many items are still left?
	forloop.rindex0     # => how many items are still left? (zero based)
	forloop.first       # => is this the first iteration?
	forloop.last        # => is this the last iteration?
	
There are several attributes you can use to influence which items you receive in your loop

limit:int lets you restrict how many items you get. offset:int lets you start the collection with the nth item.

	# array = [1,2,3,4,5,6]
	{% for item in array limit:2 offset:2 %}
	  {{ item }}
	{% endfor %}
	# results in 3,4
	
Reversing the loop

	{% for item in collection reversed %} {{item}} {% endfor %}

Instead of looping over an existing collection, you can define a range of numbers to loop through. The range can be defined by both literal and variable numbers:

	# if item.quantity is 4...
	{% for i in (1..item.quantity) %}
	  {{ i }}
	{% endfor %}
	# results in 1,2,3,4
	
###Variable Assignment

You can store data in your own variables, to be used in output or other tags as desired. The simplest way to create a variable is with the assign tag, which has a pretty straightforward syntax:

	{% assign name = 'freestyle' %}
	
	{% for t in collections.tags %}{% if t == name %}
	  <p>Freestyle!</p>
	{% endif %}{% endfor %}
	
Another way of doing this would be to assign true / false values to the variable:

	{% assign freestyle = false %}
	
	{% for t in collections.tags %}{% if t == 'freestyle' %}
	  {% assign freestyle = true %}
	{% endif %}{% endfor %}
	
	{% if freestyle %}
	  <p>Freestyle!</p>
	{% endif %}
	
If you want to combine a number of strings into a single string and save it to a variable, you can do that with the capture tag. This tag is a block which "captures" whatever is rendered inside it, then assigns the captured value to the given variable instead of rendering it to the screen.

	{% capture attribute_name %}{{ item.title | handleize }}-{{ i }}-color{% endcapture %}
	
	<label for="{{ attribute_name }}">Color:</label>
	<select name="attributes[{{ attribute_name }}]" id="{{ attribute_name }}">
	  <option value="red">Red</option>
	  <option value="green">Green</option>
	  <option value="blue">Blue</option>
	</select>



参考：
1. [Liquid for Designers](https://github.com/shopify/liquid/wiki/liquid-for-designers)



































