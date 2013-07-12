---
layout: post
title: "利用mtc_sahi_client进行web app自动化测试"
description: ""
category: webApp
tags: [mobile]
---
{% include JB/setup %}


随着web app的流行，我们逐渐将网页开发的一部分重心由web端转移到了移动端。在移动端开发的页面一般内容比较简单，基于webkit的开发确实很美好。但移动端网页开发也有它让人愁苦的一面，那就是各种不同的终端，浏览器，分辨率导致的兼容性问题。在web上，尽管浏览器（主要是ie家族）的兼容很麻烦，但那无非也是和浏览器相关而已。而在移动端，可能同款浏览器搭配着不同分辨率或者系统版本都会有不同的表现。这不仅苦了我们这些开发者，也苦了咱们的测试人员。
于是我在想，如果有这么一个工具，可以自动的进行移动端页面的测试，我们就可以不用拿着一个个手机去一个个浏览器的下载，访问，回归功能了。
庆幸的是，确实有这么个东西，那就是MTC（ http://mtc.baidu.com/mtc/?pname=webappcreate ），这是输入线上链接来进行自动测试。但是如果希望灵活的按我们的需求来在开发机测试，就需要自己编写case咯。
本文我主要介绍怎么利用MTC webapp_client windows客户端编写测试用例并发布测试，查看测试结果。整个过程非常简单，我参考了wiki上已有的教程，并为每一步都添加了截图，相信看完这篇傻瓜式教程，大家都可以很快学会web app的自动化测试过程。

##MTC webapp_client windows客户端下载：
mtc_sahi_client.rar
`文件地址 : http://pan.baidu.com/share/link?shareid=342586&uk=1680700382 

提取密码 : 4673`

##一、初始化和设置：
1. 将mtc_sahi_client.rar随意解压到一个目录（注意路径名不要包含中文） 
2. 进入eclipse目录，启动eclipse.exe
3. 进入Window > Preferences > General > Workspace，设置Text file encoding为 Other: UTF-8
4. 进入Window > Preferences > Sahi，设置Sahi Settings：
1）Python Path设置为python.exe所在路径，注意要事先安装python（2.7.3或以上版本）
2）Sahi Home Dir设置为压缩路径下的sahi目录
3）Local Runner Path设置为压缩路径下的sahi\userdata\bin\localrunner.bat
4）MTC Runner Path设置为压缩路径下的sahi\userdata\bin\webapp_client.py
 

##二、编写测试用例
1. 通过File > New > Sahi Project新建一个sahi测试工程，会默认生成webapp_include.sah和webapp_conf.sah，用于本地调试
 
2. 在已经新建的sahi测试工程目录下，新建Sahi Source File，后缀名为.sah。我在这里新建了一个welcome.sah，用来实现网盘wap从欢迎页登录的过程。
 
3. 编辑case
/**
 * @case welcome.sah
 * @author yanshasha 
 */
_include("webapp_conf.sah")//云测试需要用到的环境配置文件，每个case头都要加上
_include("webapp_include.sah")//云测试截图和等待页面加载完毕函数所在文件，每个case头都要加上

_navigateTo("http://dbl-rc-chunlei12.vm.baidu.com:8080/wap/welcome")//访问页面 http://dbl-rc-chunlei12.vm.baidu.com:8080/wap/welcome

_waitWindowsLoaded() //等待页面资源加载完毕

_wait(3000) //等待3秒浏览器渲染完毕

_screenshot("0.png") //将当前屏幕截图保存为0.png

_click(_link("登录")) //点击"登录"，此时会跳转到passport的登录界面去

_wait(10000) //等待10秒

_screenshot("1.png") //截图 1.png

_setValue(_textbox("username"), "yanshasha1@126.com") //在输入框输入用户名

_setValue(_password("password"), "ysstest") //在密码框输入密码

_click(_submit("登录")) //点击"登录"，此时完成登录过程跳转到文件列表页

_wait(20000) //考虑到网速快慢等问题，等待20秒

_screenshot("2.png") //截图 1.png


具体case的写法可以参考http://sahi.co.in/w/all-apis 以及下面的新增API(MTC基于Sahi所新增的API)。case写起来上手很快的~
Case API
说明
使用样例

_touch(element)	触摸页面上的某元素，暂支持div标签和li标签	_touch(_div("se_bn"))
_screenshot(picturename)	iOS/Android浏览器当前界面截图，暂仅支持png格式	_screenshot('0.png')
_waitWindowsLoaded()	等待当前页面资源加载完毕，以页面onload事件发生作为截止点，通常从onload事件发生到最终页面渲染完毕，经验上还需要1-3秒的时间不等	_waitWindowsLoaded()
_scrollTo(element)	让当前屏幕跳到页面中指定元素所在的位置	_scrollTo(_div("footer"))
_scrollToXY(x, y)	让当前屏幕跳到页面中具体坐标，x是宽度坐标，y是高度坐标	_scrollTo(_xy(_div("footer"))[0], _xy(_div("footer"))[1])

##三、本地执行测试用例
1. 通过点击toolbar上的“Start Sahi”，或点击menu > Sahi > “Start Sahi”，启动本地的Sahi server，Console下会打印出启动信息。（注意在本地执行测试用例前，一定要先开启Sahi server，不然会报出异常：Connection refused：connect。）
 
