import { header } from "./components/sections/header";
import { content } from "./components/sections/content";

import { addPinToStore, getData, updateStore } from "./components/store/store"
import { createElement } from "./components/formElements/createElement";
import { createPinPopup } from "./components/sections/createPinPopup";
import { openPopup } from "./components/popups/openPopup";
import { closePopup } from "./components/popups/closePopup";
import { createPickBoardPopup } from "./components/sections/createPickBoardPopup";
import { getContentBoard } from "./components/pins/getContentBoard";
import { loadCurentPin } from "./components/store/loadCurrentPin";
import { delBtn } from "./components/actions/delBtn";
import { createComplainPopup } from "./components/sections/createComplainPopup";
import { STORE_KEY } from "./components/constants";
import { getCurentPin } from "./components/store/getCurrentPin";

const page = createElement('div', {
	classList: 'main'
})
page.append(content())

root.append(
	header(),
	page,
	createPinPopup(),
	createPickBoardPopup(),
	createComplainPopup()
)

// dropdown
const dropDownSelect = document.querySelector('.dropdown__select')
const switcher = document.querySelector('.dropdown__switch')
const menu = document.querySelector('.dropdown__menu')
const options = document.querySelectorAll('.dropdown__menu li')
const dropdownText = document.querySelector('.dropdown__selected')

window.addEventListener('click', (e) => {
	if (e.target.closest('.dropdown__select')) {
		switcher.classList.toggle('reverse')
		menu.classList.toggle('active')
		dropDownSelect.classList.toggle('sharp-corner')
	} else {
		menu.classList.remove('active')
		dropDownSelect.classList.remove('sharp-corner')
		switcher.classList.remove('reverse')
	}
})

options.forEach(el => {
	el.addEventListener('click', (e) => {
		menu.classList.remove('active')
		dropDownSelect.classList.remove('sharp-corner')
		switcher.classList.remove('reverse')
		dropdownText.textContent = e.currentTarget.textContent
	})
})


for (let i = 0; i < options.length; i++) {
	options[i].addEventListener('click', () => {
		const page = document.querySelector('.main')

		// сначала очистить main
		const pinsContent = document.querySelector('.content')
		if (pinsContent) {
			pinsContent.remove()
		}

		// добавление пинов (новоcти или доски)
		const pinsFromBoard = JSON.parse(localStorage.getItem(STORE_KEY))
		if (!i) {
			// page.append(content())
			if (pinsFromBoard['news'].length > 0) {
				page.append(...getContentBoard(pinsFromBoard['news'], 'news'))
			}
		} else {
			if (pinsFromBoard['board' + i].length > 0) {
				page.append(...getContentBoard(pinsFromBoard['board' + i], 'board' + i))
				const btn = document.querySelectorAll('.pin__button')
				btn.forEach(button => button.classList.add('added'))
			}
		}

		// вставка картинки на фон
		const arrOfPins = document.querySelector('.content');
		(!arrOfPins)
			? page.classList.add('addPicture')
			: page.classList.remove('addPicture')
	})
}




// попапы

page.addEventListener('click', (e) => {
	if (e.target.closest('.popup-link')) {

		// создание currentPin
		if (e.target.closest('.popup-link.pin__button')) {
			const pin = e.target.closest('.pin')
			loadCurentPin(pin)
		}

		const popupName = e.target.closest('.popup-link').id
		if (e.target.closest('.popup-link.pin__button.added')) {
			openPopup(popupName, true)
		} else {
			openPopup(popupName)
		}
	}
})

// закрытие попапа + открытие нововго внутри него, если сущетсвует 
const popups = document.querySelectorAll('.popup')
popups.forEach(elem => {
	elem.addEventListener('click', (e) => {
		if (e.target.closest('.popup__close') || !e.target.closest('.popup__content')) {
			const popup = e.target.closest('.popup')
			closePopup(popup)
		}

		if (e.target.closest('.popup-link')) {
			const popupName = e.target.closest('.popup-link').id
			openPopup(popupName)
		}

		if (e.target.closest('.popup__deleteBtn')) {

			delBtn()
			localStorage.setItem(STORE_KEY, JSON.stringify(getData()))

			const popup = e.target.closest('.popup')
			closePopup(popup)
		}
	})
})


// доабвление на доску через попапы
const boards = document.querySelectorAll('.popup__board')
boards.forEach(elem => {
	elem.addEventListener('click', (e) => {

		const currentBoardID = e.target.closest('.popup__board').id
		const currentPin = getCurentPin()


		const hasPin = getData()[currentBoardID].find(elem => elem.id == currentPin.id)

		if (!hasPin) {
			addPinToStore(currentBoardID, currentPin)
			localStorage.setItem(STORE_KEY, JSON.stringify(getData()))
			alert('Пин добавлен!')
		} else {
			alert('Пин уже есть на этой доске!')
		}

		const curPopup = elem.closest('.popup')
		closePopup(curPopup)
	})
})


const search = document.querySelector('.header__search-input')
search.addEventListener('input', (e) => {
	const pins = document.querySelectorAll('.pin')
	const searchText = e.target.value.toLowerCase()

	pins.forEach(elem => {
		if (searchText) {
			const pinTitle = elem.querySelector('.pin__title p').textContent.toLowerCase()
			const pinAuthor = elem.querySelector('.pin__author-name p').textContent.toLowerCase();

			(pinTitle.includes(searchText) || pinAuthor.includes(searchText))
				? elem.hidden = false
				: elem.hidden = true

		} else {
			elem.hidden = false
		}
	})

	const arrOfPins = document.querySelectorAll('.pin[hidden]')
	const allPins = document.querySelectorAll('.pin')
		; (arrOfPins.length === allPins.length)
			? page.classList.add('addPicture')
			: page.classList.remove('addPicture')

})

// localStorage.clear()

window.addEventListener('load', () => {

	const updStore = JSON.parse(localStorage.getItem(STORE_KEY))
	if (updStore) { updateStore(updStore) }
})


window.addEventListener('beforeunload', () => {
	localStorage.setItem(STORE_KEY, JSON.stringify(getData()) || {})
})