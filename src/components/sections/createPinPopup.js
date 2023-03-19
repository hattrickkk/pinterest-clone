import { createElement } from "../formElements/createElement"
import { createPopup } from "../popups/createPopup"
import { createBtn } from "../formElements/createBtn"
import { openPopup } from "../popups/openPopup"
import { closePopup } from "../popups/closePopup"

export const createPinPopup = () => {
	const addToBoardBtn = createBtn('Добавить на доску', (e) => {
		closePopup(e.target.closest('.popup'))
	})
	addToBoardBtn.classList.add('popup__addToBoard', 'popup-link')
	addToBoardBtn.id = 'pick-board-popup'

	// добавить id для открытия попапа
	const complainBtn = createBtn('Пожаловаться', (e) => {
		closePopup(e.target.closest('.popup'))
	})
	complainBtn.classList.add('popup__complainBtn', 'popup-link')
	complainBtn.id = 'complain-popup'

	const deleteBtn = createBtn('Удалить пин')
	deleteBtn.classList.add('popup__deleteBtn')

	const popupWrapper = createElement('div', {
		classList: 'popup__content-wrapper',
		childrens: [deleteBtn, addToBoardBtn, complainBtn]
	})

	const container = createElement('div', {
		classList: 'popup__content',
		childrens: [popupWrapper]
	})
	const popup = createPopup(container)
	popup.classList.add('pin-popup')
	return popup
}