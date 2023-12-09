document.addEventListener('DOMContentLoaded', function(){
    // Header JavaScript
    document.getElementById('hamburger').addEventListener('click', function(){
        this.style.display = 'none';
        var hamcross = document.getElementById('hamcross');
        hamcross.style.display = 'block';
        hamcross.classList.add('fade');
        setTimeout(function(){ hamcross.classList.remove('fade'); }, 500);
        document.querySelector('.side-menu').classList.toggle('visible');
        document.querySelector('.header-container').classList.add('tpu');
    });

    document.getElementById('hamcross').addEventListener('click', function(){
        this.style.display = 'none';
        var hamburger = document.getElementById('hamburger');
        hamburger.style.display = 'block';
        hamburger.classList.add('fade');
        setTimeout(function(){ hamburger.classList.remove('fade'); }, 500);
        document.querySelector('.side-menu').classList.toggle('visible');
        if (window.scrollY <= 125 && !document.querySelector('.side-menu').classList.contains('visible')) {
            document.querySelector('.header-container').classList.remove('tpu');
        }
    });

    window.addEventListener('resize', function(){
        if (window.innerWidth > 860) {
            document.querySelector('.side-menu').classList.remove('visible');
            document.getElementById('hamcross').style.display = 'none';
            document.getElementById('hamburger').style.display = 'none';
        } else if (window.innerWidth <= 860) {
            if (document.querySelector('.side-menu').classList.contains('visible')) {
                document.getElementById('hamcross').style.display = 'block';
                document.getElementById('hamburger').style.display = 'none';
            } else {
                document.getElementById('hamburger').style.display = 'block';
                document.getElementById('hamcross').style.display = 'none';
            }
        }
    });

    window.addEventListener('scroll', function(){
        if (window.scrollY > 125) {
            document.querySelector('.header-container').classList.add('tpu');
        } else if (window.scrollY <= 125 && !document.querySelector('.side-menu').classList.contains('visible')) {
            document.querySelector('.header-container').classList.remove('tpu');
        }
    });
    
    // Video JavaScript
    function handleVideoEnd() {
        try {
            var video = document.querySelector('.vb-content');
            var poster = document.querySelector('#video-poster');
            video.loop = false;
            video.addEventListener('ended', function() {
                poster.style.display = 'block';
            });
        } catch (error) {
            console.error('An error occurred in handleVideoEnd:', error);
            console.error('I know this is a bad way to handle errors, but I\'m still learning.');
        }
    }
    handleVideoEnd();;

    // Product View JavaScript
    const smallImages = document.querySelectorAll('.p-small-image');
    const mainImage = document.getElementById('p-main-image');

    function changeMainImage(image) {
        mainImage.src = image.src;
    }
    smallImages.forEach(image => {
        image.addEventListener('click', () => {
            smallImages.forEach(img => img.classList.remove('active'));
            image.classList.add('active');
            changeMainImage(image);
        });
    });
    if (smallImages.length > 0) {
        smallImages[0].classList.add('active');
    }
    // Scroll Mouse Click JavaScript
    document.getElementById('scroller').addEventListener('click', function(){
        document.getElementById('mouse-target').style.display = 'block';
        document.getElementById('mouse-target').scrollIntoView({behavior: "smooth"});
    });
});