$(document).ready(function(){

var animData = {
        container: document.getElementById('container'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'https://raw.githubusercontent.com/rath-prak/Sproutmedia-test/master/js/data.json'
    };
var anim = bodymovin.loadAnimation(animData);


// start animation 

$('.main-button').click(function(){
	anim.play();
	// $(this).css("color", "red")
	$(this).css({
		color: "#aaddd8",
		background: "#fff"
	})
})




}); 