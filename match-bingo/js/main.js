$('.anhor').click(function(e) {
	e.preventDefault();

	var attr = $(this).attr('href'),
		elem = $(attr);

	var body = $("html, body");
	body.stop().animate({scrollTop: elem.position().top}, 500, 'swing');
});

function hiddenContent() {
	let heddenContent = document.querySelectorAll('.hidden-content');

	for (var i = 0; i < heddenContent.length; i++) {
		let btn = heddenContent[i].querySelector('.js-btn');

		btn.addEventListener('click', function(e) {
			e.preventDefault();

			this.closest('.hidden-content').classList.toggle('active');
		});
	}
}

hiddenContent();

function nav() {
	let toggle = document.querySelector('.toggle-menu');
	let menu = document.querySelector('.nav');

	toggle.addEventListener('click', function(e) {
		e.preventDefault();
		menu.classList.toggle('active');

		let close = menu.querySelector('.close-nav');

		close.addEventListener('click', function(e) {
			e.preventDefault();
			menu.classList.remove('active');
		});
	});
}

nav();

$('.arr-down').click(function(e) {
	e.preventDefault();
	
	var body = $("html, body");
	body.stop().animate({scrollTop: $('.about').position().top}, 500, 'swing');
});