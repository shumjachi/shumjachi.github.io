/* START ANIMATION ICON
---------------------------------------------------- */
function animationIcon() {
    let icons = document.querySelectorAll('.icon');

    document.addEventListener('scroll', scrolling);
    document.addEventListener('DOMContentLoaded', scrolling);

    function scrolling() {
        icons.forEach(icon => {
            if (isFullyVisible(icon)) {
                if (icon.dataset.start == 'true') {                 
                    lottie.loadAnimation({
                        container: icon,
                        path: 'lottie/' + icon.dataset.src + '.json',
                        renderer: icon.dataset.render,
                        loop: (icon.dataset.loop) ? true : false,
                        autoplay: true
                    });

                    icon.dataset.start = false;
                }                
            }
        }); 
    }

    function isFullyVisible(el) {
        var elementBoundary = el.getBoundingClientRect();
     
        var top = elementBoundary.top;
        var bottom = elementBoundary.bottom;
     
        return ((top >= 0) && (bottom <= window.innerHeight));
    }
}

animationIcon();

/* TAB
------------------------------ */
function tab() {
    const tab = document.querySelector('.tab');
    const controls = tab.querySelectorAll('.tab-controls li');
    const tabContents = tab.querySelectorAll('.tab-content > div');
    const len = tabContents.length;
    let count = tab.querySelector('.tab-controls li.active').dataset.index;

    controls.forEach(btn => btn.addEventListener('click', openTab));

    function openTab(e) {
        const data = this.dataset.tab;   
        count = this.dataset.index;     

        tabContents.forEach(tab => tab.classList.remove('active'));
        controls.forEach(btn => btn.classList.remove('active'));

        this.classList.add('active');
        document.querySelector('.' + data).classList.add('active');
    }

    setInterval(() => {
        count++;

        if (count > len) count = 1;

        tabContents.forEach(tab => tab.classList.remove('active'));
        controls.forEach(btn => btn.classList.remove('active'));

        document.querySelector('[data-tab="tab-' + count + '"]').classList.add('active');
        document.querySelector('.tab-' + count).classList.add('active');        
    }, 3000);
}

tab();

/* SLIDER
------------------------------ */
new Splide('.pain-slide', {
    type : 'loop',
    perPage : 3,
    autoplay: true,
    arrows: false
}).mount();

/* ORDER
------------------------------ */
new Splide('.order-slider .splide', {
    type : 'loop',
    autoplay: true,
    arrows: false
}).mount();

/* FORM ORDER
---------------------------------------------------- */
function formOrder() {
    const form = document.forms.order;
    const input = form.querySelectorAll('input');
    let price = form.querySelector('.total p:first-child');
    let save = form.querySelector('.total .save');

    input.forEach(inp => {
        inp.addEventListener('change', (e) => {
            input.forEach(inp => inp.parentNode.classList.remove('active'));

            e.target.parentNode.classList.add('active');

            price.innerHTML = e.target.dataset.price;
            save.textContent = e.target.dataset.save;
        });
    });
}

formOrder();

/* ACCORDEON
------------------------------------ */
function accordeon() {
    let accordeon = document.querySelectorAll('.accordeon');
    let flag = true;

    if (accordeon != null) {
        for (var i = 0; i < accordeon.length; i++) {
            item = accordeon[i].querySelectorAll('.item-accordeon');

            for (var j = 0; j < item.length; j++) {
                let btn = item[j].querySelector('.btn-accordeon');
                
                btn.addEventListener('click', openAccordeon);
            }
        }
    }

    function openAccordeon(e) {
        let item = this.closest('.accordeon').querySelectorAll('.item-accordeon');
        let inner = this.parentNode.querySelector('.inner-accordeon');
        let content = this.parentNode.querySelector('.content-accordeon');  

        if (this.parentNode.classList.contains('active')) {            
            this.parentNode.classList.remove('active');
            content.removeAttribute('style');
        } else {    
            for (var i = 0; i < item.length; i++) {
                item[i].classList.remove('active');
                item[i].querySelector('.content-accordeon').removeAttribute('style');
            }

            this.parentNode.classList.add('active');
            content.style.height = inner.clientHeight + 'px';
        }    
    }
}

accordeon();