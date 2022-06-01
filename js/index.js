import handleHamburger from './exercise1.js';
import { showClock, initAlarm } from './exercise2.js';
import { moveBall } from './exercise3.js';
import { countdown } from './exercise4.js';
import moveScroll from './exercise5.js';
import toggleTheme from './exercise6.js';
import responsiveMedia from './exercise7.js';
import responsiveTester from './exercise8.js';

const doc = document;

doc.addEventListener('DOMContentLoaded', (e) => {
	handleHamburger('.burger-menu', '.aside', '.navbar a');
	showClock('.clock-content', '.init-clock', '.stop-clock');
	initAlarm('assets/alarm.mp3', '.init-alarm', '.stop-alarm');
	countdown('.countdown-container', 'Sep 10, 2022 10:23:43');
	moveScroll('.up-scroll', '.aside');
	responsiveMedia("youtube-link", "(min-width: 1024px)", `<a href="https://www.youtube.com/embed/eVTXPUF4Oz4" target="_blank">Link YouTube</a>`, `
	<iframe width="560" height="315" src="https://www.youtube.com/embed/eVTXPUF4Oz4"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;   clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
	)
	responsiveMedia("gmap-link", "(min-width: 1024px)", `<a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53629.092338119495!2d-68.87290759185294!3d-32.850063034522364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e08972bd84163%3A0xc69f774a11aa269a!2sIES%209008%20Manuel%20Belgrano!5e0!3m2!1ses-419!2sar!4v1653094234752!5m2!1ses-419!2sar" target="_blank">Link Google Map</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53629.092338119495!2d-68.87290759185294!3d-32.850063034522364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e08972bd84163%3A0xc69f774a11aa269a!2sIES%209008%20Manuel%20Belgrano!5e0!3m2!1ses-419!2sar!4v1653094234752!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	`)
	responsiveTester("webpage", "width-page", "height-page", "#open-btn", ".submit-btns")
});

doc.addEventListener('keydown', (e) => {
	moveBall(e, '.game-stage', '.game-ball');
});

toggleTheme(".theme-box", "dark-theme")