---
layout: post
title: "YAML Front Matter"
description: ""
category: jekyll
tags: [jekyll]
---
{% include JB/setup %}


任何带有YAML front matter块的文件都会被Jekyll作为特殊文件解析。YAML front matter必须位于文件的最前面，且格式如下：

	---
	layout: post
	title: Blogging Like a Hacker
	---

在这三虚线之间，你可以设置预定义的变量（见下面的参考）或自定义你自己的数据。	

**重要! (尤其对于Windows用户而言)**

假如你的文件使用的是UTF-8编码，确保在你的文件中不存在DOM头字符，否则就玩完啦~（或者，您也可以运行`chcp 65001`来将你的代码页设置为UTF-8.注意，这样做的话，在Vista或更早的系统中的batch文件会有一些问题）

##预定义的全局变量
<table>
	<tr>
		<th>变量</th>
		<th>描述</th>
	</tr>
	<tr>
		<td><code>layout</code></td>
		<td>
			这个属性将指定文件所使用的布局文件
		</td>		
	</tr>
	<tr>
		<td><code>page.title</code></td>
		<td>
			文章标题
		</td>		
	</tr>
	<tr>
		<td><code>page.url</code></td>
		<td>
			不带有域名的文章URL，如/2008/12/14/my-post.html
		</td>		
	</tr>
	<tr>
		<td><code>page.date</code></td>
		<td>
			分配给文章的日期（post的文件名中带有的日期）。这个可以通过在文章的front matter中指定一个新的日期/时间（以YYYY-MM-DD HH:MM:SS的格式）来覆盖。
		</td>		
	</tr>
	
</table>
layout	 If set, this specifies the layout file to use. Use the layout file name without file extension. Layout files must be placed in the _layouts directory.
permalink	 If you need your processed URLs to be something other than the default /year/month/day/title.html then you can set this variable and it will be used as the final URL. See more details about Permalinks.
published	 Set to false if you don’t want a post to show up when the site is generated.
category/categories	 Instead of placing posts inside of folders, you can specify one or more categories that the post belongs to. When the site is generated the post will act as though it had been set with these categories normally.
Categories (plural key) can be specified as a YAML list or a space-separated string.
tags	 Similar to categories, one or multiple tags can be added to a post. Also like categories, tags can be specified as a YAML list or a space-separated string.

##Custom Variables
Any variables in the front matter that are not predefined are mixed into the data that is sent to the Liquid templating engine during the conversion. For instance, if you set a title, you can use that in your layout to set the page title:

<% raw %>
	<title>{{ page.title }}</title>
<% endraw %>

##Predefined Variables for Post Front-Matter
These are available out-of-the-box to be used in the front-matter for a post.

<table>
	<tr>
		<th>变量</th>
		<th>描述</th>
	</tr>
	<tr>
		<td><code>date</code></td>
		<td>
			A date here overrides the date from the name of the post. This can be used to ensure correct sorting of posts.
		</td>		
	</tr>
</table>

	 

参考：
1. [YAML Front Matter](https://github.com/mojombo/jekyll/wiki/YAML-Front-Matter)



