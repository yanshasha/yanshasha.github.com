---
layout: post
title: "windows7下利用Pygments高亮代码 "
description: ""
category: site
tags: [jekyll]
---
{% include JB/setup %}


由于我这样的小白一直是习惯使用windows系统，所以下面将一步步教你如何在 Windows7 下安装 并使用Pygments。
##安装 

###Step1
安装<a href="/ftp/python/2.7.3/python-2.7.3.msi">Python 2.7.3 Windows Installer</a>

或者你可以去<http://www.python.org/getit/>选择你想要的版本

###Step2
在 Linux 模拟环境下（Cygwin<http://cygwin.com/install.html>），
Windows的Dos Scripts功能非常薄弱，命令行工具也非常少；如果您对Linux比较熟悉，那么Cygwin可以帮助您在Windows下面使用强大的Bash，以及使用数量繁多的Linux命令，通过Scripts，可以更加高效的完成系统管理工作 [站长维护的Windows服务器上都安装有Cygwin，所有的系统维护，数据备份，SCP自动同步，都是在Cygwin下面处理的。]
如果您刚进入Linux的世界，使用Cygwin可以让你在Windows下面练习Linux的Bash，以及常用工具。而不需要安装Linux，也不用担心Windows被破坏。
使用 easy_install 安装：
 
# On Win7 安装
$ easy_install Pygments
>>>easy_install 的安装使用
使用
Step1
生成高亮显示的 css 文件
在 Pygments 官网上传自己的代码或者使用现有的 demo 选择自己喜欢的样式，记下名称

我选择的是 fruity style，作为 pygmentize 命令 style 的参数值
 
# 生成相应的css，并在需要的页面中引入该css
$ pygmentize -S fruity -f html > css/syntax.css
>>>参考 pygments Command line usage
Step2
在 _config.yml 中添加：
pygments:	true
markdown: redcloth
Step3
在 post 博文中内嵌高亮的代码段：
{% raw %}
def foo
  puts 'foo'
end
{% endraw %}
highlight 后面第一个参数为 language，如 python，也可以是 ruby 控制台 irb，更多 lanuages 可以查询 这里～
第二个参数显示行号
注意
1. 第一个参数为必填，不填会导致 _site 目录生成不了相应的 html 文件
2. 高亮代码段上下都必须留出一行空白，否则会导致乱码
3. 有的代码会很长，建议使用左右滚轮，在主题 css 中添加 .highlight{ overflow: auto; } 即可

>后记：惭愧的说，虽然我折腾了很久，按照这个教程想要安装pygments，但是一直报错，说`cannot load such file`之类的。而且即使我在config.yml中把pygments的选项设为false，在gems库里把对应的pygments都删掉还是报错。直到我在C:\Ruby200\lib\ruby\gems\2.0.0\gems\jekyll-0.12.1\lib\jekyll.rb中的第27行把`require 'pygments'`注释掉，才OK。
不知道是我个人这边的原因还是windows的普遍原因，总之我是放弃了安装pygments，改为引入Javascript code prettifier来高亮代码。











