---
layout: post
title: "Adafruit的树莓派第11课.使用 DS18B20温度传感器"
description: ""
category: hardware 
tags: [Raspberry Pi]
---
{% include JB/setup %}

##概述

树莓派的Occidentalis Linux发行版(以及从2012年12月开始)开始支持了DS18B20单总线温度传感器.这些传感器是类晶体管的三引脚包,是精确的数字设备.

<img width="521" height="509" src="http://learn.adafruit.com/system/assets/assets/000/003/775/medium800/summary.jpg" alt="summary.jpg">

在本次教程中,你将学会如何使用通过树莓派来读取一个DS18B20温度传感器的度数. 由于树莓派没有ADC(模数转换器),因此它不能直接使用像TMP36那样的模拟温度传感器,而DS18B20则是一个很好的温度传感器的选择.

##所需设备
要开始本次项目,你需要下面这些配件:

<table class="editor-table">
      <tbody>
<tr>
<td class="3776-asset image-cell"><p class="row-fluid table-image"><a href="http://learn.adafruit.com/assets/3776"><img class="3776-asset" src="http://learn.adafruit.com/system/assets/assets/000/003/776/medium640/pi.jpg?1359394260" alt="pi.jpg" width="337" height="213"></a></p></td>
<td>树莓派</td>
</tr>
<tr>
<td class="3777-asset image-cell"><p class="row-fluid table-image"><a href="http://learn.adafruit.com/assets/3777"><img class="3777-asset" src="http://learn.adafruit.com/system/assets/assets/000/003/777/medium640/temp_probe.jpg?1359394309" alt="temp_probe.jpg" width="337" height="274"></a></p></td>
<td>
<p>DS18B20 数字温度传感器+附加设备,或者防水/高温版</p>
<p>一个 4.7K或10K的欧姆电阻</p>
</td>
</tr>
<tr>
<td class="3778-asset image-cell"><p class="row-fluid table-image"><a href="http://learn.adafruit.com/assets/3778"><img class="3778-asset" src="http://learn.adafruit.com/system/assets/assets/000/003/778/medium640/breadboard_half_web.jpg?1359394337" alt="breadboard_half_web.jpg" width="337" height="232"></a></p></td>
<td>面包板<br><br>
</td>
</tr>
<tr>
<td class="3779-asset image-cell"><p class="row-fluid table-image"><a href="http://learn.adafruit.com/assets/3779"><img class="3779-asset" src="http://learn.adafruit.com/system/assets/assets/000/003/779/medium640/jumpers_web.jpg?1359394357" alt="jumpers_web.jpg" width="337" height="239"></a></p></td>
<td>跳线包</td>
</tr>
<tr>
<td class="3780-asset image-cell"><p class="row-fluid table-image"><a href="http://learn.adafruit.com/assets/3780"><img class="3780-asset" src="http://learn.adafruit.com/system/assets/assets/000/003/780/medium640/cobbler.jpg?1359394371" alt="cobbler.jpg" width="133" height="102"></a></p></td>
<td>Pi Cobbler</td>
</tr>
</tbody>
        </table>


##硬件

DS18B20的面包板布线图如下:
与其他传感器不同,DS18B20"1-wire"传感器可以被并行连接.所有的传感器需要使用相同的引脚,但是你只需为它们准备一个4.7K的电阻就可以实现这个目标,电阻可以维持数据传输的稳定.
一定要以正确的方式来连接DS18B20,如下图所示,它 的弯角应该向左.如果放犯了,它就可能会变热烧掉.

Note:尽管同样是温度传感器,DS18B20和TMP36是完全不一样的,本教材不适用于TMP36.

<img class="3781-asset" src="http://learn.adafruit.com/system/assets/assets/000/003/781/medium800/breadboard-ic.png?1359394493" width="521" height="835" alt="breadboard-ic.png">

如果你使用的是防水版的DS18B20,那么设备会有三根引线:红线,黑线和黄线.那根裸铜线不需要连接.
如果你使用的是"高温"版的DS18B20,将橙色条纹线连接到3.3V,白线接地,蓝条纹线接数据,引脚#4.在数据与3.3V电压间,你还需要一个4.7K~10K的电阻.

<a href="http://learn.adafruit.com/assets/3782">
            <img class="3782-asset" src="http://learn.adafruit.com/system/assets/assets/000/003/782/medium800/breadboard-probe.png?1359394521" width="521" height="650" alt="breadboard-probe.png">
</a>

<a href="http://learn.adafruit.com/assets/3783">
            <img class="3783-asset" src="http://learn.adafruit.com/system/assets/assets/000/003/783/medium800/project_probe.jpg?1359394607" width="521" height="490" alt="project_probe.jpg">
</a>



