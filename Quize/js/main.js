function quize() {
	const quize = document.querySelector('.quize');
	const quizeStart = quize.querySelector('.quize-start');
	const quizeFinish = quize.querySelector('.quize-finish');
	const quizeSuccess = quize.querySelector('.quize-success');
	const quizeNext = quize.querySelectorAll('.quize-next');
	const step = quize.querySelectorAll('.step');
	const prev = quize.querySelectorAll('.quize-back');
	let data = {};
	let currentStep = 0;

	quizeNext.forEach(next => {
		next.addEventListener('click', (e) => {
			stepNext(currentStep);	
			if (currentStep > 0) setLocalStorage(currentStep);
			currentStep++;
		});
	});

	prev.forEach(btn => {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
			currentStep--;
			showPrev(currentStep);		
		});
	});

	function stepNext(index) {		
		setTimeout(() => {
			if (index < step.length) {
				step[index].classList.add('quize-fade');
				step[index].previousElementSibling.classList.remove('quize-fade');
			} else {
				quizeFinish.classList.add('quize-fade');
				step[index - 1].classList.remove('quize-fade');
			}			
		}, 200);			
	}

	function showPrev(index) {
		setTimeout(() => {
			if (index > 0) {
				step[index].classList.remove('quize-fade');
				step[index - 1].classList.add('quize-fade');
			} else {
				step[index].classList.remove('quize-fade');
				quizeStart.classList.add('quize-fade');
			}	
		}, 200);		
	}

	function setLocalStorage(index) {
		const query = step[index - 1];
		console.log(index);
		if (query.querySelector('.quize-body') != null) {
			const title = query.querySelector('.quize-body').dataset.title;
			const radio = query.querySelector('input:checked').value;

			data[index] = {title, radio};
		}
	}

	quizeFinish.onsubmit = (e) => {
		e.preventDefault();

		const name = e.target.name.value;
		const email = e.target.email.value;
		const tel = e.target.tel.value;

		const message = `
		*Заявку на работу*
		*Имя*: ${name}				
		*Тел*: ${tel}		
		*Крок 1*: ${data[1].radio}
		*Крок 2*: ${data[2].radio}
		*Крок 3*: ${data[3].radio}
		*Крок 4*: ${data[4].radio}
		*Крок 5*: ${data[5].radio}
		`;

		// https://api.telegram.org/bot5599121747:AAGb48MIduVgK8c0c-Nh3JOK5f1Kx-GeTzg/getUpdates
		const token = '5599121747:AAGb48MIduVgK8c0c-Nh3JOK5f1Kx-GeTzg';
		// const chat_id = '-700760671'; //serv
		const chat_id = '483570610'; //loc
		let url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chat_id + '&parse_mode=MarkdownV2&text=' + encodeURIComponent(message);				

		let xhttp = new XMLHttpRequest();
		xhttp.open("GET", url, true);
		xhttp.send();

		xhttp.onload = function() {
			if (xhttp.status == 200) {
				quizeFinish.classList.remove('quize-fade');
				quizeSuccess.classList.add('quize-fade');
			} else {
				console.log('Error');
			}
		};
	}
}

quize();