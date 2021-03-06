---
layout: post
title: "windows7下基于github搭建jekyll博客"
description: ""
category: site
tags: [jekyll]
---
{% include JB/setup %}

之前是分别一步步安装的jekyll博客。后来因为要安装devkit出了一些问题，一怒之下就把之前的东西全部删了，用了一下午安了个傻瓜式的railsinstaller。
最近要安pygments的时候又出现问题了，森森觉得自己真是弱爆了。也森森觉得用jekyll搭博客果然是得心里很强大的人才搞得起的~尤其是对我这种用windows系统的小白。

所以，我准备把所有需要的过程全部重来一遍，也在这里记录下来，如果还有像我这样的小白，也少走一些弯路吧。

##Git安装与配置

1. Windows版的下载地址在这里：http://code.google.com/p/msysgit/downloads/list。选择一个版本下载安装。

2. 安装完成后，我们开始生成ssh key，你可以通过[Generating SSH Keys](https://help.github.com/articles/generating-ssh-keys)查看详细步骤。

第一步，打开git bash，检查你电脑上现有的ssh key：

	$ cd ~/.ssh
	
如果显示“No such file or directory”，跳过下面这步，否则继续。

第二步，备份和移除原来的ssh key设置：

因为已经存在key文件，所以需要备份旧的数据并删除：

	$ ls
	config	id_rsa	id_rsa.pub	known_hosts
	$ mkdir key_backup
	$ cp id_rsa* key_backup
	$ rm id_rsa*
	
第三步，生成新的SSH Key：

输入下面的代码，就可以生成新的key文件，我们只需要默认设置就好，所以当需要输入文件名的时候，回车就好。

	$ ssh-keygen -t rsa -C "邮件地址@youremail.com"
	Generating public/private rsa key pair.
	Enter file in which to save the key (/Users/your_user_directory/.ssh/id_rsa):<回车就好>
	
然后系统会要你输入加密串（Passphrase）：

	Enter passphrase (empty for no passphrase):<输入加密串>
	Enter same passphrase again:<再次输入加密串>

最后看到这样的界面，就成功设置ssh key了： 

	Your identification has been saved in /c/Users/you/.ssh/id_rsa.
	# Your public key has been saved in /c/Users/you/.ssh/id_rsa.pub.
	# The key fingerprint is:
	# 01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db 邮件地址@example.com
	
3. 添加SSH Key到GitHub：

在本机设置SSH Key之后，需要添加到GitHub上，以完成SSH链接的设置。

在C:\Documents and Settings\用户名下(也有可能是在你安装的git文件夹下)，有个隐藏目录名为.ssh，id_rsa.pub文件就是公钥，id_rsa就是密钥。如果看不到这个文件，你需要设置显示隐藏文件。

在Github网站找到 “Account Settings” >  “SSH Keys” >  “Add SSH key”。用文本编辑器打开id_rsa.pub文件，并把里面的内容（包括空格和新行）复制出来。
选择SSH Keys项，把复制的内容粘贴进去，然后点击Add Key按钮即可：输入完成后，你会看到你生成的公共SSH key。

4. 测试
可以输入下面的命令，看看设置是否成功，`git@github.com`的部分不要修改：

	$ ssh -T git@github.com
	# Attempts to ssh to github
	
你可能会看到类似下面的警告：

	The authenticity of host 'github.com (207.97.227.239)' can't be established.
	# RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
	# Are you sure you want to continue connecting (yes/no)?

不要紧张，输入yes就好，然后会看到：

	Hi username! You've successfully authenticated, but GitHub does not provide shell access.

如果这个用户名是对的，那么恭喜你，已经成功的设置了你的SSH key。至于中间提到的shell access，无所谓，反正你也用不着的。

##搭建本地jekyll环境

Jekyll 是一个简洁的、特别针对博客平台的 静态网站 生成器。它使用一个模板目录作为网站布局的基础框架，并在其上运行 Textile 、 Markdown 或 Liquid 标记语言的转换器，最终生成一个完整的静态Web站点
接下来由于我们的博客是

1. 安装Ruby

Jekyll使用动态脚本语言 `Ruby` 写成。因此在安装Jekyll前，必须先安装Ruby。你可以直接点击下载安装[Ruby 1.9.3-p392](http://rubyforge.org/frs/download.php/76798/rubyinstaller-1.9.3-p392.exe) ，也可以去[RubyInstaller 下载地址](http://rubyinstaller.org/downloads/)选择其他版本。

但是需要注意的是：如果你安装的是`RubyInstaller v1.8.6`，请使用`DevKit-3.4.5`。如果`RubyInstaller`的版本是1.8.7,1.9.2或1.9.3，使用`DevKit 4.5.2`版本。

2. 安装DevKit

2.1 在后面安装一些gem native extension时需要DevKit，（比如更改默认的模板渲染器为rdiscount时），因此我们也先安好。你可以直接下载[DevKit-tdm-32-4.5.2-20111229-1559-sfx.exe](https://github.com/downloads/oneclick/rubyinstaller/DevKit-tdm-32-4.5.2-20111229-1559-sfx.exe)
，也可以去[RubyInstaller 下载地址](http://rubyinstaller.org/downloads/)选择其他版本。


2.2 下载后，双击解压，并选择一个目录来安装，比如（D:\DevKit）

2.3 接下来开始运行安装脚本：
* 在命令行中输入：`cd <你的DEVKIT安装目录>`定位到你的安装目录下
* 继续在命令行中输入`ruby dk.rb init`生成一个`config.yml`文件，这个文件在之后会使用到。输入`ruby dk.rb review`你可以看到你安装好的ruby会列出来（只有那些通过RubyInstaller包安装的才会被检测到）。 
* 编辑你的Devkit安装目录下生成的`config.yml`文件，一般情况下，你会发现你刚刚安装好的Ruby安装目录以及写好在里面了。如果没有，或者你想使用其他版本的，可以在这个文件内编辑改写（注意目录前要加横线和空格，比如:- C:/Ruby200）。
* 最后输入`ruby dk.rb install`完成安装。（如果失败，尝试在后面加上`--force`来强制更新下）



3. 安装Jekyll
前面两步的准备工作做好后，就可以开始安装Jekyll了。

安装Jekyll的最好方式是通过RubyGems：

	$ gem install jekyll

Jekyll依赖以下的gems模块：  fast-stemmer 、 classifier 、 directory_watcher 、 syntax 、 maruku 、 kramdown 、yajl-ruby、 posix-spawn 和 pygments.rb都会被自动安装。

4.更换Markdown渲染引擎为：RDiscount

Markdown的默认语言转换引擎是`Maruku`，但用过一段时间，我觉得那个不太好用，对中文支持不好，渲染速度慢，兼容性不够好等等很多毛病。所以你可以改用 RDiscount 取代 Maruku，只需确认安装：

	$ gem install rdiscount

单纯这样写很可能会安装不成功，我试过很多次，没有一次成功的。解决方案是在安装的时候添加版本号：

	$ gem install rdiscount -v=1.6.8 --platform=ruby

并通过以下命令行参数执行Jekyll：

	$ jekyll --rdiscount

或者最好是你站点下的 _config.yml 文件中加入以下配置，以便以后每次执行时不必再指定命令行参数：

	markdown: rdiscount

将github克隆到本地:
	git clone git@github.com:username/username.github.com.git 


GitHub使用Redcarpet作为Markdown的解析工具，并添加了额外的语法扩展。网址：http://github.github.com/github-flavored-markdown/

然后在`_config.yml`中
	markdown: rdiscount
改成
	markdown: redcarpet

	gem install  redcarpet

在C:\Ruby200-x64\lib\ruby\gems\2.0.0\gems\jekyll-0.12.1\lib\jekyll\converters\markdown.rb中
C:/RailsInstaller/Ruby1.9.3/lib/ruby/gems/1.9.1/gems/jekyll-0.11.2/lib/jekyll/converters/markdown.rb:91:in convert': undefined methodnew' for Redcarpet:Module (NoMethodError)

去ruby.rb 91行看

   Redcarpet.new(content, *@redcarpet_extensions).to_html
http://www.ruby-taiwan.org/topics/39
Redcarpet 的 render 實作改變 ( 1.0 -> 2.0 )

#Redcarpet.new(content, *@redcarpet_extensions).to_html
html_renderer = Redcarpet::Render::HTML.new({
    :autolink => true,
    :fenced_code_blocks => true, 
    :tables => true,
    :strikethrough => true,
    :lax_htmlblock => true,
    :no_intraemphasis => true
})
markdown = Redcarpet::Markdown.new(html_renderer)
content = markdown.render(content)





























