window.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.style.opacity = 0
        setTimeout(() => {
            loader.style.display = "none"
        }, 1000)
    }, 1500);
    //=======================Contact slider======================
    const cslider = document.querySelectorAll('.contact-slider'),
        cprev = document.querySelector('.contact-prev'),
        cnext = document.querySelector('.contact-next')
    let cindex = 1
    function cSh(d) {
        if (cindex > cslider.length) {
            cindex = 1
        }
        if (cindex < 1) {
            cindex = cslider.length
        }
        cslider.forEach(item => item.style.display = 'none')
        cslider[cindex - 1].style.display = "block"
    }
    cSh(cindex)
    cprev.addEventListener('click', () => cSh(cindex += 1))
    cnext.addEventListener('click', () => cSh(cindex -= 1))
    //=======================Header======================
    const btn1200 = document.querySelector('.menu-btn'),
        showmenu1200 = document.querySelector('.show-menu1200'),
        close1200 = document.querySelector('.close1200')
    btn1200.addEventListener('click', () => showmenu1200.style.transform = 'translateX(0)')
    close1200.addEventListener('click', () => showmenu1200.style.transform = 'translateX(100%)')
    
    const btn992 = document.querySelector('.menu-bars'),
        showmenu992 = document.querySelector('.showmenu992'),
        close992 = document.querySelector('.close992')
        btn992.addEventListener('click', () => showmenu992.style.transform = 'translateX(0)')
        close992.addEventListener('click', () => showmenu992.style.transform = 'translateX(100%)')
    const header = document.querySelector('.header');
    const contacatme=document.querySelector('.contact-me')
    window.addEventListener('scroll', () => {
    if (window.scrollY > 55) {
        header.classList.add('header-scroll')
    }else {
        header.classList.remove('header-scroll')
    }
    })
    //=======================IMAGINATION======================
    const imagcontent = document.querySelectorAll('.imagactive')
    const imagbtn = document.querySelectorAll('.imagination-btn')
    const imagbtns = document.querySelector('.imagination-btns')
        function imagshow(i = 0) {
            imagcontent[i].style.display = "block"
            imagbtn[i].classList.add('btn-active')
        }
    function imaghide() {
        imagcontent.forEach(item => {
            item.style.display = "none"
        });
        imagbtn.forEach(item => {
            item.classList.remove('btn-active');
        })
    }
    imaghide()
    imagshow()
    imagbtns.addEventListener('click', (event) => {
        console.log(event.target);
        imagbtn.forEach((item, i) => {
            if (event.target == item) {
                console.log(item);
                imaghide()
                imagshow(i)
            }
        })
    })
    function intervalimag(){
        if(imagbtn[0].classList.contains('btn-active')){
            imagbtn[0].classList.remove('btn-active')
            imagcontent[0].style.display="none"
            imagbtn[1].classList.add('btn-active')
            imagcontent[1].style.display="block"
        } else{
            imagbtn[1].classList.remove('btn-active')
            imagcontent[1].style.display="none"
            imagbtn[0].classList.add('btn-active')
            imagcontent[0].style.display="block"
        }
    }
    setInterval(intervalimag,5000)
    const showbtn=document.querySelector('.scroll-show-btn')
    window.addEventListener('scroll', () => {
        if(window.scrollY > 270){
            showbtn.style.display="block"
        }else{
            showbtn.style.display="none"
        }
    })
    //=======================SUCCESS======================
    for (let i = 0; i < 100; i++){
        const sccsdiv = document.createElement('div')
        sccsdiv.classList.add('success-div')
        document.querySelector('.success-divs').append(sccsdiv)
    }
    const succsImg=document.querySelector('.success-img')
    const succsText=document.querySelector('.success-content-2')
    window.addEventListener('scroll', () => {
        if(window.scrollY > 270){
            succsImg.classList.add('success-img-animation')
            succsText.classList.add('succes-tex-animation')
        }else{
            succsImg.classList.remove('success-img-animation')
            succsText.classList.remove('succes-tex-animation')
        }
    })
    //=======================PROCENT======================
    function progressView(){
        let diagramBox1 = document.querySelectorAll('.dprocent1.progress');
        diagramBox1.forEach((box) => {
            let deg = (360 * box.dataset.percent / 60) + 180;
            if(box.dataset.percent >= 50){
                box.classList.add('over_50');
            }else{
                box.classList.remove('over_50');
            }
            box.querySelector('.piece.right').style.transform = 'rotate('+deg+'deg)';
        });
        let diagramBox2 = document.querySelectorAll('.dprocent2.progress');
        diagramBox2.forEach((box) => {
            let deg = (360 * box.dataset.percent / 70) + 180;
            if(box.dataset.percent >= 50){
                box.classList.add('over_50');
            }else{
                box.classList.remove('over_50');
            }
            box.querySelector('.piece.right').style.transform = 'rotate('+deg+'deg)';
        });
        let diagramBox3 = document.querySelectorAll('.dprocent3.progress');
        diagramBox3.forEach((box) => {
            let deg = (360 * box.dataset.percent / 30) + 180;
            if(box.dataset.percent >= 50){
                box.classList.add('over_50');
            }else{
                box.classList.remove('over_50');
            }
            box.querySelector('.piece.right').style.transform = 'rotate('+deg+'deg)';
        });
        let diagramBox4 = document.querySelectorAll('.dprocent4.progress');
        diagramBox4.forEach((box) => {
            let deg = (360 * box.dataset.percent / 90) + 180;
            if(box.dataset.percent >= 50){
                box.classList.add('over_50');
            }else{
                box.classList.remove('over_50');
            }
            box.querySelector('.piece.right').style.transform = 'rotate('+deg+'deg)';
        });
    }
    progressView();
    AOS.init();





































})