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

**高级输入：过滤器**

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

**标准过滤器**

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
* `escape_once` - 返回一个转义的html版本，而不影响现有的转义文本returns an escaped version of html without affecting existing escaped entities
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

##Tags
Tags are used for the logic in your template. New tags are very easy to code, so I hope to get many contributions to the standard tag library after releasing this code.

Here is a list of currently supported tags:

assign - Assigns some value to a variable
capture - Block tag that captures text into a variable
case - Block tag, its the standard case...when block
comment - Block tag, comments out the text in the block
cycle - Cycle is usually used within a loop to alternate between values, like colors or DOM classes.
for - For loop
if - Standard if/else block
include - Includes another template; useful for partials
raw - temporarily disable tag processing to avoid syntax conflicts.
unless - Mirror of if statement
Comments

Comment is the simplest tag. It just swallows content.

We made 1 million dollars {% comment %} in losses {% endcomment %} this year
Raw



参考：
1. [Liquid for Designers](https://github.com/shopify/liquid/wiki/liquid-for-designers)



































