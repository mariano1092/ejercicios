const doc = document;

export function countdown(countdown, date) {
	let countdownDate = new Date(date).getTime();
	let now = new Date().getTime();

	let countdownTemporal = setInterval(() => {
		let limitTime = countdownDate - now;

		let days = Math.floor(limitTime / (1000 * 60 * 60 * 24));
		let hours = (
			'0' + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
		).slice(-2);
		let minutes = (
			'0' + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
		).slice(-2);
		let seconds = ('0' + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(
			-2
		);

		console.log(seconds);

		doc.querySelector(
			countdown
		).innerHTML = `<p>Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos</p>`;

		if (limitTime < 0) clearInterval(limitTime);
	}, 1000);
}
