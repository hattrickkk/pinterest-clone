import { createElement } from "../formElements/createElement"
import { createPopup } from "../popups/createPopup"

export const createPickBoardPopup = () => {
	const title = createElement('h3', {
		textContent: 'Выберите доску:',
		classList: 'popup__title'
	})

	let options = []
	for (let i = 1; i <= 3; i++) {
		const option = createElement('li', {
			textContent: `Доска №${i}`,
			className: `popup__board`,
			id: `board${i}`
		})
		options.push(option)
	}

	const menu = createElement('ul', {
		classList: 'popup__menu',
		childrens: [...options]
	})

	const popupWrapper = createElement('div', {
		classList: 'popup__content-wrapper',
		childrens: [title, menu]
	})

	const container = createElement('div', {
		classList: 'popup__content',
		childrens: [popupWrapper]
	})

	const popup = createPopup(container)
	popup.classList.add('pick-board-popup')
	return popup
}