$(function(){
	$(".screenList_1>li").click(function(){
		var index=$(this).prevAll().length;
		var title={
			oImg:["/hgImg/hg1.jpg","/hgImg/hg2.jpg","/hgImg/hg3.jpg","/hgImg/hg4.jpg","/hgImg/hg5.jpg","/hgImg/hg6.jpg","/hgImg/hg7.jpg","/hgImg/hg8.jpg","hgImg/hg9.jpg","hgImg/hg10.jpg",
	"/hgImg/hanguo1.jpg","/hgImg/hanguo2.jpg","/hgImg/hanguo3.jpg","/hgImg/hanguo4.jpg","/hgImg/hanguo5.jpg","/hgImg/hanguo6.jpg","/hgImg/hanguo7.jpg","hgImg/hanguo8.jpg","hgImg/hanguo9.jpg",
	"/hgImg/hanguo10.jpg"],
			theme:["深情告白","微光倾城","深情告白","微光倾城","深情告白","微光倾城","深情告白","微光倾城","深情告白","微光倾城"],
			english:["Light allure","Light allure","Light allure","Light allure","Light allure","Light allure","Light allure","Light allure","Light allure","Light allure"],
			date:["2016.10.07","2016.10.07","2016.10.07","2016.10.07","2016.10.07","2016.10.07","2016.10.07","2016.10.07","2016.10.07","2016.10.07"]
		};
		$(".styleTitle>h2").html($(this).text());
		$(".styleTitle>span").addClass("spanDisappear");
		$(".littleStyle").css({"marginLeft":"400px","top":"15px"});
		$(".caption").css({"display":"block"});
		$(".baseTitle").html($(this).text());
		switch(index){
			case 0:
				change(index);
				break;
			case 1:
				change(index);
				break;
		}
		function change(index){
			$(".styleImg img").each(function(i){
				console.log(i+"------");
				console.log(title.oImg[i+index*9]);
				$(this).prop({
					src:title.oImg[i+index*9]
				});
			});
			$(".styleImgTitle>a").each(function(i){
				console.log(i+"========");
				$(this).html(title.theme[i+index*9]+"<p>"+title.english[i+index*9]+"<span>"+title.date[i+index*9]+"</span>"+"</p>");
			});
		}
	});
});
// wrapper里的事件
+function(){
  var $prev=$(".prev");
  var $next=$(".next");
  var $lli=$(".box");
  var $back=$(".back");
  var $themeLi=$(".themeLi");
  var $wrapper=$(".wrapper");
  var len=$lli.length;
  var i=0;
  $next.on("click",function(){
          i++;
          change2(i);
          if(i>=len-1){
              i=-1;
          }
  });
  $prev.on("click",function(){
      if(i==0){
          i=7;
      }else{
          i--;
      }
      change2(i);
  });
  $themeLi.on("click",function(){
          index2=$(this).prevAll().length;
          i=index2;
          change2(index2);
  });
  function change2(num){
      $(".themeLi").eq(num).addClass("on").siblings().removeClass("on");
      $lli.eq(num).addClass("active").siblings().removeClass("active");;
  }
}();