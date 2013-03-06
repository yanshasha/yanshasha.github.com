---
layout: post
title: "如何在jekyll页面添加分页"
description: ""
category: site
tags: [jekyll]
---
{% include JB/setup %}


Important Note: Pagination only works when your file is named index.html. It does not work with markdown files or HTML files with a different name.

Just follow these steps to add pagination to your blog:

##_config.yml
add the pagination setting:

{% raw %}
	markdown: rdiscount
	pygments: true
	lsi: true
	exclude: ['README.markdown', 'README_FOR_COLLABORATORS.markdown', 'Gemfile.lock', 'Gemfile']
	production: false
	//add this line to add pagination
	paginate: 3 //the number of post per page
{% endraw %}

##index.html
just add the posts and the pagination links:

{% raw %}
	---
	layout: default
	title: Blog
	---
	
	{% for post in paginator.posts %}
	
	   <!-- here add you post markup -->
	   <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
	   <p class="author">
	    <span class="date">{{post.date}}</span>
	  </p>
	  <div class="content">
	    {{ post.content }}
	  </div>
	{% endfor %}
	
	<!-- Pagination links -->
	<div class="pagination">
	  {% if paginator.previous_page %}
	    <a href="/page{{paginator.previous_page}}" class="previous">Previous</a>
	  {% else %}
	    <span class="previous">Previous</span>
	  {% endif %}
	  <span class="page_number ">Page: {{paginator.page}} of {{paginator.total_pages}}</span>
	  {% if paginator.next_page %}
	    <a href="/page{{paginator.next_page}}" class="next ">Next</a>
	  {% else %}
	    <span class="next ">Next</span>
	  {% endif %}
	</div>
{% endraw %}


##A note about page1
Jekyll does not produce a page1 folder so using the above code will not work when a link is produced of the form "/page1". The following textile will handle page1 and render a list of each page with links to all but the current page.

{% raw %}

	<div id="post-pagination" class="pagination">
	
	  {% if paginator.previous_page %}
	  <p class="previous">
	    {% if paginator.previous_page == 1 %}
	    <a href="/">Previous</a>
	    {% else %}
	    <a href="/page{{paginator.previous_page}}">Previous</a>
	    {% endif %}
	  </p>
	  {% else %}
	  <p class="previous disabled">
	    <span>Previous</span>
	  </p>
	  {% endif %}
	
	  <ul class="pages">
	    <li class="page">
	      {% if paginator.page == 1 %}
	      <span class="current-page">1</span>
	      {% else %}
	      <a href="/">1</a>
	      {% endif %}
	    </li>
	
	    {% for count in (2..paginator.total_pages) %}
	    <li class="page">
	      {% if count == paginator.page %}
	      <span class="current-page">{{count}}</span>
	      {% else %}
	      <a href="/page{{count}}">{{count}}</a>
	      {% endif %}
	    </li>
	    {% endfor %}
	  </ul>
	
	  {% if paginator.next_page %}
	  <p class="next">
	    <a href="/page{{paginator.next_page}}">Next</a>
	  </p>
	  {% else %}
	  <p class="next disabled">
	    <span>Next</span>
	  </p>
	  {% endif %}
	
	</div>
	
{% endraw %}

##Paginating more specific groups of posts
The pagination feature only supports paginating over the full array of site.posts regardless of any grouping of posts defined by the user in categories or tags. Third party plugins exist to add this functionality.


参考：
1. [Pagination](https://github.com/mojombo/jekyll/wiki/Pagination)












