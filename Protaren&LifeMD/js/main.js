/* MENU
------------------------------ */
function menu() {
    const body = document.body;
    const btnMenu = document.querySelector('.btn-menu');

    btnMenu.addEventListener('click', (e) => {
        e.preventDefault();
        body.classList.toggle('menu-open');
    });
}

menu();

/* SCROLL BOTTLE
------------------------------ */
function scrollBottle() {
    const paralax = document.querySelector('.home-image')
    const bottle = document.querySelector('.home-image img:first-child');
    const img = document.querySelector('.home-image img:last-child');
    
    document.addEventListener('scroll', () => {
        if (paralax.classList.contains('paralax')) {
            if (window.scrollY < 650) {
                bottle.style.transform = 'translateY(' + (window.scrollY / 2) + 'px)';
                img.style.transform = 'translateY(' + (window.scrollY / 3) + 'px)';
            }  
        }                  
    });
}

if (window.innerWidth > 768) {
    scrollBottle();
    document.querySelector('.home-image').classList.add('paralax');
} else {
    document.querySelector('.home-image').classList.remove('paralax');
}

window.onresize = () => {
    if (window.innerWidth > 768) {
        scrollBottle();
        document.querySelector('.home-image').classList.add('paralax');
    } else {
        document.querySelector('.home-image').classList.remove('paralax');
    }
}

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

/* PAIN SLIDER
------------------------------ */
new Splide('.pain-slide', {
    type : 'loop',
    perPage : 3,
    autoplay: true,
    arrows: false,
    breakpoints: {
        750: {
            perPage : 1,
        }
    }
}).mount();

/* ORDER SLIDER
------------------------------ */
new Splide('.order-slider .splide', {
    type : 'loop',
    autoplay: true,
    arrows: false
}).mount();

/* RESULT SLIDER
------------------------------ */
new Splide('.results-list .splide', {
    type : 'loop',
    autoplay: true,
    arrows: false,
    padding: '5rem',
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

/* ANIMATION PAGE
---------------------------------------------------- */
function animScrollPage() {
    const elems = document.querySelectorAll('.animated');
    const options = {rootMargin: '0px', threshold: 0}

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show', entry.isIntersecting);
        });
    }, options);

    elems.forEach(elem => {
        observer.observe(elem);
    });
}

animScrollPage();

/* TYPER
---------------------------------------------------- */
var Typer = function(element) {
  this.element = element;
  var delim = element.dataset.delim || ",";
  var words = element.dataset.words || "override these,sample typing";
  this.words = words.split(delim).filter((v) => v); // non empty words
  this.delay = element.dataset.delay || 200;
  this.loop = element.dataset.loop || "true";
  if (this.loop === "false" ) { this.loop = 1 }
  this.deleteDelay = element.dataset.deletedelay || element.dataset.deleteDelay || 800;

  this.progress = { word: 0, char: 0, building: true, looped: 0 };
  this.typing = true;

  var colors = element.dataset.colors || "black";
  this.colors = colors.split(",");
  this.element.style.color = this.colors[0];
  this.colorIndex = 0;

  this.doTyping();
};

Typer.prototype.start = function() {
  if (!this.typing) {
    this.typing = true;
    this.doTyping();
  }
};
Typer.prototype.stop = function() {
  this.typing = false;
};
Typer.prototype.doTyping = function() {
  var e = this.element;
  var p = this.progress;
  var w = p.word;
  var c = p.char;
  var currentDisplay = [...this.words[w]].slice(0, c).join("");
  var atWordEnd;
  if (this.cursor) {
    this.cursor.element.style.opacity = "1";
    this.cursor.on = true;
    clearInterval(this.cursor.interval);
    this.cursor.interval = setInterval(() => this.cursor.updateBlinkState(), 400);
  }

  e.innerHTML = currentDisplay;

  if (p.building) {
    atWordEnd = p.char === this.words[w].length;
    if (atWordEnd) {
      p.building = false;
    } else {
      p.char += 1;
    }
  } else {
    if (p.char === 0) {
      p.building = true;
      p.word = (p.word + 1) % this.words.length;
      this.colorIndex = (this.colorIndex + 1) % this.colors.length;
      this.element.style.color = this.colors[this.colorIndex];
    } else {
      p.char -= 1;
    }
  }

  if (p.word === this.words.length - 1) {
    p.looped += 1;
  }

  if (!p.building && this.loop <= p.looped){
    this.typing = false;
  }

  setTimeout(() => {
    if (this.typing) { this.doTyping() };
  }, atWordEnd ? this.deleteDelay : this.delay);
};

var Cursor = function(element) {
  this.element = element;
  this.cursorDisplay = element.dataset.cursordisplay || element.dataset.cursorDisplay || "_";
  element.innerHTML = this.cursorDisplay;
  this.on = true;
  element.style.transition = "all 0.1s";
  this.interval = setInterval(() => this.updateBlinkState(), 400);
}
Cursor.prototype.updateBlinkState = function() {
  if (this.on) {
    this.element.style.opacity = "0";
    this.on = false;
  } else {
    this.element.style.opacity = "1";
    this.on = true;
  }
}

function TyperSetup() {
  var typers = {};
  for (let e of document.getElementsByClassName("typer")) {
    typers[e.id] = new Typer(e);
  }
  for (let e of document.getElementsByClassName("typer-stop")) {
    let owner = typers[e.dataset.owner];
    e.onclick = () => owner.stop();
  }
  for (let e of document.getElementsByClassName("typer-start")) {
    let owner = typers[e.dataset.owner];
    e.onclick = () => owner.start();
  }
  for (let e of document.getElementsByClassName("cursor")) {
    let t = new Cursor(e);
    t.owner = typers[e.dataset.owner];
    t.owner.cursor = t;
  }
}

TyperSetup();