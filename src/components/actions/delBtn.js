import { CURRENT_PIN_KEY } from "../constants"
import { getData } from "../store/store"
export const delBtn = () => {

	const curentPinID = JSON.parse(localStorage.getItem(CURRENT_PIN_KEY)).id
	// удаление html-элемента
	const pins = document.querySelectorAll('.pin')
	for (let i = 0; i < pins.length; i++) {
		if (pins[i].id == curentPinID) {
			pins[i].remove()
		}
	}
	if (pins.length <= 1) {
		const main = document.querySelector('.main')
		main.classList.add('addPicture')
	}


	// удаление элемеента из массива
	// получение имени класса, содержащего название массива в store
	const curentBoardName = document.querySelectorAll('.pins')
	curentBoardName.forEach(elem => {
		const classNames = elem.classList
		for (let j = 0; j < classNames.length; j++) {

			if (classNames[j].startsWith('board')) {
				getData()[classNames[j]].forEach((pin, index) => {
					if (pin.id == curentPinID) {
						getData()[classNames[j]].splice(index, 1)
					}
				})
			}

		}
	})

}