var wrapper = document.getElementById("wrapper");
var more=document.getElementsByClassName("moreA");
var title=document.getElementById("Daotitle");
var theme=document.getElementById("Daotheme");
var style=document.getElementById("Daostyle");
var txt=document.getElementById("Daotxt");
var DaoImg=document.getElementsByClassName("DaoImg");
var DaoImg2=document.getElementsByClassName("daoimg");
var back=document.getElementsByClassName("back")[0];
$$.addHandler(back,"click",function(){
    wrapper.classList.remove("show");
});
var len=more.length;
for(var i=0;i<len;i++){
    more[i].index=i;
    more[i].onclick=function(){
        wrapper.classList.add("show");
        var id=this.index;
        //发送ajax请求
        $$.ajax('post',"/styleDisplay/theme?id="+id,function(result){
            var json = JSON.parse(result);
            title.innerHTML=json.title;
            theme.innerHTML=json.theme;
            style.innerHTML=json.style;
            txt.innerHTML=json.txt;
            var a=json.img.split(",");
            for(var j=0;j<a.length;j++){
                DaoImg[j].src=a[j];
                DaoImg2[j].src=a[j];
            }
        });
    }
}