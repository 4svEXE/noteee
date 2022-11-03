const qs = el => document.querySelector(el);
const qsa = el => document.querySelectorAll(el);

const rand = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const randBool = () => {
	if (random(0, 1) === 1) {
		return true;
	} else {
		return false;
	}
}

function dbToggle (element, className, duration = 500) {
	qs(element).classList.toggle(className);
	setTimeout(() => qs(element).classList.toggle(className), duration);
};

// INCLUDER //
qs('body').insertAdjacentHTML('beforeend', `<div class="scripts"></div>`);
const addScript = src => {
	const sript = document.createElement('script');
	sript.src = src;
	sript.async = true;
	qs('.scripts').appendChild(sript);
};
addScript('./js/includes.js');

console.log('sv is working!');
