// var animationData = require('../data/data.js')

$(document).ready(function(){

	var animData = {
    container: document.getElementById('container'),
    animType: 'svg',
    renderer: 'html',
    loop: false,
    autoplay: false,
    // path: 'https://raw.githubusercontent.com/rath-prak/Sproutmedia-test/master/js/data.json'
    // path: 'https://raw.githubusercontent.com/rath-prak/transition-test/master/data/data.json'
    animationData: animationData
    // path" JSON.parse(animationData)
   };
	var anim = bodymovin.loadAnimation(animData);


		$(function(){
			var bison = new Vivus('logo',{
			type: 'delayed',
			duration: 200,
			animTimingFunction: Vivus.EASE,
			}, fillLogo )

			var fillBackground = $('#logo'),
				tagLine = $('#tag-line'),
				tl = new TimelineMax(),
				logoWrapper = $('.logo-wrapper'),
				animateContainer = $('.animate-container'),
				introBody = $('.intro-body')

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
				}).to(logoWrapper, .25, {
					opacity: 0,
					delay: 2
				}).to(introBody, .25, {
					css: {
						visibility: 'visible'
					}
				}).to(animateContainer, 2, {
					css: {
						visibility: 'hidden'
					}
				})

			}	
		})// end of function

	setTimeout(function(){ anim.play(); }, 7000);



}); // of document ready function