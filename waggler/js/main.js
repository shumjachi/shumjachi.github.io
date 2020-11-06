/* SHOW CONTENT
----------------------------------- */
function ShowContent() {
	var btnShow = document.querySelectorAll('.js-btn__show');

	if (btnShow.length) {
		for (var i = 0; i < btnShow.length; i++) {
			btnShow[i].addEventListener('click', function(e) {
				e.preventDefault();
				var parent = this.closest('.js-show'),
					hidden = parent.querySelector('.hidden-content');

				parent.classList.toggle('active');
				hidden.classList.toggle('hidden');
				return false;
			});
		}
	}
}

var showContent = new ShowContent();

/*  SELECT
----------------------------------------------  */
function select() {
	var select = document.querySelectorAll('.select');

	for (var i = 0; i < select.length; i++) {
		var view = select[i].querySelector('.view');

		view.onclick = function() {
			var parent = this.closest('.select'),
				ul = parent.querySelector('ul'),
				li = ul.querySelectorAll('li'),
				view = parent.querySelector('.view');

			ul.classList.toggle('active');

			for (var j = 0; j < li.length; j++) {
				li[j].onclick = function() {
					view.querySelector('span').innerHTML = this.innerHTML;
					ul.classList.remove('active');
				}
			}
		}
	}
}

select();

/* SLICK
----------------------------------- */
$('.stories-slick ul').slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 2,
	arrows: false,
	autoplay: true,
    autoplaySpeed: 2000,
});

$('.gallery-post').each(function() {
	$(this).find('ul:first').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<span class="arrow prev"><svg><use xlink:href="#ic-slick-next"></use></svg></span>',
		nextArrow: '<span class="arrow next"><svg><use xlink:href="#ic-slick-prev"></use></svg></span>',
		adaptiveHeight: true,
		dots: true,
		dotsClass: 'custom_paging',
		customPaging: function (slider, i) {
	        console.log(slider);
	        return  (i + 1) + ' of ' + slider.slideCount;
	    }
	});
});

$(window).resize(function() {
	if ($(window).width() < 768) {
		$('.categories ul').slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
    		autoplaySpeed: 2000,
			responsive: [
			    {
				    breakpoint: 500,
				    settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1,
				    }
			    }
			]
		});

		$('.sidebar .js-show').removeClass('active');
		$('.sidebar .sidebar-inner,hidden-content').addClass('hidden');
	} else {
		$('.categories ul').slick('unslick');

		$('.sidebar .js-show').addClass('active');
		$('.sidebar .sidebar-inner,hidden-content').removeClass('hidden');
	}
});

if ($(window).width() < 768) {
	$('.categories ul').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
    	autoplaySpeed: 2000,
		responsive: [
		    {
			    breakpoint: 500,
			    settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			    }
		    }
		]
	});

	$('.sidebar .js-show').removeClass('active');
	$('.sidebar .sidebar-inner,hidden-content').addClass('hidden');
} else {
	$('.categories ul').slick('unslick');

	$('.sidebar .js-show').addClass('active');
	$('.sidebar .sidebar-inner,hidden-content').removeClass('hidden');
}