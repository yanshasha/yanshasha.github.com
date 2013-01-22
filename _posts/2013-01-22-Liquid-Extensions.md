---
layout: post
title: "Liquid Extensions"
description: ""
category: 
tags: []
---
{% include JB/setup %}



##Liquid Extensions
Jekyll使用Liquid来处理模板。除了标准的liquid标签和过滤器以外，Jekyll还添加了一些它自己的标签和过滤规则。 

###过滤器
**日期转为XML结构**

把时间转为XML结构的形式

	{{ site.time | date_to_xmlschema }} => 2008-11-17T13:07:54-08:00

**日期转为短字符串**

把一段日期转为较短的字符串形式，如  “27 Jan 2011”.

	{{ site.time | date_to_string }} => 17 Nov 2008

**日期转为长字符串**

把日期转为较长的字符串形式，如  “27 January 2011”.

	{{ site.time | date_to_long_string }} => 17 November 2008

**XML编码**

在XML中为一些文本进行编码

	{{ page.content | xml_escape }}

**CGI编码**

CGI为一串URL中的字符串进行编码以供使用，把其中的特殊字符都转为对应的%XX形式。

	{{ "foo,bar;baz?" | cgi_escape }} => foo%2Cbar%3Bbaz%3F

**文字计数**

计算出一段文本中的文字个数.

	{{ page.content | number_of_words }} => 1337

**数组转字符串**

将一个数组转为一系列字符串.

	{{ page.tags | array_to_sentence_string }} => foo, bar, and baz

**Textilize**

将一串Textile格式的字符串转为HTML,通过RedCloth进行格式化

	{{ page.excerpt | textilize }}

**Markdownify**

将一串Markdown格式的字符串转为HTML.

	{{ page.excerpt | markdownify }}

###标签
**Include**

如果你有一些页面片段希望能在你的网站的很多页面都用到，那么你可以使用include标签。

	{% include sig.textile %}
	
Jekyll默认是将所有被包含的页面放到你的源目录的_includes目录下，因此这段代码会把/path/to/proto/site/_includes/sig.textile中的内容包含到调用的页面。 

**代码高亮**

Jekyll通过Pygments为超过100种语言提供了语法高亮支持。为了充分利用这一点，你必须安装Pygments，且pygmentize二进制必须存在在你的路径。当你运行Jekyll时，确保你是在Pygments的支持下运行的。

为了表示一块应该被高亮的代码块:

	{% highlight ruby %}
		def foo
		  puts 'foo'
		end
	{% endhighlight %}
	
The argument to highlight is the language identifier. To find the appropriate identifier to use for your favorite language, look for the “short name” on the Lexers page.

Line number

There is a second argument to highlight called linenos that is optional. Including the linenos argument will force the highlighted code to include line numbers. For instance, the following code block would include line numbers next to each line:

	{% highlight ruby linenos %}
		def foo
		  puts 'foo'
		end
	{% endhighlight %}
In order for the highlighting to show up, you’ll need to include a highlighting stylesheet. For an example stylesheet you can look at syntax.css. These are the same styles as used by GitHub and you are free to use them for your own site. If you use linenos, you might want to include an additional CSS class definition for lineno in syntax.css to distinguish the line numbers from the highlighted code.

Post Url

If you would like to include a link to a post on your site, you can use the post_url tag.

{% post_url 2010-07-21-name-of-post %}
There is no need to include the extension.

To create a link, do:

[Name of Link]({% post_url 2010-07-21-name-of-post %})

参考：
1. [jQuery.extend 函数详解](http://www.cnblogs.com/RascallySnake/archive/2010/05/07/1729563.html)
2. [window.oninput](https://developer.mozilla.org/zh-CN/docs/DOM/window.oninput)


