2. 右键Sahi Source File， Run as > Sahi Test Case，case执行结果会根据时间生成到sahi\userdata\log\playback目录下。在这里可以检查自己的执行结果有没有错误。
 
3. Sahi server可以通过点击toolbar上的“Stop Sahi”，或点击menu > Sahi > “Stop Sahi”进行，或通过windows的任务管理器关闭，进程名叫java.exe. 在退出eclipse前最好关闭Sahi server，不然再启动就会因端口占用而启动失败，这时候只能通过windows任务管理器杀Sahi server进程了
 

##四、提交MTC执行测试用例
1. 右键Sahi Source File， Run as > MTC Test Case
 
2. 修改Test Condition参数以指定测试执行条件，默认为全部条件。如果你希望自定义条件，
格式为：
D:\soft\mtc_sahi_client\sahi\userdata\bin\webapp_client.py --config=[config_path] --test_type=[test_type] --case_path=[case_path] --result_path=[result_path] --test_url=[test_url] --groups=[groups]
其中：  
	[config_path] D:\soft\mtc_sahi_client\sahi\userdata\bin\webapp_client.py所使用的配置文件，如不指定，则使用与D:\soft\mtc_sahi_client\sahi\userdata\bin\webapp_client.py同目录下的D:\soft\mtc_sahi_client\sahi\userdata\bin\webapp_client.py.conf作为缺省配置文件。如该文件不存在，将自动生成一份供您修改的配置模版
	[test_type] 您所提交的测试类型，目前仅支持traveler(遍历测试)和custom(自定义case)，一般统一写成custom，表示自定义case   
	[case_path] 当您指定了test_type=custom时，此字段必须指定为您提交的测试用例文件路径，此文件应是一个.sah文件，用于测试您的WebApp，脚本将此文件提交到MTC(mtc.baidu.com)的WebApp测试列表，帮助您在不同的Android(iOS)版本x分辨率x浏览器组合下测试您的WebApp功能和兼容性  
	[result_path] 测试结果存放路径，如果不存在，会为您在本地生成它，并将测试执行结果(测试报告/测试截图/运行日志)放到该目录下
	[test_url] 指定待测试的URL。这样你在case里可以不用_navigateTo了。当然如果在页面里写了_navigateTo，这个test_url也可以指定为任意的一个url。
	[groups] 是一个json串，用于描述测试条件，或指定成all选中所有测试条件，详情请参考下表：

操作系统
分辨率
浏览器

android 2.3.7	240x320 
320x480 
480x800 
480x320（横屏） 
480x854	System（系统自带浏览器） 
QQ 3.4 
QQ 3.5 
QQ 4.0 
UC 8.5.2 
UC 8.7.0
android 4.0.2	320x480 
480x800 
540x960 
480x320（横屏） 
480x854 
720x1280 
800x1280	System（系统自带浏览器） 
QQ 3.4 
QQ 3.5 
QQ 4.0 
UC 8.5.2 
UC 8.7.0 
Baidu 2.2 
Baidu 2.3 
Baidu 2.4
android 4.1	320x480 
480x800 
540x960 
480x320（横屏） 
480x854 
720x1280 
800x1280	System（系统自带浏览器） 
QQ 3.4 
QQ 3.5 
QQ 4.0 
UC 8.5.2 
UC 8.7.0 
Baidu 2.2 
Baidu 2.3 
Baidu 2.4
iOS 6.0 iPhone	320x480 
640x960 
640x1136	Safari
iOS 6.0 iPad	768x1024 
1536x2048	Safari
iOS 5.0 iPhone	320x480 
640x960	Safari
iOS 5.0 iPad	768x1024	Safari
iOS 5.1 iPhone	320x480 
640x960	Safari
iOS 5.1 iPad	768x1024 
1536x2048	
应用举例:  
--test_type=custom --test_url=http://dbl-rc-chunlei12.vm.baidu.com:8080/wap/welcome --groups=[{\"os\":\"iOS 5.0 iPhone\",\"resolution\":\"640x960\",\"browser\":\"Safari\"}]
   
一般来说，修改[test_url]和[groups]就可以了。


3. 执行测试，测试结果最终将下载到当前Sahi Project下的result目录，刷新（F5）一下Sahi Project即可看到。
 

也可以通过进入mtc.baidu.com，用账户：mtctest ，密码：a123456登录。在我的MTC >Web App测试列表找到自己对应的测试URL，通过查看测试（报告/详情）来查看测试结果。如下图，就是我跑出来的测试截图啦，还不错吧：
 

后记
刚刚学会这个工具的用法，写了个简单的登录测试用例。虽然现在这个工具跑起来速度不算快，有时候也会偶尔崩溃一下，但是基本来说还是比较稳定的。对于一些基本的功能回归以及兼容性测试，利用这个工具，就可以轻松的喝着果汁坐等测试结果啦。
工欲善其事必先利器，好的工具能让咱们事半功倍，这样才有更多的时间来enjoy life哇~ 希望这篇入门教程对你有所帮助喔~   



参考:
1. [怎样使用Sahi书写测试用例](http://sahi.co.in/w/sahi-scripting-basics) 
2. [Sahi API](http://sahi.co.in/w/all-apis) 
3. [MTC扩展API(针对移动设备测试需求)](http://wiki.babel.baidu.com/twiki/bin/view/Com/Mtc/MTC_WEBAPP_AUTOMATION_MANUAL) 












