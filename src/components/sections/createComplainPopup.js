import { complainsUrl } from "../constants"
import { createComplainObject } from "../createComplainObject"
import { createBtn } from "../formElements/createBtn"
import { createElement } from "../formElements/createElement"
import { getPostRequest } from "../getPostRequest"
import { closePopup } from "../popups/closePopup"
import { createPopup } from "../popups/createPopup"
import { getCurentPin } from "../store/getCurrentPin"

export const createComplainPopup = () => {
	const title = createElement('h3', {
		textContent: 'Причина жалобы:',
		classList: 'popup__title'
	})


	const menu = createElement('form', {
		classList: 'popup__complain-list complain-list'
	})

	let options = ['спам', 'реклама', 'оскорбление', 'Призыв к травле', 'насилие', 'кликбейт']
	options.forEach((elem, index) => {
		const checkbox = createElement('input', {
			type: 'checkbox',
			classList: 'popop__checkbox',
			id: 'checkbox' + index,
		})

		const labell = createElement('label', {
			textContent: elem,
			for: 'checkbox' + index
		})

		const row = createElement('div', {
			classList: 'complain-list__item',
			childrens: [checkbox, labell]
		})

		menu.append(row)
	})

	// кнопкa
	const sendBtn = createBtn('Отправить', (e) => {

		const currentPin = getCurentPin()
		const complainObj = createComplainObject(currentPin)

		const request = getPostRequest(complainObj)
		fetch(request)
			.then(response => response.json)


		const curentPopup = e.target.closest('.popup')
		closePopup(curentPopup)
	})
	sendBtn.type = 'Submit'
	sendBtn.classList.add('popup__sendBtn')

	const popupWrapper = createElement('div', {
		classList: 'popup__content-wrapper',
		childrens: [title, menu, sendBtn]
	})

	// обертка
	const container = createElement('div', {
		classList: 'popup__content',
		childrens: [popupWrapper]
	})
	const popup = createPopup(container)
	popup.classList.add('complain-popup')
	return popup

}