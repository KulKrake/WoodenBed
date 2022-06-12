$('.owl-carousel').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:1,
    margin:10,
    stagePadding:30,
    smartSpeed:450
});
function gamochena(){
    document.getElementById("chatcontainer").style.display = "block";
}
function chaweva(){
    document.getElementById("chatcontainer").style.display = "none";
}
function faq1(){
    var text = document.getElementById ("faq1");
    var showarea = document.getElementById ("message");
    showarea.innerHTML = text.innerHTML;
}
function faq2(){
    var text = document.getElementById ("faq2");
    var showarea = document.getElementById ("message");
    showarea.innerHTML = text.innerHTML;
}
function faq3(){
    var text = document.getElementById ("faq3");
    var showarea = document.getElementById ("message");
    showarea.innerHTML = text.innerHTML;
}