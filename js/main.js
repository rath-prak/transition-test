$(document).ready(function(){

	var animData = {
    container: document.getElementById('container'),
    animType: 'svg',
    renderer: 'html',
    loop: false,
    autoplay: false,
    // path: 'https://raw.githubusercontent.com/rath-prak/Sproutmedia-test/master/js/data.json'
    path: 'https://raw.githubusercontent.com/rath-prak/transition-test/master/data/data.json'
   };
	var anim = bodymovin.loadAnimation(animData);

		$(function(){
			var bison = new Vivus('logo',{
			type: 'delayed',
			duration: 200,
			animTimingFunction: Vivus.EASE,
			}, fillLogo )

			var fillBackground = $('#logo')
			var tagLine = $('#tag-line')
			var tl = new TimelineMax();

			function fillLogo(){
				tl.to(fillBackground, 2, {
				css: {
					fill : '#fff'
				}, 
				ease: Bounce.easeOut
			}).to(tagLine, 1, {
				css: {
					fill : '#fff'
				},
				ease: Bounce.easeOut
				})
			}	
		})// end of function

	setTimeout(function(){ anim.play(); }, 7000);



}); // of document ready function