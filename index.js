$(document).ready(function(){
    $(".toggleMenu").slideUp(1);
})
$(".fa-bars").click(function(){
    $(".toggleMenu").slideToggle();
})


$(".firstBox").click(function(){
    $(".firstBox").addClass("boxActive");
    $(".secondBox").removeClass("boxActive");
    $(".thirdBox").removeClass("boxActive");
})

$(".secondBox").click(function(){
    $(".secondBox").addClass("boxActive");
    $(".firstBox").removeClass("boxActive");
    $(".thirdBox").removeClass("boxActive");
})

$(".thirdBox").click(function(){
    $(".thirdBox").addClass("boxActive");
    $(".firstBox").removeClass("boxActive");
    $(".secondBox").removeClass("boxActive");
})