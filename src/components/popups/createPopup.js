import { createElement } from "../formElements/createElement"

export const createPopup = (element) => {
	const span = createElement('span')
	const closeBtn = createElement('div', {
		classList: 'popup__close',
		childrens: [span]
	})
	element.prepend(closeBtn)

	const popupBody = createElement('div', {
		classList: 'popup__body',
		childrens: [element]
	})
	const popup = createElement('div', {
		classList: 'popup',
		childrens: [popupBody]
	})
	return popup
}