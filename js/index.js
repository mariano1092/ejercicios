import handleHamburger from './exercise1.js';
import { showClock, initAlarm } from './exercise2.js';
import { moveBall } from './exercise3.js';
import { countdown } from './exercise4.js';
import moveScroll from './exercise5.js';
import toggleTheme from './exercise6.js';
import mapAndVideo from './exercise7.js';

const doc = document;

doc.addEventListener('DOMContentLoaded', (e) => {
	handleHamburger('.burger-menu', '.aside', '.navbar a');
	showClock('.clock-content', '.init-clock', '.stop-clock');
	initAlarm('assets/alarm.mp3', '.init-alarm', '.stop-alarm');
	countdown('.countdown-container', 'Sep 10, 2022 10:23:43');
	moveScroll('.up-scroll', '.aside');
	mapAndVideo(".section-four-container")
});

doc.addEventListener('keydown', (e) => {
	moveBall(e, '.game-stage', '.game-ball');
});

toggleTheme(".theme-box", "dark-theme")