---
layout: page
title: 莎莎小筑
tagline: Supporting tagline
---
{% include JB/setup %}

<ul class="article-list">
{% for post in site.posts limits 5 %}
	<li>
		<header>
			<h2><a href="{{post.url}}">{{post.title}}</a></h2>
		</header>
		<aside>
			<ul>
				<li>{{post.date | date:"%y-%m-%d" }}</li>
				<li>{{post.categories }}</li>
				<li>
					{% assign tags_list = post.tags %}  
  				    {% include JB/tags_list %}
  	  			</li>
			</ul>			 
		</aside>
		<div class="article-content">
			{{ post.content|strip_html |  truncate:300}}
		</div>
	</li>
{% endfor %}
</ul>




