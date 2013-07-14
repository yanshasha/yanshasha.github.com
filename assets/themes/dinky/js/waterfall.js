var t=0;//全局变量，重排开关。服务器能够给出图片宽高则不需要此项

var startH = 0; //加载元素的初始位置

var warpWidth = 220; //格子宽度

var margin = 14; //格子间距

var isAjax = 1; //ajax开关

var sumChild = 0; //记录当前总共有多少个格子

var h = []; //记录每列的高度

window.index = 0; //ajax参数 第几屏数据



function sortNew(el,newBox){

	var box = newBox;

	postPosition(el,box,"add");//执行定位函数

	for(var i = 0; i < box.length; i++) {

		box[i].style.visibility = "visible"; //定位完毕后显示新增节点

	}

	startH = h[0];

	isAjax=0;

	if( navigator.userAgent.indexOf("Firefox") > -1)

	{

		scroll(0,startH-700);//火狐滚动条问题，暂无好的解决办法，随便打个补丁先

	}

}

function sortAll(el,childTagName){

	h = []; //每次重排都要重置列高度记录数组

	var box = el.getElementsByTagName(childTagName);

	postPosition(el,box,"re");//执行定位函数

}



function postPosition(el,box,op){

	var minH = box[0].offsetHeight,

	boxW = box[0].offsetWidth+margin;

	n = document.documentElement.offsetWidth / boxW | 0; //计算页面能排下多少Pin

	el.style.width = n * boxW - margin + "px";

	el.style.visibility = "visible";

	for(var i = 0; i < box.length; i++) {//排序算法，有待完善

		boxh = box[i].offsetHeight; //获取每个Pin的高度

		if(i < n && op =="re" || (i < n && op =="add" && h.length<n)) { //第一行特殊处理

				h[i] = boxh;

				box[i].style.top = 0 + 'px';

				box[i].style.left = (i * boxW) + 'px';

				box[i].style.opacity = 1;

		} 

		else { 

				minH = Array.min(h); //取得各列累计高度最低的一列

				minKey = getarraykey(h, minH);

				h[minKey] += boxh+margin ; //加上新高度后更新高度值

				box[i].style.top = minH+margin + 'px';

				box[i].style.left = (minKey * boxW) + 'px';

				box[i].style.opacity = 1;

		}

	}

	maxH = Array.max(h); 

	maxKey = getarraykey(h, maxH);

	el.style.height = h[maxKey] +"px";

}



Array.min=function(array)

{

    return Math.min.apply(Math,array);

}

Array.max=function(array)

{

    return Math.max.apply(Math,array);

}

/* 返回数组中某一值的对应项数 */

function getarraykey(s, v) {

        for(k in s) {

                if(s[k] == v) {

                        return k;

                }

        }

}

function getNumber(){

	return Math.floor(document.documentElement.clientWidth/(warpWidth+14));

	//return 3;

}

//请求数据

function getMore(el,childClass){

	var n = getNumber();
	
	window.index++;

	el.className = "wrap";

	var xmlhttp=getXMLHttp();

	if(xmlhttp==null){alert("您的浏览器不支持Ajax!");return;};

	xmlhttp.onreadystatechange=stateChange;
	
	var url = "/assets/data/bar" + window.index + ".txt";
	
	xmlhttp.open("GET",url,true);

	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

	xmlhttp.send(null);

	function stateChange(){

	  if (xmlhttp.readyState==4 && xmlhttp.status==200)

		{

			m = xmlhttp.responseText;	

			changeJeson(el,m,childClass);//处理jeson

		}

	}

}

function changeJeson(el,json,childClass){

	var jsonString = json; // 获取服务器返回的json字符串

	var jsonObj = null;

	try {

		jsonObj = eval('(' + jsonString + ')'); // 将json字符串转换成对象

	} catch (ex) {

		return null;	

	}

	addList(el,jsonObj,childClass);//执行添加节点函数

}

function addList(el,jsonObj,childClass){

	var newBox = [];

	sumChild = sumChild+Number(jsonObj.images.length);

	for(var i=0;i<jsonObj.images.length;i++)

	{	

		var src = String(jsonObj.images[i].src);
		
		//params
		var place = String(jsonObj.images[i].place);

		//var width =String(jsonObj.images[i].width);

		//var height =String(jsonObj.images[i].height);

		//$id("aaa1").innerHTML =$id("aaa1").innerHTML + src+","
		
		//params
		imgReady("/assets/images/photos/"+src+".jpg",jsonObj.images.length , i , el , newBox , childClass , place,function () {

			var height = this.height;

			var src = this.src;

			var el = this.el;

			var newBox = this.newBox;

			var childClass = this.childClass;

			var i = this.i;

			var length = this.length;
			
			//params
			var place = this.place;

			callBackAdd(height, src , length, i ,el,newBox,childClass,place);

		});

	}

	//chackImg(el,newBox);

}


