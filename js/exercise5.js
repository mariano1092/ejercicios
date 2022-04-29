const doc = document;

export default function moveScroll(upScroll, navegation) {
	window.addEventListener('scroll', (e) => {
		let scrollTop = doc.documentElement.scrollTop;
		if (scrollTop > 0) doc.querySelector(upScroll).classList.remove('hidden');
		if (scrollTop === 0) doc.querySelector(upScroll).classList.add('hidden');
	});
	doc.addEventListener('click', (e) => {
		if (e.target.matches(upScroll) || e.target.matches(`${upScroll} *`)) {
			doc.querySelector(navegation).classList.remove('active');
			window.scroll(0, 0);
		}
	});
}
