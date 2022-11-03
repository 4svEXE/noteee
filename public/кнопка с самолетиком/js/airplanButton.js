///////////////////////////////////////////////////////////////
//COFINGS
const firstValue = 'подивитись ноту' // первая фраза
const secondValue = 'ОТПРАВЛЕНО' // фраза после нажатия
///////////////////////////////////////////////////////////////

const qsAll = el => document.querySelectorAll(el)

const airplanButon = qsAll('.airplan_button')
const airplanButtonHTML = `
	<input class="airplan_button_body" type="button" value="${firstValue}">
`
for (var i = 0; i < airplanButon.length; i++) {
	airplanButon[i].insertAdjacentHTML('beforeend', airplanButtonHTML);
}

for (var i = 0; i < airplanButon.length; i++) {
	const id = i, butonBody = qsAll('.airplan_button_body')

	airplanButon[i].onclick = function(){
		qsAll('.airplan_button')[id].classList.add('airplan_button_active')

		setTimeout(() => {
			qsAll('.airplan_button')[id].classList.remove('airplan_button_active')
			butonBody[id].value == firstValue?
			butonBody[id].value = secondValue:
			butonBody[id].value = firstValue;
			butonBody[id].classList.toggle('disabled_airplan_button')
		},6000);
	}
}
