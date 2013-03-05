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

Problem2 "Liquid error: incompatible character encodings: UTF-8 and IBM437"
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

参考 启动 jekyll 后，似乎是编码处理的问题，报错：

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