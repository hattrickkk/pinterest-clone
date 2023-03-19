import { CURRENT_PIN_KEY } from "../constants"
export const loadCurentPin = pin => {
	const author = pin.querySelector('.pin__author p').textContent
	const avatar = pin.querySelector('.pin__author img').src
	const name = pin.querySelector('.pin__title p').textContent
	const photo = pin.querySelector('.pin__photo img').src
	const id = pin.id

	const pinObject = {
		id,
		name,
		avatar,
		author,
		photo
	}

	localStorage.setItem(CURRENT_PIN_KEY, JSON.stringify(pinObject))
}