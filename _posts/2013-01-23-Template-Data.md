---
layout: post
title: "Template Data(译)"
description: ""
category: site
tags: [jekyll]
---
{% include JB/setup %}



jekyll是一个简单的免费的Blog生成工具，类似WordPress。但是和WordPress又有很大的不同，原因是jekyll只是一个生成静态网页的工具，不需要数据库支持。但是可以配合第三方服务,例如disqus。最关键的是jekyll可以免费部署在Github上，而且可以绑定自己的域名。
编辑本段

##使用

首先建立目录结构，然后增加文件，最后使用jekyll发行生成静态网页发行。如果使用github的话，那就有托管的地方了。


###"_config.yml"

这个文件是为了保存配置的。所谓的配置，其实可以用在命令行里面。放在这个文件里面主要是比较方便。详细的配置说明这里有：

###"_includes"

这里面的就是可以重复利用的文件。这个文件可以被其他的文件包含，重复利用。{{" {% include file.ext "}}%}，就是引用file.ext的格式。

###"_layouts"

这里存放的是模板文件。

### "_posts"

这里的文件就实际的文章内容了。文件名必须使用YEAR-MONTH-DATE-title.MARKUP的格式。如果使用textile的话，扩展名就是textile.

### "_site" 

这个文件夹存放的是最终生成的文件。

对于目录下的每个文件，使用YAML Front Matter之后，都会被转格式，然后生成最终文件。

	—
	layout: post
	title: xxxxx
	category: tech
	—
这就是个简单的例子。

其他的目录都会被拷贝到最终文件的目录下。所以css,images等目录都可以放在根目录下。

##Global
<table>
	<tr>
		<th>变量</th>
		<th>描述</th>
	</tr>
	<tr>
		<td><code>site</code></td>
		<td>
			整个网站的信息+来自<code>_config.yml</code>的配置信息
		</td>		
	</tr>
	<tr>
		<td><code>page</code></td>
		<td>
			这只是在YAML Front Matter的基础上加了两个附加属性：url和content
		</td>		
	</tr>
	<tr>
		<td><code>content</code></td>
		<td>
			在layout文件中，这个包含了子视图中的内容。这个变量用于把渲染好的内容插入到layout中。并不用于post文件或者page文件。
		</td>		
	</tr>
	<tr>
		<td><code>paginator</code></td>
		<td>
			当设置了分页配置选项时，这个变量就成为可用项了
		</td>		
	</tr>
</table>



##Site

<table>
	<tr>
		<th>变量</th>
		<th>描述</th>
	</tr>
	<tr>
		<td><code>site.time</code></td>
		<td>
			当前时间（当你运行jekyll命令时）
		</td>		
	</tr>
	<tr>
		<td><code>site.posts</code></td>
		<td>
			按时间逆序（从新到旧）列出所有文章
		</td>		
	</tr>
	<tr>
		<td><code>site.related_posts</code></td>
		<td>
			如果当前正在解析的是一篇文章，这个属性将包含多达十个的相关文章。默认情况下，这个计算过程是低质量但是高速度的。如果你希望得到高质量的结果而不那么在乎计算速度，那么你可以运行jekyll命令—— lsi (latent semantic indexing潜在语义索引).
		</td>		
	</tr>
	<tr>
		<td><code>site.categories.CATEGORY</code></td>
		<td>
			根据类别列出所有文章
		</td>		
	</tr>
	<tr>
		<td><code>site.tags.TAG</code></td>
		<td>
			列出所有带有标签的文章
		</td>		
	</tr>
	<tr>
		<td><code>site.[CONFIGURATION_DATA]</code></td>
		<td>
			获取你在_config.yml中定义了的变量。如在你的配置文件中有url: http://mysite.com，那么在文章和页面里都可以通过{{ site.url }}来引用。Jekyll并不会自动解析你修改的_config.yml文件，因此每次改变你都需要重启jekyll使其生效。
		</td>		
	</tr>
	<tr>
		<td><code>site.pages</code></td>
		<td>
			列出所有（非文章）包含了YAML front matter的页面
		</td>		
	</tr>
</table>

##Page

<table>
	<tr>
		<th>变量</th>
		<th>描述</th>
	</tr>
	<tr>
		<td><code>page.content</code></td>
		<td>
			未经渲染的页面内容
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
	<tr>
		<td><code>page.id</code></td>
		<td>
			文章的唯一标识符（在RSS定制时非常有用），如/2008/12/14/my-post
		</td>		
	</tr>
	<tr>
		<td><code>page.categories</code></td>
		<td>
			某篇文章所属的类别列表。类别可以通过基于_posts的文件目录衍生得到，如，一篇 位于/work/code/_posts/2008-12-24-closures.textile的文章将把它的域设置为['work', 'code']。类别还可以通过在YAML Front Matter中指定。
		</td>		
	</tr>
	<tr>
		<td><code>site.pages</code></td>
		<td>
			某篇文章所属的标签列表，这个可以通过在YAML Front Matter中设置指定。
		</td>		
	</tr>
	<tr>
		<td><code>page.next</code></td>
		<td>
			时间上更新的一篇文章
		</td>		
	</tr>
	<tr>
		<td><code>site.previous</code></td>
		<td>
			时间上更老的一篇文章
		</td>		
	</tr>
</table>

Note: 任何在front matter中指定的自定义变量都能在页面中访问。比如，如果你在一个页面的front matter中指定了 custom_css: true，那么在页面中你就可以通过page.custom_css来访问这个变量的值

##Paginator
note: 只能在index文件中使用，可以是在子目录/blog/index.html中

<table>
	<tr>
		<th>变量</th>
		<th>描述</th>
	</tr>
	<tr>
		<td><code>paginator.per_page</code></td>
		<td>
			每页的文章数
		</td>		
	</tr>
	<tr>
		<td><code>paginator.posts</code></td>
		<td>
			该页可访问的文章
		</td>		
	</tr>
	<tr>
		<td><code>paginator.total_posts</code></td>
		<td>
			所有文章数
		</td>		
	</tr>
	<tr>
		<td><code>paginator.total_pages</code></td>
		<td>
			所有页面数
		</td>		
	</tr>
	<tr>
		<td><code>paginator.page</code></td>
		<td>
			当前页面的页码
		</td>		
	</tr>
	<tr>
		<td><code>paginator.previous_page</code></td>
		<td>
			前一页的页码
		</td>		
	</tr>
	<tr>
		<td><code>paginator.next_page</code></td>
		<td>
			后一页的页码
		</td>		
	</tr>
</table>