##DS18B20
尽管DS18B20看起来就像一个普通的晶体管,但其实里面还是有不少需要知道的东西.
该芯片包括一个特殊的单线串行接口,逻辑控制模块以及温度传感器本身.
它的输出引脚发送数字信息,而Raspbian/Occidentalis则拥有一个可以读取这些信息的接口.你可以在命令行或者通过SSH来实验.
在终端窗口输入以下命令,当你处于"devices"目录时,以"28-"开头的目录也许与下图看到的不一样,不管是啥,cd进入到你看到的存在目录就行.

	sudo modprobe w1-gpio
	sudo modprobe w1-therm
	cd /sys/bus/w1/devices
	ls
	cd 28-xxxx (change this to match what serial number pops up)
	cat w1_slave

<a href="http://learn.adafruit.com/assets/3783/assets/3784">
            <img class="3784-asset" src="http://learn.adafruit.com/assets/3783/system/assets/assets/000/003/784/medium800/modprobe.png?1359394795" alt="modprobe.png">
</a>

这个接口并不完全可靠,但是幸运的是它能告诉我们是否存在一个有效的温度来读取.它就像一个文件一样,我们要做的就是去读取.
在第一行末尾的相应值要么是YES要么是NO.如果是YES,那么温度会以1/1000摄氏度的形式显示在第二行的末尾.也就是说,在上面的例子里,两次读到的温度分别为20.687 和26.125摄氏度.

如果你连接了不只一个传感器,那你会看到很多类似`28-xxx`形式的文件.每个都拥有的唯一的序列号,因此你需要先一次连一个来记住这些序列号对应的具体是哪个传感器.

##软件
下面这段Python代码处理了所有的失败信息,并且每秒都以C和F为单位报告温度.

	import os
	import glob
	import time
	
	os.system('modprobe w1-gpio')
	os.system('modprobe w1-therm')
	
	base_dir = '/sys/bus/w1/devices/'
	device_folder = glob.glob(base_dir + '28*')[0]
	device_file = device_folder + '/w1_slave'
	
	def read_temp_raw():
	    f = open(device_file, 'r')
	    lines = f.readlines()
	    f.close()
	    return lines
	
	def read_temp():
	    lines = read_temp_raw()
	    while lines[0].strip()[-3:] != 'YES':
	        time.sleep(0.2)
	        lines = read_temp_raw()
	    equals_pos = lines[1].find('t=')
	    if equals_pos != -1:
	        temp_string = lines[1][equals_pos+2:]
	        temp_c = float(temp_string) / 1000.0
	        temp_f = temp_c * 9.0 / 5.0 + 32.0
	        return temp_c, temp_f
		
	while True:
		print(read_temp())	
		time.sleep(1)
		
这段程序首先以 'modprobe'命令开启接口.

接下来的三行,找到那些信息可以被读到的文件.

如果你在使用树莓派来读取温度文件时,遇到偶尔被挂起的情况,试着替换把函数read_temp_raw 替换为以下代码.另外,你还需要在文件顶部增加一行'import subprocess'.

	def read_temp_raw():
		catdata = subprocess.Popen(['cat',device_file], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
		out,err = catdata.communicate()
		out_decode = out.decode('utf-8')
		lines = out_decode.split('\n')
		return lines
	
有两个函数都读取温度信息,read_temp_raw 仅仅是从接口里拿到那两行信息.而函数read_temp 则还包括了检查错误信息以及不断重试,直到得到首行末尾为 'YES'的信息.这个函数将返回两个值,第一个值是以C为单位的温度值,第二个是以F为单位.

如果你希望分开这两个数据,你可以按照下例所示来做:

	deg_c, deg_f = read_temp()


这段程序会不断重复的读取并打印出温度值,然后休眠一秒再继续循环.

你可以通过SSH连接到派,在编辑窗口中粘贴下面这行代码,CTRL-x 和 Y保存文件,以此将程序上传到你的树莓派里去:

	nano thermometer.py
	
<a href="http://learn.adafruit.com/assets/3785">
<img class="3785-asset" src="http://learn.adafruit.com/system/assets/assets/000/003/785/medium800/ssh_edior.png?1359394951" alt="ssh_edior.png" width="521" height="332">
</a>

##配置并测试

这段程序必须以超级用户的身份运行,因此请在终端敲入下面的命令来开启:

	sudo python thermometer.py

如果一切ok,你将会看到一串类似下图所示的读数:

<a href="http://learn.adafruit.com/assets/3786">
<img class="3786-asset" src="http://learn.adafruit.com/system/assets/assets/000/003/786/medium800/readings.png?1359395011" alt="readings.png" width="521" height="329">
</a>

试着把你的手指放到传感器的上面来提高它的温度.

##增加更多的传感器
你可以同时添加其他的DS18B20传感器,一次连接所有传感器的VCC,数据和接地引脚.使用一个4.7K的电阻.你将看到很多的/sys/bus/w1/devices/28-nnnnn目录,每个都拥有特殊的序列号作为目录名.这段python实例代码仅仅适用于一个传感器,因此如果你想同时从其他的不同传感器来读数,你就得自己去修改调整代码了.


参考文档：
[Adafruit's Raspberry Pi Lesson 1. Preparing an SD Card for your Raspberry Pi]（http://learn.adafruit.com/adafruit-raspberry-pi-lesson-1-preparing-and-sd-card-for-your-raspberry-pi）
