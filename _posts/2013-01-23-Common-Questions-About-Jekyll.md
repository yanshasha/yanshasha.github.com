---
layout: post
title: "Common Questions"
description: ""
category: site
tags: [问题总结,jekyll]
---
{% include JB/setup %}


* 想在页面显示模板语言时，要套在"<% raw %><% endraw %>"中
* "_site","_include"之类的要写在引号中

* \[\]方括号记得要用反斜杠\分一下，不然编译会报错

Problem3 "Ruby193/lib/ruby/gems/1.9.1/gems/jekyll-0.11.2/lib/jekyll/convertible.rb:29:in ‘read_yaml’: invalid byte sequence in GBK (ArgumentError)"
貌似是 jekyll 的一个 bug
将 convertible.rb 的第29行改为：
self.content = File.read(File.join(base, name), :encoding => "utf-8")

##Problem2 "Liquid error: incompatible character encodings: UTF-8 and IBM437"
这个问题是在 Windows 下出现的，英文博文没问题，中文博文就会报错，原因是你所使用的控制台并不能工作 UTF-8。
1. MyGit 控制台解决方案
临时：在执行 jekyll 命令前，将当前控制台的代码格式转为 UTF-8:
	$ export LC_ALL=en_US.UTF-8
	$ export LANG=en_US.UTF-8
	$ jekyll --server --auto
永久：添加两对用户自定义的环境变量，LC_ALL=en_US.UTF-8 和 LANG=en_US.UTF-8
2. cmd 控制台解决方案
临时：在执行 jekyll 命令前，将当前控制台的代码格式转为 UTF-8:
chcp 65001
jekyll --server --auto
永久：将 chcp 命令和 jekyll 命令合并成一个 rake 任务，文件名就叫 rakefile，在 cmd 控制台执行 rake runwindows 即可。

task :runwindows do
    puts '* Changing the codepage'
    `chcp 65001`
    puts '* Running Jekyll'
    `jekyll --server --auto`
end

## Problem3 "Ruby193/lib/ruby/gems/1.9.1/gems/jekyll-0.11.2/lib/jekyll/convertible.rb:29:in ‘read_yaml’: invalid byte sequence in GBK (ArgumentError)"
貌似是 jekyll 的一个 bug
将 convertible.rb 的第29行改为：
self.content = File.read(File.join(base, name), :encoding => "utf-8")

##参考 启动 jekyll 后，似乎是编码处理的问题，报错：

    `read_yaml': invalid byte sequence in GB2312 
解决办法：安装 参考链接中提到的 方法，首先安装 ruby 的 bundler 模块:

    gem install bundler

然后修改 jekyll 的主程序源码 ，我的本机安装位置是在:

    C:\Ruby193\lib\ruby\gems\1.9.1\gems\jekyll-0.11.2\lib\jekyll.rb  
在上部一堆 require_all 后面 第 48 行 ，修改了缺省文字编码为 utf-8 ，增加代码：

    if RUBY_VERSION =~ /1.9/
      Encoding.default_external = Encoding::UTF_8
      Encoding.default_internal = Encoding::UTF_8
    end  
    

在按装Ruby Devkit时候，可能需要手动去添加Ruby，根据注释说，只需把安装Ruby的绝对路径粘贴在“---”下面即可。可是试过了，运行ruby dk.rb review，报出如下错误 

	“Invalid configuration. Please fix 'config.yml.'”  


很是费解，经过调查发现，这里要添加的是一个Rubies list即，及时有只安装了一个Ruby，也要写两个。也就是说重复两行；此外，绝对路径之前需要加“横线”+“空格” 



I use jekyll as my primary blogging platform. I wanted to write a post today and all of a sudden jekyll stopped working and did not generate the _site content anymore. I then deleted the _site content and tried regenerating my site using jekyll --server. It blindly said it re-generated my site however it did not. When I tried accessing my http://localhost/4000 it gave me a forbidden error, no access permission to /. It was because my _site directory was empty.

I then ran jekyll --no-auto --server which actually printed the error on why it was failing to generate the site

/Users/pradeepnayak/projects/jekyll/lib/jekyll/convertible.rb:26:in `read_yaml': invalid 
byte sequence in UTF-8 (ArgumentError)
from /Users/pradeepnayak/projects/jekyll/lib/jekyll/post.rb:39:in `initialize'
from /Users/pradeepnayak/projects/jekyll/lib/jekyll/site.rb:110:in `new'
from /Users/pradeepnayak/projects/jekyll/lib/jekyll/site.rb:110:in `block in read_posts'
from /Users/pradeepnayak/projects/jekyll/lib/jekyll/site.rb:108:in `each'
from /Users/pradeepnayak/projects/jekyll/lib/jekyll/site.rb:108:in `read_posts'
from /Users/pradeepnayak/projects/jekyll/lib/jekyll/site.rb:169:in `read_directories'
from /Users/pradeepnayak/projects/jekyll/lib/jekyll/site.rb:79:in `read'
from /Users/pradeepnayak/projects/jekyll/lib/jekyll/site.rb:71:in `process'
from ../jekyll/bin/jekyll:150:in `'
To fix this problem add the following lines in your .zshrc or .bashrc file depending upon your shell.

    export LC_ALL=en_US.UTF-8
    export LANG=en_US.UTF-8
This is mainly an issue of how Ruby decides to handle String encodings by default. You can read more about it <a href="http://blog.grayproductions.net/articles/ruby_19s_string">here</a>