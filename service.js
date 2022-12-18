// https://glint-site.netlify.app/
AOS.init();
window.addEventListener('DOMContentLoaded',()=>{
    
    // Loader

    const loader = document.querySelector('.loader-main');

    setTimeout(()=>{
        loader.style.opacity = 0;
        setTimeout(()=>{
            loader.style.display = "none";
        },1000)
    },1500)

    // top
    const topButton = document.querySelector('.top-button');

    window.addEventListener('scroll',()=>{
        if(window.scrollY > 700){
            topButton.classList.add('top-active')
        }else{
            topButton.classList.remove('top-active')
        }
    })

    
    // menu-changed-text
    const menuTextmain = document.querySelector('.menu-text-change'),
        menuText = menuTextmain.querySelectorAll('p'),
        menuChange = document.querySelector('.menu-next-prev'),
        buttonsChange = menuChange.querySelectorAll('i');

    buttonsChange.forEach((items)=>{
        items.addEventListener('click',()=>{
            if(menuText[0].classList.contains('active')){
                menuText[0].classList.remove('active')
                menuText[1].classList.add('active')
            }
            else{
                menuText[1].classList.remove('active')
                menuText[0].classList.add('active')
            }
        })
    })

    // phone-hidden-menu

    const phonemenuBar = document.querySelector('#phone-menuBar'),
        phoneHiddenMenu = document.querySelector('.phone-hidden-menu'),
        phoneClose = document.querySelector('#phone-close');

    phonemenuBar.addEventListener('click',()=>{
        phoneHiddenMenu.classList.add('visible')
    })
    phoneClose.addEventListener('click',()=>{
        phoneHiddenMenu.classList.remove('visible')
    })

    // big-hidden-menu

    const bigHiddenMenu = document.querySelector('.big-hidden-menu'),
        bigmenuBar = document.querySelector('#big-menuTab'),
        bigClose = document.querySelector('.big-close');

    bigmenuBar.addEventListener('click',()=>{
        bigHiddenMenu.classList.add('open')
    })
    bigClose.addEventListener('click',()=>{
        bigHiddenMenu.classList.remove('open')
    })

    // scroll

    const phoneHeader = document.querySelector('.header-phone'),
        bigHeader = document.querySelector('.header-big');

    window.addEventListener('scroll',()=>{
        if(window.scrollY > 70){
            phoneHeader.classList.add('scrollTop')
            bigHeader.classList.add('scrollTop')
            bigHeader.classList.add('scroll-dark')
        }else{
            phoneHeader.classList.remove('scrollTop')
            bigHeader.classList.remove('scrollTop')
            bigHeader.classList.remove('scroll-dark')
        }
    })

    // home-carusel

    const homeOne = document.querySelector('#home-one'),
        homeTwo = document.querySelector('#home-two'),
        homeThree = document.querySelector('#home-three')
    const homerightButton = document.querySelectorAll('.home-right-button');

    function homeCarusel(){
        if(homeOne.classList.contains('open')){
            homeOne.classList.remove('open')
            homeTwo.classList.add('open')
            homeThree.classList.remove('open')
            homerightButton[0].classList.remove('right-button-open')
            homerightButton[1].classList.add('right-button-open')
            homerightButton[2].classList.remove('right-button-open')
        }else if(homeTwo.classList.contains('open')){
            homeOne.classList.remove('open')
            homeTwo.classList.remove('open')
            homeThree.classList.add('open')
            homerightButton[0].classList.remove('right-button-open')
            homerightButton[1].classList.remove('right-button-open')
            homerightButton[2].classList.add('right-button-open')
        }else if(homeThree.classList.contains('open')){
            homeOne.classList.add('open')
            homeTwo.classList.remove('open')
            homeThree.classList.remove('open')
            homerightButton[0].classList.add('right-button-open')
            homerightButton[1].classList.remove('right-button-open')
            homerightButton[2].classList.remove('right-button-open')
        }
    }

    let setTimeHome = setInterval(homeCarusel,5000);
    
    function clearTime(){
        clearInterval(setTimeHome)
        
        setTimeHome = setInterval(homeCarusel,5000);
    }
 
    homerightButton[0].addEventListener('click',()=>{
        
        homeOne.classList.add('open')
        homeTwo.classList.remove('open')
        homeThree.classList.remove('open')
        homerightButton[0].classList.add('right-button-open')
        homerightButton[1].classList.remove('right-button-open')
        homerightButton[2].classList.remove('right-button-open')

        clearTime()

    })
    homerightButton[1].addEventListener('click',()=>{

        homeOne.classList.remove('open')
        homeTwo.classList.add('open')
        homeThree.classList.remove('open')
        homerightButton[0].classList.remove('right-button-open')
        homerightButton[1].classList.add('right-button-open')
        homerightButton[2].classList.remove('right-button-open')

        clearTime()

    })
    homerightButton[2].addEventListener('click',()=>{

        homeOne.classList.remove('open')
        homeTwo.classList.remove('open')
        homeThree.classList.add('open')
        homerightButton[0].classList.remove('right-button-open')
        homerightButton[1].classList.remove('right-button-open')
        homerightButton[2].classList.add('right-button-open')

        clearTime()

    })

    // carusel-1
    $(document).ready(function() {
        $('.carusel-main').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            
            prevArrow: $('.prevvvx'),
            nextArrow: $('.nextttx'),
        })
    });

    // carusel-2
    $(document).ready(function() {
        $('.carusel-comment').slick({
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            
            prevArrow: $('.prevvv'),
            nextArrow: $('.nexttt'),
        })
    });

    // carusel-3
    $(document).ready(function() {
        $('.carusel-second-slider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            
            prevArrow: $('.prevvv3'),
            nextArrow: $('.nexttt3'),
        })
    });

    // carusel-3
    $(document).ready(function() {
        $('.carusel-last').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows:false,
            
        })
    });

})