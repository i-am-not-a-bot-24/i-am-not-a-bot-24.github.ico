const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const menu_btn = document.querySelector('.menu-btn');
const slider = document.querySelector('.slides');
let sliderSection = document.querySelectorAll('.slide');
let sliderSectionLast = sliderSection[sliderSection.length -1];
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');

    window.addEventListener('scroll', function(){
        nav.classList.toggle('active', window.scrollY >0)
    });

    menu_btn.addEventListener('click', () => {
        menu.classList.toggle('active')
    });

    slider.insertAdjacentElement('afterbegin', sliderSectionLast);

    function next(){
        let sliderSectionFirst = document.querySelectorAll('.slide')[0];
        slider.style.marginLeft= "-200%";
        slider.style.transition= "all 0.5s";
        setTimeout(function(){
            slider.style.transition= "none";
            slider.insertAdjacentElement('beforeend', sliderSectionFirst);
            slider.style.marginLeft= "-100%";
        }, 500);
    }

    function prev(){
        let sliderSection = document.querySelectorAll('.slide');
        let sliderSectionLast = sliderSection[sliderSection.length -1];
        slider.style.marginLeft= "0%";
        slider.style.transition= "all 0.5s";
        setTimeout(function(){
            slider.style.transition= "none";
            slider.insertAdjacentElement('afterbegin', sliderSectionLast);
            slider.style.marginLeft= "-100%";
        }, 500);
    }

    btnRight.addEventListener('click', function(){
        next();
    });

    btnLeft.addEventListener('click', function(){
        prev();
    });

    setInterval(function() {
        next();
    }, 5000);