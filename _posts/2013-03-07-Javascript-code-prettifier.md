---
layout: post
title: "windows7下利用prettyprint高亮markdown代码"
description: ""
category: site
tags: [jekyll]
---
{% include JB/setup %}

之前我本来是希望用pygments来高亮代码的，但是后来发现要安装pygments需要安装python，pygments还有一系列配置，完了还没成功。所以就转而想找个更简单的方法。
然后就有了本文所说到的[prettyprint](http://code.google.com/p/google-code-prettify/)。 用这个搭配markdown来写技术博客，比pygments更简单，对css的定制也更方便。

Let's have a try!

##安装使用

1.    下载 [prettyprint对应的样式表和脚本文件](http://google-code-prettify.googlecode.com/files/prettify-small-5-Jul-2008.zip)

2.    下载后解压，将其中的css和js分别放到你的对应目录下。然后在你的文件中包含它们，注意调整在 script 和 link标签中的路径，我的是：
		
		<link rel="stylesheet" href="{{ ASSET_PATH }}/css/prettify.css">
		<script type="text/javascript" src="{{ ASSET_PATH }}/js/prettify.js"></script>
	
3.    由于我是用markdown来写文章，而markdown只要用tab缩进文档就会自动生成`<pre><code>`标记。如果是在行内标记Code，也只需要用反引号(\`)包含相关文字就可以了。也就是说，我不需要在页面里写html标签，通过markdown渲染器就能自动生成html。而prettyprint的样式需要在`<pre>`或`<code>`中添加类名prettyprint,那怎么办呢？

    非常简单，在页面里插入js代码：
    
<?prettify?>
code here


		<script type="text/javascript">
			$(document).ready(function() {
				$('pre').addClass('prettyprint');
				prettyPrint();
			});
		</script>	
		
    即可。

4.    在第2步下载的样式表是默认样式表，如果你希望换成其他样式，去[prettify主题列表](http://google-code-prettify.googlecode.com/svn/trunk/styles/index.html)里选择一种你希望的样式，下载并替换掉上面说到的prettify.css即可。当然，你也可以直接修改css的内容来自定义样式。



##常见问题

###它是为什么语言工作的?

prettify.js中的注释是权威的,但是它的语法分析程序可以在很多语言中使用,包括 C , Java, Python, Bash, SQL, HTML, XML, CSS, Javascript, 和 Makefiles. 它在 Ruby, PHP, VB, 和 Awk 中还算可以,而且也可以在 Perl 和 Ruby的合适子集中起作用,但是, 因为注释的约定,它对 Smalltalk, 或 CAML类似的语言起作用.

LISP系列的语言可以使用一个拓展lang-lisp.js.

对于 CSS, Haskell, Lua, OCAML, SML, F#, Visual Basic, SQL, Protocol Buffers, 和 WikiText..也是类似的

如果你想给你喜欢的语言写个拓展版本, 请参阅src/lang-lisp.js ,并写一个包括你的语言的拓展的 发布 和一个测试用例.

如何指定我的代码在哪种语言里?

你不需要指定语言环境,因为 prettyprint() 会对此进行猜测. 你可以使用 prettyprint 这个类通过指定语言的拓展名来指定语言,就像这样:

	<pre class="prettyprint lang-html">
	  The lang-* class specifies the language file extensions.
	  File extensions supported by default include
	    "bsh", "c", "cc", "cpp", "cs", "csh", "cyc", "cv", "htm", "html",
	    "java", "js", "m", "mxml", "perl", "pl", "pm", "py", "rb", "sh",
	    "xhtml", "xml", "xsl".
	</pre>
它在混淆代码例子上不起作用吗?

是的. 美化混淆代码就像给小猪涂口红,也就是不在这个工具的范围内. 

它可以在那些浏览器上工作?

这个工具已经在 IE 6, Firefox 1.5 & 2, 和 Safari 2.0.4 上测试通过. 打开 测试页面 ,看看它能不能在你的浏览器上起作用.

有什么改变?

查看 变化日志

 为什么Prettyprinting 对WordPress中的字符串没用?

很显然,wordpress 在 "smart quoting" 时会改变关闭符号. 这使得关闭符号跟开始符号不配套.

这和复制粘贴代码一样,破坏了美化作用. 去 WordPress's help center 查看更多关于如何关闭插入代码段时的"smart quoting"的信息.

如何在我的代码中加入行号? (Out of date -- see English version)

你可以使用 nocode 类来标记 span 标记不是代码.

<pre class=prettyprint>
<span class="nocode">1:</span> /* This is line 1 of my code
<span class="nocode">2:</span>  * and here's line 2 */
<span class="nocode">3:</span> print("I'm line number 3");
</pre>
得到
1: /* This is line 1 of my code
2:  * and here's line 2 */
3: print("I'm line number 3");
查看一个更完整的例子： issue22 testcase.

我得到了这样一条错误信息 "a is not a function" 或 "opt_whenDone is not a function"

如果你通过事件句柄条用 prettyPrint , 把它隐藏到一个函数中. 

不要这么写

addEventListener('load', prettyPrint, false);
而要这么写
addEventListener('load', function (event) { prettyPrint() }, false);
这样的话,浏览器就不会把时间对象传递给 prettyPrint ,事件对象会让它困惑的. 


Last modified: Wed Jan 7 13:25:42 PST 2009