//params
function callBackAdd(height,src, length, i ,el,newBox,childClass,place){

	var div = document.createElement("div");

	div.className = childClass+" "+"popup_in"; //预留接口

	div.innerHTML =  "<p class='pic'><a href='#'><img src="+src+" style='height:"+height+"px'/></a></p><h3 class='tit'><span><a href='#'>"+place+"</a></span></h3>";

	div.style.top = startH +"px";

	div.style.opacity = 0;

	el.appendChild(div);

	newBox[i]=div;

	t++;

	if(t>length-1){

		sortNew(el,newBox);

		t=0;

	}

}



function chackImg(el,newBox){

	var imgs =[];

	imgs=el.getElementsByTagName("img");//只遍历新增图片

	for(i=sumChild;i<imgs.length;i++){

		//var img = new SImage(icall,el,imgs.length,imgs[i].src,newBox);

		

	}

}









/**

 * 图片头数据加载就绪事件 - 更快获取图片尺寸

 * @version	2011.05.27

 * @author	TangBin

 * @see		http://www.planeart.cn/?p=1121

 * @param	{String}	图片路径

 * @param	{Function}	尺寸就绪

 * @param	{Function}	加载完毕 (可选)

 * @param	{Function}	加载错误 (可选)

 */

var imgReady = (function () {

	var list = [], intervalId = null,



	// 用来执行队列

	tick = function () {

		var i = 0;

		for (; i < list.length; i++) {

			list[i].end ? list.splice(i--, 1) : list[i]();

		};

		!list.length && stop();

	},



	// 停止所有定时器队列

	stop = function () {

		clearInterval(intervalId);

		intervalId = null;

	};



	return function (url, length , i, el , newBox , childClass, place, ready, load, error) {

		var onready, width, height, newWidth, newHeight,

			img = new Image(), place;



		img.src = url;



		// 如果图片被缓存，则直接返回缓存数据

		if (img.complete) {

			//ready.call(img);

			//load && load.call(img);

			//return;

		};



		width = img.width;

		height = img.height;

		img.el = el ;

		img.newBox = newBox ;

		img.childClass = childClass ;

		img.i = i ;

		img.length = length ;
		
		//添加任何属性须在此添加
		//params
		img.place = place;

		//加载错误后的事件
		img.onerror = function () {

			error && error.call(img);

			onready.end = true;

			img = img.onload = img.onerror = null;

		};



		// 图片尺寸就绪

		onready = function () {

			newWidth = img.width;

			newHeight = img.height;

			if (newWidth !== width || newHeight !== height ||

				// 如果图片已经在其他地方加载可使用面积检测

				newWidth * newHeight > 1024

			) {

				//alert(ready)

				ready.call(img);

				onready.end = true;

			};

		};

		//onready();



		// 完全加载完毕的事件

		img.onload = function () {

			// onload在定时器时间差范围内可能比onready快

			// 这里进行检查并保证onready优先执行

			!onready.end && onready();



			load && load.call(img);



			// IE gif动画会循环执行onload，置空onload即可

			img = img.onload = img.onerror = null;

		};



		// 加入队列中定期执行

		if (!onready.end) {

			list.push(onready);

			// 无论何时只允许出现一个定时器，减少浏览器性能损耗

			if (intervalId === null) intervalId = setInterval(tick, 40);

		};

	};

})();




$(document).ready(function(){
	window.scroll(0,0);
	getMore($id("wrap"),"mode");
	
	$(document).live('keydown',function(e){
		if(e.keyCode == 116){
			$(window).scrollTop(0);
		}
	});
});


var re;

var so;

window.onresize = function() {

	clearTimeout(re);

	re = setTimeout(resize,100);				

}



function resize(){

	$id("wrap").className = "wrap active";

	sortAll($id("wrap"),"div");

}



window.onscroll = function(){

	var a=document.body.scrollHeight;

	var b=document.documentElement.clientHeight;

	var c=document.documentElement.scrollTop + document.body.scrollTop;

	if((c+b+100>=a)&&isAjax==0){

		isAjax=1;
		if(window.index<10){
			getMore($id("wrap"),"mode");
		}
	} 



	else {return}

} 