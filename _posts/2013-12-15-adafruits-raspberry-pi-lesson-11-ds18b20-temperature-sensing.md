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

<img src="http://learn.adafruit.com/system/assets/assets/000/003/775/medium800/summary.jpg" alt="summary.jpg">

在本次教程中,你将学会如何使用通过树莓派来读取一个DS18B20温度传感器的度数. 由于树莓派没有ADC(模数转换器),因此它不能直接使用像TMP36那样的模拟温度传感器,而DS18B20则是一个很好的温度传感器的选择.

##所需设备
要开始本次项目,你需要下面这些配件:

<table class="editor-table">
      <tbody>
<tr>
<td class="3776-asset image-cell"><p class="row-fluid table-image"><a href="http://learn.adafruit.com/assets/3776"><img class="3776-asset" src="http://learn.adafruit.com/system/assets/assets/000/003/776/medium640/pi.jpg?1359394260" alt="pi.jpg"></a></p></td>
<td>树莓派</td>
</tr>
<tr>
<td class="3777-asset image-cell"><p class="row-fluid table-image"><a href="http://learn.adafruit.com/assets/3777"><img class="3777-asset" src="http://learn.adafruit.com/system/assets/assets/000/003/777/medium640/temp_probe.jpg?1359394309" alt="temp_probe.jpg"></a></p></td>
<td>
<p>DS18B20 数字温度传感器+附加设备,或者防水/高温版</p>
<p>一个 4.7K或10K的欧姆电阻</p>
</td>
</tr>
<tr>
<td class="3778-asset image-cell"><p class="row-fluid table-image"><a href="http://learn.adafruit.com/assets/3778"><img class="3778-asset" src="http://learn.adafruit.com/system/assets/assets/000/003/778/medium640/breadboard_half_web.jpg?1359394337" alt="breadboard_half_web.jpg"></a></p></td>
<td>面包板<br><br>
</td>
</tr>
<tr>
<td class="3779-asset image-cell"><p class="row-fluid table-image"><a href="http://learn.adafruit.com/assets/3779"><img class="3779-asset" src="http://learn.adafruit.com/system/assets/assets/000/003/779/medium640/jumpers_web.jpg?1359394357" alt="jumpers_web.jpg"></a></p></td>
<td>跳线包</td>
</tr>
<tr>
<td class="3780-asset image-cell"><p class="row-fluid table-image"><a href="http://learn.adafruit.com/assets/3780"><img class="3780-asset" src="http://learn.adafruit.com/system/assets/assets/000/003/780/medium640/cobbler.jpg?1359394371" alt="cobbler.jpg"></a></p></td>
<td>Pi Cobbler</td>
</tr>
</tbody>
        </table>


##你需要的
要为你的电脑准备一张SD卡,你需要:
一个内置SD读卡器的电脑或者一个附件的USB SD卡读卡器.本文的指导适用于Windows和Mac. 你也可以选择一个小型的microSD读/写卡器,它的速度非常快,但是需要配一个转SD的卡套.

<img src="http://learn.adafruit.com/system/assets/assets/000/002/854/medium800/ID939_LRG.jpg?1354550487" alt="ID939_LRG.jpg">

你的SD卡需要有至少4G的容量,保险起见的话,你可以选择那些被测过确定可以在树莓派使用的SD卡类型.

<img src="http://learn.adafruit.com/system/assets/assets/000/002/855/medium800/SD102_MED.jpg?1354550512" alt="SD102_MED.jpg">

##下载一个镜像文件
安装到SD卡中的操作系统必须在网上下载下来,通常来说是一个zip文件,可以被解压为.img的一个image文件.不管你下载的是哪一个image文件,实际的安装过程是一样的.
###选择你想用的操作系统
能够安装到树莓派的操作系统有很多,如果你是新手,那就用Linux发行版就好,如果是高端玩家了,大概也不会再这读我这篇菜鸟教程了吧.
###
There are a bewildering number of operating systems that you can install on your Raspberry Pi, if you are a beginner, then do not consider anything except one of the Linux distributions, and if you are an advanced user, then you probably won't be reading this anyway.
Choose your Distribution
Having decided you want to install Linux, that is not the end of the story. You now have to decide which distribution or 'distro' of Linux you want to install. Being an Open Source operating system, anyone can take one of the existing distributions an add things to it or configure it in a certain way before packaging it up as another distribution option for anyone to use. This is how the most common Raspberry Pi distribution 'Raspbian' came into existence. The 'Debian' distribution was configured and kitted out with useful things like IDLE (a python-programming language development editor) and Scratch (a learn-to-program gaming system) to make it suitable for the Pi. Adafruit have then taken Raspbian and configured it to make it as easy as possible to use the GPIO connector to attach DIY electronics to the Pi.
All of the Adafruit tutorials (and nearly every other tutorial online) will work with either so we suggest picking one of the two:
Raspbian – the Raspberry Pi recommended distribution, best for those that want the 'default standard' - nearly every Pi out there runs Raspbian http://www.raspberrypi.org/downloads
Occidentalis – Adafruit's version of Raspbian configured for hardware support. Best used by people who know they want to connect sensors, LEDs, buttons, servos, etc to their Pi http://learn.adafruit.com/adafruit-raspberry-pi-educational-linux-distro/
In fact, if like me, you decide to keep your documents on a separate USB Flash drive, it is no bad thing to buy two SD cards and try both.
In appearance, there is very little to choose from between the two. When it come to how it behaves, then 'Raspbian' is the more 'standard' distribution, but then Occidentalis is more electronics-hardware ready.
Having said that, both distributions are regularly updated and each will no doubt incorporate features found in the other.
Incidentally, the name Occidentalis come from the Latin name for the raspberry (Rubus Occidentalis).
So, having made your choice, download the zip or img file and if it is in a zip file unzip it onto the Desktop.


参考文档：
[Adafruit's Raspberry Pi Lesson 1. Preparing an SD Card for your Raspberry Pi]（http://learn.adafruit.com/adafruit-raspberry-pi-lesson-1-preparing-and-sd-card-for-your-raspberry-pi）
