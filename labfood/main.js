var images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSA-cwbOwvgzqb6zCz7Gx1ObyQsGq6RfdFvg&usqp=CAU",
    "https://www.tony60533.com/wp-content/uploads/pixnet/1445179278-140725104.jpg",
    "https://foodpicks.tw/wp-content/uploads/2019-11-03_114250.jpg",
    "image/pizza.jpg"
];

$(function(){
    //確認能夠知道使用者按了按鈕
    //$("input") => document.getElementsByTagname("input")[0]
    //on => addEventListener
    $("input").on("click",function(){
       //   alert("Hi");
       var numberOfListItem = $("#choices li").length;
       // 0 ~ 1 * 3 => 0 ~ 3(2.9999x) => floor => 0, 1, 2
       var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
       $("h1").text($("#choices li").eq(randomChildNumber).text());
       $("img").attr("src",images[randomChildNumber]);
    });
 });