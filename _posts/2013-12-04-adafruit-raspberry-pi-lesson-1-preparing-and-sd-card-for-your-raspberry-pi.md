---
layout: post
title: "Adafruit的树莓派第一课.准备一个SD卡"
description: ""
category: hardware 
tags: [Raspberry Pi]
---
{% include JB/setup %}

##概述

当你购买一个Raspberry Pi的，它可能附带也可能并没有附带一个SD卡。但SD卡一定是不可或缺的，因为它是Raspberry的操作系统所在,也是你存储文件和程序的地方. 

<img src="http://learn.adafruit.com/system/assets/assets/000/002/846/medium800/overview.jpg" alt="overview.jpg">
 
如果你的pi已经带有了一个安装了操作系统的SD卡,那我建议你将其升级到最新版本,因为操作系统功能的完善和bug的修复是在不断进行着的.由于将操作系统安装到SD卡上会清空卡上的所有内容,因此强烈建议将你自己的文档数据存在U盘里,这样每次你更新系统(SD卡被格式化时)的时候,就不需要再单独备份SD卡里的所有数据了.

如果你买的pi没有带一个SD卡,那么你至少应该购买一个4GB的SD卡,当然如果你觉得你需要更多空间的话你也可以买更大容量的.

本篇教程会向你展示如果为你的树莓派配置一个SD卡.

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
