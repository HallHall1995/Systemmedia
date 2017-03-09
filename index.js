// JavaScript Document
//スマートフォンでメニューが開かれているか否か
//開かれていたらtrueそうでないならfalse
var nav_clicked = false;

$(function(){
	setup();
	resize();
	hover();
	nav_animate();
	mini_nav_animate();
	mini_nav_button_animate()
	request_movie();
});

$(window).resize(function(){
	resize();
});

function setup(){
	$(".rogo").fadeIn(8000);
    $('#back_movie').vide('movie/top_movie');
}


function resize(){//背景動画サイズ調整,画面サイズによりナビの背景を変化
	var h = $(window).height();
	press_marge(h);
	var window_w = $(window).width();
	var w = h / 9 * 16;
	var b_m = $("#back_movie");
	b_m.css("height",h);
	b_m.css("width",w);
	$(".movie_head").css("height",h);
	
	if(window_w<w){//動画の横幅が画面を飛び出た場合（スマホ）
		var box_out = ((w - window_w) / 2) *-1 ;
		b_m.css("margin-left",box_out);
		h = -1* h;
		b_m.css("margin-bottom",h);
	}else{//画面内に動画が収まる場合（PC）
		b_m.css("margin-left","0px");	
		b_m.css("width",window_w);
		var _h = window_w/ 16 * 9;
		b_m.css("height",_h);
		$(".movie_head").css("height",_h);
		_h = -1* _h;
		b_m.css("margin-bottom",_h);
	}
};


function press_marge(_height){//PRESS RELEASEの位置調整
	if ($(window).height() > 1100){
		var _h = _height - 300;
	} else if ($(window).height() > 800){
		var _h = _height - 500;
	} else {
		var _h = _height - 270;
	}
		var press_height = _h + "px";
		$(".press_release").css("margin-top", _h);
}

function hover(){//ナビゲーションのホバーイベント
	$(".menu_nav li a").hover(//ナビのマウスオーバー
		function () {//オンマウス時
			var w = $(".nav_text",this).css("width");
			$(".nav_block",this).animate(
				{width:w},100
			);
			$(".nav_text p",this).css("color","#FFFFFF");
  		},
  		function () {
    			$(".nav_block").animate(
				{width:"0px"},100
			);
			$(".nav_text p",this).css("color","#000000");
  		}
	);
}
		
function request_movie() { //こんなご要望にお応えしますの部分のムービー
	/*地域の方々に利用していただきやすい施設にしたい*/
	$('.request_movie_1').vide('movie/top_movie');
	$(".on_request_1").hover(function(){ //マウスオーバー
		$(".request_movie_1").animate({"opacity": 1}, 5000);
	},function(){ //マウスアウト
		$(".request_movie_1").stop();
		$(".request_movie_1").css("opacity",0);
	});
	
	/*保護者や中学生に、生徒のリアルな笑顔を伝えたい*/
	$('.request_movie_2').vide('movie/top_movie');
	$(".on_request_2").hover(function(){ //マウスオーバー
		$(".request_movie_2").animate({"opacity": 1}, 5000);
	},function(){ //マウスアウト
		$(".request_movie_2").stop();
		$(".request_movie_2").css("opacity",0);
	});
	
	/*商談で離れた農場の様子をお見せしたい*/
	$('.request_movie_3').vide('movie/top_movie');
	$(".on_request_3").hover(function(){ //マウスオーバー
		$(".request_movie_3").animate({"opacity": 1}, 5000);
	},function(){ //マウスアウト
		$(".request_movie_3").stop();
		$(".request_movie_3").css("opacity",0);
	});
	
	/*お客様に安心をお伝えしたい*/
	$('.request_movie_4').vide('movie/top_movie');
	$(".on_request_4").hover(function(){ //マウスオーバー
		$(".request_movie_4").animate({"opacity": 1}, 5000);
	},function(){ //マウスアウト
		$(".request_movie_4").stop();
		$(".request_movie_4").css("opacity",0);
	});	
}
		
function nav_animate(){  //ナビゲーションの出現や消失（隠れたり出たり）
	$(".in_nav").toggle(false);
	$(".menu_nav li").click(function(){
		$(".in_nav",this).animate( { height: 'toggle' }, 'fast' );
	});
	$(".over_in_nav").mouseout(function(){
		$(this).parent("li").children(".in_nav").toggle(false);
	});
	$(".menu_nav li").hover(function(){
		$(".in_nav").toggle(false);
	});
}

function mini_nav_animate() {
	$(".hide_menu").toggle(false);
	$(".open_menu").click(function(){
		$(this).parent("div").children(".hide_menu").animate({height:'toggle'}, 'fast' );	s
	})
}

function mini_nav_button_animate() { //スマートフォンのナビゲーション開閉ボタンの画像変化
	$(".mini_menu_info").toggle(false);
	$(".mini_menu_wrap a").click(function(){
		$(".mini_menu_info").animate({height: 'toggle'}, 'fast');
		$(".mini_menu_wrap").toggleClass("close");
	});	
}