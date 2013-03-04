---
layout: post
title: "Liquid Extensions"
description: ""
category: site
tags: [jekyll]
---
{% include JB/setup %}



Jekyll使用Liquid来处理模板。除了标准的liquid标签和过滤器以外，Jekyll还添加了一些它自己的标签和过滤规则。 

##过滤器
**日期转为XML结构**

把时间转为XML结构的形式

{% raw %}
	{{ site.time | date_to_xmlschema }} => 2008-11-17 13:07:54-08:00
{% endraw %}

**日期转为短字符串**

把一段日期转为较短的字符串形式，如  “27 Jan 2011”.

{% raw %}
	{{ site.time | date_to_string }} => 17 Nov 2008
{% endraw %}

**日期转为长字符串**

把日期转为较长的字符串形式，如  “27 January 2011”.

{% raw %}
	{{ site.time | date_to_long_string }} => 17 November 2008
{% endraw %}

**XML编码**

在XML中为一些文本进行编码

{% raw %}
	{{ page.content | xml_escape }}
{% endraw %}

**CGI编码**

CGI为一串URL中的字符串进行编码以供使用，把其中的特殊字符都转为对应的%XX形式。

{% raw %}
	{{ "foo,bar;baz?" | cgi_escape }} => foo%2Cbar%3Bbaz%3F
{% endraw %}

**文字计数**

计算出一段文本中的文字个数.

{% raw %}
	{{ page.content | number_of_words }} => 1337
{% endraw %}

**数组转字符串**

将一个数组转为一系列字符串.

{% raw %}
	{{ page.tags | array_to_sentence_string }} => foo, bar, and baz
{% endraw %}

**Textilize**

将一串Textile格式的字符串转为HTML,通过RedCloth进行格式化

{% raw %}
	{{ page.excerpt | textilize }}
{% endraw %}

**Markdownify**

将一串Markdown格式的字符串转为HTML.

{% raw %}
	{{ page.excerpt | markdownify }} 
{% endraw %}

##标签
**Include**

如果你有一些页面片段希望能在你的网站的很多页面都用到，那么你可以使用include标签。

{% raw %}
	{% include sig.textile %}
{% endraw %}
	
Jekyll默认是将所有被包含的页面放到你的源目录的_includes目录下，因此这段代码会把/path/to/proto/site/_includes/sig.textile中的内容包含到调用的页面。 

**代码高亮**

Jekyll通过Pygments为超过100种语言提供了语法高亮支持。为了充分利用这一点，你必须安装Pygments，且pygmentize二进制必须存在在你的路径。当你运行Jekyll时，确保你是在Pygments的支持下运行的。

为了表示一块应该被高亮的代码块:

{% raw %}
	{% highlight ruby %}
		def foo
		  puts 'foo'
		end
	{% endhighlight %}
{% endraw %}
	
The argument to highlight is the language identifier. To find the appropriate identifier to use for your favorite language, look for the “short name” on the Lexers page.

**行号**

第二个高亮的参数是linenos，它是可选的。包含linenos参数后，将使得高亮代码带有行号。例如，下面的代码块将在每行前加上行号:

{% raw %}
	{% highlight ruby linenos %}
		def foo
		  puts 'foo'
		end
	{% endhighlight %}
{% endraw %}
	
In order for the highlighting to show up, you’ll need to include a highlighting stylesheet. For an example stylesheet you can look at syntax.css. These are the same styles as used by GitHub and you are free to use them for your own site. If you use linenos, you might want to include an additional CSS class definition for lineno in syntax.css to distinguish the line numbers from the highlighted code.

文字Url

如果你想要包含你网站中的一篇文章链接，你可以使用post_url标签.

{% raw %}
	{% post_url 2010-07-21-name-of-post %}
{% endraw %}
	
不需要包含扩展名.

如果你想要创建一条文字链接，如下:

{% raw %}
	[Name of Link]({% post_url 2010-07-21-name-of-post %})
{% endraw %}

参考：
1. [Liquid Extensions](https://github.com/mojombo/jekyll/wiki/Liquid-Extensions)


































