import { createPin } from "./createPin";
import { createElement } from "../formElements/createElement";
import { createLimitingContainer } from "../formElements/createLimitingContainer";

export const createBoard = data => {
	let pins = []
	data.forEach(elem => {
		const pin = createPin(elem)
		pins.push(pin)
	});
	const pinContainer = createElement('div', {
		classList: 'pin__container',
		childrens: [...pins]
	})
	const container = createLimitingContainer(pinContainer)
	const pinSection = createElement('div', {
		classList: 'pins',
		childrens: [...container]
	})

	return pinSection
}