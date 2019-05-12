
function draw(canvas_w,canvas_h,r) {
	var c = document.getElementById("cvs"); //初始化
	var ctx = c.getContext("2d");

	//第一个圆的左边距
	var left_margin=30;
	
	//第一个圆的圆心坐标
	var x = left_margin;	//与左边距相等
	var y = canvas_h/3*2;	// 三分之二的画布高度
	var radius = r; //圆的半径
	var startAngle = 0; //画圆的起始角度
	var endAngle = 2 * Math.PI; //画圆的结束角度

	//文字的属性变量
	var font_size = 12;	//文字大小
	var font_family = "微软雅黑"; //字体
	var font_color = "#34495e";	//文字颜色
	var tx = x - (font_size-5); //第一个圆的上方文字的水平位置(可保持文字位于圆心)
	var ty = y - 20; //第一个圆的上方文字的垂直位置
	var line_height = 20; //行间距
	
	
	var lists = [{
			"status": "0",
			"names": [{
					"name": "a1处置报告",
					"url": "https://www.baidu.com"
				},
				{
					"name": "a2立项报告",
					"url": "https://www.google.com"
				},
				{
					"name": "a3",
					"url": "https://www.taobao.com"
				}
			]
		},
		{
			"status": "1",
			"names": [{
					"name": "",
					"url": "https://www.baidu.com"
				},
				{
					"name": "",
					"url": "https://www.google.com"
				},
				{
					"name": "",
					"url": "https://www.taobao.com"
				}
			]
		},
		{
			"status": "2",
			"names": [{
					"name": "c1",
					"url": "https://www.baidu.com"
				},
				{
					"name": "c2",
					"url": "https://www.google.com"
				},
				{
					"name": "c3",
					"url": "https://www.taobao.com"
				}
			]
		},
		{
			"status":"2",
			"names":[{
				"name":"d1",
				"url": "https://www.baidu.com"
			},
			{
				"name": "d2",
				"url": "https://www.google.com"
			},
			{
				"name": "d3",
				"url": "https://www.taobao.com"
			}
			]
		}
		,
		{
			"status":"2",
			"names":[{
				"name":"d1",
				"url": "https://www.baidu.com"
			},
			{
				"name": "d2",
				"url": "https://www.google.com"
			},
			{
				"name": "d3",
				"url": "https://www.taobao.com"
			}
			]
		}
		,
		{
			"status":"2",
			"names":[{
				"name":"d1",
				"url": "https://www.baidu.com"
			},
			{
				"name": "d2",
				"url": "https://www.google.com"
			},
			{
				"name": "d3",
				"url": "https://www.taobao.com"
			}
			]
		}
		,
		{
			"status":"2",
			"names":[{
				"name":"d1",
				"url": "https://www.baidu.com"
			},
			{
				"name": "d2",
				"url": "https://www.google.com"
			},
			{
				"name": "d3",
				"url": "https://www.taobao.com"
			}
			]
		}
		,
		{
			"status":"2",
			"names":[{
				"name":"d1",
				"url": "https://www.baidu.com"
			},
			{
				"name": "d2",
				"url": "https://www.google.com"
			},
			{
				"name": "d3",
				"url": "https://www.taobao.com"
			}
			]
		}
		,
		{
			"status":"2",
			"names":[{
				"name":"d1",
				"url": "https://www.baidu.com"
			},
			{
				"name": "d2",
				"url": "https://www.google.com"
			},
			{
				"name": "d3",
				"url": "https://www.taobao.com"
			}
			]
		}
		,
		{
			"status":"2",
			"names":[{
				"name":"d1",
				"url": "https://www.baidu.com"
			},
			{
				"name": "d2",
				"url": "https://www.google.com"
			},
			{
				"name": "d3",
				"url": "https://www.taobao.com"
			}
			]
		}
		,
		{
			"status":"2",
			"names":[{
				"name":"d1",
				"url": "https://www.baidu.com"
			},
			{
				"name": "d2",
				"url": "https://www.google.com"
			},
			{
				"name": "d3",
				"url": "https://www.taobao.com"
			}
			]
		}

	];

	//用于存放文字四角坐标的对象数组，初始为空
	var position = [];
	
	//根据lists的长度决定间距
	var spacing = (canvas_w-left_margin)/lists.length;
	
	//循环遍历绘制图像
	for (var i = 0; i < lists.length; i++) {
		ctx.beginPath();
	
		ctx.arc(x, y, radius, startAngle, endAngle);
	
		//根据状态填色
		switch (lists[i].status) {
			case "0": //未完成-灰色
				ctx.fillStyle = "#95a5a6";
				break;
			case "1": //进行中-黄色
				ctx.fillStyle = "yellow";
				break;
			case "2": //已完成-绿色
				ctx.fillStyle = "#2ecc71";
				break;
		}
		ctx.fill();
	
		//画文字
		ctx.font = font_size+"px "+font_family;
		ctx.fillStyle = font_color;
	
		//临时变量temp_x和temp_y用于渲染文字位置
		for (var j = 0, temp_tx = tx, temp_ty = ty; j < lists[i].names.length; j++) {
			
			//将字符所在矩形的四边坐标存入对象数组
			position.push({
				x1: temp_tx,	//左
				y1: temp_ty - 10,	//上
				x2: temp_tx + (lists[i].names[j].name.length*10),	//右
				y2: temp_ty,	//下
				url: lists[i].names[j].url	//存入对应URL
			});
			
			ctx.fillText(lists[i].names[j].name, temp_tx, temp_ty);
			temp_ty -= line_height;
		}
	
		//画圆之间的连线
		if (i != lists.length - 1) {
			ctx.moveTo(x + radius, y); //起始位置
			ctx.lineTo(x + spacing - radius, y); //停止位置
		}
	
		ctx.stroke();
		x += spacing;
		tx += spacing;
	}
	
	//获取鼠标点击处的坐标
	function getEventPosition(ev) {
		var x, y;
		if (ev.layerX || ev.layerX == 0) {
			x = ev.layerX;
			y = ev.layerY;
		} else if (ev.offsetX || ev.offsetX == 0) { // Opera
			x = ev.offsetX;
			y = ev.offsetY;
		}
		return {
			x: x,
			y: y
		};
	}
	
	//监听事件
	cvs.addEventListener('click', function(e) {
		p = getEventPosition(e);	//p为一个坐标对象
	
		//遍历position数组，判断p的坐标是否在数组中，
		//若存在，则打开对应URL的窗口
		for (var i = 0; i < position.length; i++) {
			if (p.x <= position[i].x2 && p.x >= position[i].x1 && p.y <= position[i].y2 && p.y >= position[i].y1) {
				window.open(position[i].url);
			}
		}
	}, false);
	
}

//宽，高，园半径
draw(600,300,5);