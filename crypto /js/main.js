
function headerFixed() {
    let header = document.querySelector('.header');
    let headerTop = document.querySelector('.header-top');

    document.addEventListener('scroll', function(e) {
        e.preventDefault();
        let posTop = window.pageYOffset;

        if (posTop > 50) {
            header.classList.add('fixed');
            headerTop.classList.add('active');
        }else {
            header.classList.remove('fixed');
            headerTop.classList.remove('active');
        }
    });

}
headerFixed();

function dropSearch() {
    let btnToggle = document.querySelector('.btn-toggle');
    let dropSearch = document.querySelector('.drop-search');
    let btnClose = document.querySelector('.btn-close');

    btnToggle.addEventListener('click', function(e) {
        e.preventDefault();

        dropSearch.classList.add('open');
    });

    btnClose.addEventListener('click', function(e) {
        e.preventDefault();

        dropSearch.classList.remove('open');
    });
}

dropSearch();


/*  SUB-MENU 
------------------------------------------------- */
function subMenu() {
    let btnDrop = document.querySelector('.btn-drop');
    let subMenu = document.querySelector('.sub-menu');

    btnDrop.addEventListener('click', function(e) {
        e.preventDefault();

        

        btnDrop.classList.toggle('open');
        subMenu.classList.toggle('open');
    });
}
subMenu();


/*  TABS
------------------------------------------------------- */
function tabs() {
    let tabs = document.querySelectorAll('.tabs');

    for (let i = 0; i < tabs.length; i++) {
        let tabBtn = tabs[i].querySelectorAll('.tab-btn');
        let tabItem = tabs[i].querySelectorAll('.tab-item');


        for (let z = 0; z < tabBtn.length; z++) {
            tabBtn[z].addEventListener('click', function(e) {
                e.preventDefault();

                for (let i = 0; i < tabItem.length; i++) {
                    tabBtn[i].classList.remove('active');
                    tabItem[i].classList.remove('active');
                }

                tabBtn[z].classList.add('active');
                tabItem[z].classList.add('active');
            });
        }
    }
}

tabs();

const tickersSlider = new Swiper('.tickers-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    spaceBetween: 10,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const postsSlider = new Swiper('.posts-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const pressSlider = new Swiper('.press-slider', {
    // Optional parameters
    loop: false,
    slidesPerView: 5,
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',

        clickable: true,
      },

    // Navigation arrows
    navigation: {
        nextEl: '.press-button-next',
        prevEl: '.press-button-prev',
    },
});