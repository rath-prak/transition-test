var animData = {
        container: document.getElementById('container'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://raw.githubusercontent.com/rath-prak/Sproutmedia-test/master/js/data.json'
    };
    var anim = bodymovin.loadAnimation(animData);