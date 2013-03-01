---
layout: post
title: "windows7下利用railsinstaller轻松构造github站点"
description: ""
category: font tech
tags: [github,raisinstaller,lessons]
---
{% include JB/setup %}

##安装railsinstaller
1. 进入网站<http://railsinstaller.org/>，从中间选择你的系统对应的下载版本，点击下载。我的是windows。
2. 下载完成后，双击开始安装，根据步骤一步步向下走就是。
3. 安装完成后，页面会弹出windows命令行弹框（DOS弹框），其中会要求你填写你的名字和邮箱。输入完成后，你会看到你生成的公共SSH key。
在C:\Documents and Settings\用户名下，有个隐藏目录名为.ssh，id_rsa.pub文件就是公钥，id_rsa就是密钥。
4. 在Github网站找到 “Account Settings” >  “SSH Keys” >  “Add SSH key”。用文本编辑器打开id_rsa.pub文件，并把里面的内容（包括空格和新行）复制出来，填到Github的账户设置的SSH设置里。
5. 在开始菜单里找到RailsInstaller –> Git Bash，打开。在窗口里我们可以看到当前路径显示为/c/Sites，其实它表示的是C:\Sites，这个目录是RailsInstaller在安装的时候建的。用下面的命令测试一下git是否连接正常:
	
	`ssh -T git@github.com`
6. 安装jekyll:

`gem install jekyll`

7. Jekyll默认用maruku来解析markdown语言，但是maruku不仅解析速度比较慢，而且对中文支持也不好，我之前用默认的maruku，在本地服务器执行时总是报错。因此我推荐用别的程序来解析，比如rdiscount,安装rdiscount需要DevKit的支持。也正是因为在单独安装DevKit的时候碰到不少问题，我才尝试用railsinstaller一次性全安装，虽然方法比较小白，但是对我来说，环境不是重点，博客的内容才是，所以就怎么方便怎么来了。

`gem install rdiscount -v=1.6.8 --platform=ruby`

开始利用`gem install rdiscount`安装rdiscount的过程中一直有问题，后来改成上面的方式，加了版本号后就成功了。

8. 接下来把你的github站点clone下来就好了

`git clone git@github.com:xx/xx.git`

9. 修改你的本地站点中的_config.yml文件，在其中加上一行：`markdown :  rdiscount`,注意冒号右边要留有空格，不然在运行服务器时会报错说无法解析。

10. 在Git Bash中输入`jekyll --server`（先定位到你的本地站点所在的目录）,然后在浏览器中输入http://localhost:4000就可以本地调试站点内容了。



	 

参考：

1. [Github Pages极简教程](http://yanping.me/cn/blog/2012/03/18/github-pages-step-by-step/)
2. <http://railsinstaller.org/>



