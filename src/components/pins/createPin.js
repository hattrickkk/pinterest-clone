import { createElement } from "../formElements/createElement"
import { divWrapper } from "../formElements/divWrapper"
import { getRandomsize } from "./getRandomSize"

const createPinInfo = object => {
	const avatar = createElement('img', {
		src: object.avatar
	})
	const author = createElement('p', {
		textContent: object.author
	})
	const title = createElement('p', {
		textContent: object.name
	})

	const wrappedAuthorArray = divWrapper([avatar, author], ['pin__author-img', 'pin__author-name'])
	const authorContainer = createElement('div', {
		classList: 'pin__author',
		childrens: [...wrappedAuthorArray]
	})

	const wrappedInfo = divWrapper([title], ['pin__title'])
	const info = createElement('div', {
		classList: 'pin__info',
		childrens: [...wrappedInfo, authorContainer]
	})
	return info
}


const createPinPhoto = object => {
	const rand = Math.random()
	const photo = createElement('img', {
		src: `${object.photo}?=${rand}`
	})

	const addBtn = createElement('div', {
		classList: 'pin__button popup-link',
		id: 'pin-popup',
		childrens: [createElement('span')]
	})

	const photoDiv = createElement('div', {
		classList: 'pin__photo',
		childrens: [photo, addBtn]
	})
	return photoDiv
}

export const createPin = (object) => {
	const info = createPinInfo(object)
	const photoBlock = createPinPhoto(object)

	const pinInner = createElement('div', {
		classList: 'pin__inner',
		childrens: [photoBlock, info]
	})

	const size = getRandomsize()
	const pin = createElement('div', {
		classList: `pin ${size}`,
		id: object.id,
		childrens: [pinInner]
	})

	return pin
}