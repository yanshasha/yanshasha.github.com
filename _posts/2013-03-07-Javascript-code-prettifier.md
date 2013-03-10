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

1.    下载 [prettyprint对应的样式表和脚本文件](http://google-code-prettify.googlecode.com/files/prettify-small-5-Jul-2008.zip). 

2.    下载后解压，将其中的css和js分别放到你的对应目录下。然后在你的文件中包含它们，注意调整在 script 和 link标签中的路径，我的是：
{% raw %}		
		<link rel="stylesheet" href="{{ ASSET_PATH }}/css/prettify.css">
		<script type="text/javascript" src="{{ ASSET_PATH }}/js/prettify.js"></script>
{% endraw %} 	
3.    由于我是用markdown来写文章，而markdown只要用tab缩进文档就会自动生成`<pre><code>`标记。如果是在行内标记Code，也只需要用反引号(\`)包含相关文字就可以了。也就是说，我不需要在页面里写html标签，通过markdown渲染器就能自动生成html。而prettyprint的样式需要在`<pre>`或`<code>`中添加类名prettyprint,那怎么办呢？

    非常简单，在页面里插入js代码：    

		<script type="text/javascript">
			$(document).ready(function() {
				$('pre').addClass('prettyprint');
				prettyPrint();
			});
		</script>	
		
	也就是:为每个自动生成的`<pre>`标签当添加上`.prettyprint`类,这样一来,我们引入的样式表和脚本就能对其生效了.

4.    在第2步下载的样式表是默认样式表，如果你希望换成其他样式，去[prettify主题列表](http://google-code-prettify.googlecode.com/svn/trunk/styles/index.html)里选择一种你希望的样式，下载并替换掉上面说到的prettify.css即可。当然，你也可以直接修改css的内容来自定义样式。



##常见问题

###它是为什么语言工作的?

prettify.js中的注释是权威的,但是它的语法分析程序可以在很多语言中使用,包括 C , Java, Python, Bash, SQL, HTML, XML, CSS, Javascript, 和 Makefiles. 它在 Ruby, PHP, VB, 和 Awk 中还算可以,而且也可以在 Perl 和 Ruby的合适子集中起作用,但是, 因为注释的约定,它对 Smalltalk, 或 CAML类似的语言起作用.

LISP系列的语言可以使用一个拓展lang-lisp.js.


  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-apollo.js">Apollo</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-basic.js">Basic</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-clj.js">Clojure</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-css.js">CSS</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-dart.js">Dart</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-erlang.js">Erlang</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-go.js">Go</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-hs.js">Haskell</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-lisp.js">Lisp, Scheme</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-llvm.js">Llvm</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-lua.js">Lua</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-matlab.js">Matlab</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-ml.js">MLs:F#, Ocaml,SML</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-mumps.js">Mumps</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-n.js">Nemerle</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-pascal.js">Pascal</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-proto.js">Protocol buffers</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-r.js">R, S</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-rd.js">RD</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-scala.js">Scala</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-sql.js">SQL</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-tcl.js">TCL</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-tex.js">Latek</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-vb.js">Visual Basic</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-vhdl.js">CHDL</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-wiki.js">Wiki</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-xq.js">XQ</a>
  <a href="http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-yaml.js">YAML</a>


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
You may also use the HTML 5 convention of embedding a code element inside the PRE and using language-java style classes. E.g.

	<pre class="prettyprint">
		<code class="language-java">...</code>
	</pre>

参考:
1. [Javascript code prettifier](http://google-code-prettify.googlecode.com/svn/trunk/README.html) 
2. 












