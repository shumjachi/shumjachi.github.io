var i = 0;

var int = setInterval(function() {
    i++;
    console.log(i);
}, 1000);

if (i = 5) clearInterval(int);


const header = document.querySelector('.header');

document.querySelector('.js-for-course').onclick = function(e) {
    e.preventDefault();
    document.querySelector('.toliptip-wrap .inner').classList.toggle('active');
}

/*  SCROLL
------------------------------------------------- */
document.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});

/*  BURGER-MENU
------------------------------------------------- */
var menuBurger = document.querySelector('.menu-burger');
var menuMob = document.querySelector('.menu-mob');


menuBurger.onclick = function() {
	console.log(this);
  menuMob.classList.toggle('active');
};

/*  ANHOR
------------------------------------------------- */
function anhor() {
    var anhors = document.querySelectorAll('.anhor');

    for (var i = 0; i < anhors.length; i++) {
        anhors[i].onclick = function(e) {
        	e.preventDefault();
            var clasName = this.getAttribute('data-class');
            var elem = document.querySelector('.' + clasName);
            scroll(elem);
        }
    }
}
anhor();

function scroll(elem)  {    
    var pos = elem.offsetTop;
    var count = window.pageYOffset;

    var intID = setInterval(function() {
        if (count > pos) {
            count -= 30;
            if (count <= pos) {
                clearInterval(intID);
                count = pos - 42;
            } 
        } else {
            count += 30;
            if (count >= pos) {
                clearInterval(intID);
                count = pos - 42;
            } 
        }
        window.scrollTo(0, count);
    }, 1);
}

/*  ACCORDEON
------------------------------------------------- */
var dropdownlink = document.querySelectorAll('.dropdownlink');

for (var i = 0; i < dropdownlink.length; i++) {
    dropdownlink[i].addEventListener('click', function(e) {
        for (var i = 0; i < dropdownlink.length; i++) {
            dropdownlink[i].classList.remove('active');
        }   
        
        var submenuItems = document.querySelectorAll('.submenuItems');
        
        for (var i = 0; i < submenuItems.length; i++) {
            submenuItems[i].style.height = 0 + 'px';
        }

        var submenu = this.nextElementSibling;
        submenuHeight = this.nextElementSibling.clientHeight;
        var height = submenu.querySelector('.submenuItems div').clientHeight;

        if (submenuHeight == 0) {
            submenu.style.height = height + 'px';
            this.classList.add('active');
        }else {
            submenu.style.height = 0 + 'px';
            this.classList.remove('active');
        }
    });
}

/*  DROP
------------------------------------------------- */
var drop = document.querySelectorAll('.drop-menu');

for(var i = 0; i < drop.length; i++) {
  drop[i].onclick = function() {

    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
  }
}


/*  POPUP
------------------------------------------------- */
function popup() {
    const btn = document.querySelectorAll('.btn-popup');
    const ovelay = document.querySelector('.popup-overlay');
    var popup = null;

    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', openPopup);
    }

    function openPopup(e) {
        e.preventDefault();

        popup = document.querySelector('.' + this.getAttribute('data-popup'));
        const close = popup.querySelector('.popup-close');

        close.addEventListener('click', closePopup);

        ovelay.classList.add('active');
        popup.classList.add('active');
    }

    function closePopup(e) {
        e.preventDefault();

        popup.classList.remove('active');
        ovelay.classList.remove('active');
    }
}

popup();

/*  ANIMATION PAGE SCROLL
------------------------------------------------- */

var isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
      if (isScrolling == false) {
            window.requestAnimationFrame(function() {
              scrolling(e);
                isScrolling = false;
            });
      }
      isScrolling = true;
}
 
document.addEventListener("DOMContentLoaded", scrolling, false);

const result = document.querySelector(".result");
const number = result.querySelectorAll('.number');
const boxItem = document.querySelectorAll('.box-icon');
const title = document.querySelectorAll('h2.title');
const boxLi = document.querySelectorAll('.questions-box li');
const courseItemOne = document.querySelector('.course .item:first-child');
const courseItemTwo = document.querySelector('.course .item:nth-child(2)');
const courseItemThree = document.querySelector('.course .item:last-child');
let countFlag = true;
console.log(boxItem);
function scrolling(e) {      

      if (isFullyVisible(number[0])) {
            var num = new NumberAnimation(number);
            if (countFlag) num.up();
            countFlag = false;
      } else {
            countFlag = true;
      }

      for (var i = 0; i < boxItem.length; i++) {
          var item = boxItem[i].querySelectorAll('.item');

          if (isFullyVisible(boxItem[i])) {
                

                for (var j = 0; j < item.length; j++) {
                    item[j].classList.add('animation');
                }
          } else {

                for (var j = 0; j < item.length; j++) {
                    item[j].classList.remove('animation');
                }
          }
      }
     

      if (isPartiallyVisible(courseItemOne)) {
            courseItemOne.classList.add('animation');
      } else {
            courseItemOne.classList.remove('animation');
      }

      if (isPartiallyVisible(courseItemTwo)) {
            courseItemTwo.classList.add('animation');
      } else {
            courseItemTwo.classList.remove('animation');
      }

      if (isPartiallyVisible(courseItemThree)) {
            courseItemThree.classList.add('animation');
      } else {
            courseItemThree.classList.remove('animation');
      }

      for (var i = 0; i < title.length; i++) {
          if (isPartiallyVisible(title[i])) {
                title[i].classList.add('animation');
          } else {
                title[i].classList.remove('animation');
          }
      }

      for (var i = 0; i < boxLi.length; i++) {
          if (isPartiallyVisible(boxLi[i])) {
                boxLi[i].classList.add('animation');
          } else {
                boxLi[i].classList.remove('animation');
          }
      }
}
 
function isPartiallyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();

      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
      var height = elementBoundary.height;

      return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}
 
function isFullyVisible(el) {

      var elementBoundary = el.getBoundingClientRect();

      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;

      return ((top >= 0) && (bottom <= window.innerHeight));
}

/*  ANIMATION NUMBER
------------------------------------------------- */

function NumberAnimation(number) {
    var count = 0;

    this.up = function () {
        count = 0;
        for (var i = 0; i < number.length; i++) {
            let max = number[i].getAttribute('data-max');
            let _this = number[i];
            let interval = null;
            
            interval = setInterval(function() {
                _this.innerHTML = count;
                if (count >= max) clearInterval(interval);
                count++;
            }, 50);
        }
    }

    this.default = function () {
        for (var i = 0; i < number.length; i++) {
            number[i].innerHTML = 0;
        }
    }
}