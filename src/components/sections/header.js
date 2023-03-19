import { createDropDown } from "../formElements/createDropDown"
import { createElement } from "../formElements/createElement"
import { divWrapper } from "../formElements/divWrapper"
import { createLimitingContainer } from "../formElements/createLimitingContainer"


export const header = () => {
	// создание элементов (лого, поиск, список)
	const logo = createElement('img', {
		src: '/header__logo.0bd1a8b2.svg',
		// src: '../resources/images/header__logo.svg',
	})

	const logoLink = createElement('a', {
		href: '',
		childrens: [logo]
	})

	const search = createElement('input', {
		type: 'text',
		placeholder: 'Введите что-нибудь...',
		className: 'header__search-input'
	})
	const dropdown = createDropDown()

	// обернуть элементы в div
	const wrappedElements = divWrapper([
		logoLink,
		search,
		dropdown
	], [
		'header__logo',
		'header__search',
		'header__dropdown'
	])

	// создание header, header__inner и container
	const headerInner = createElement('div', {
		childrens: [...wrappedElements],
		className: 'header__inner',
	})

	// createLimitingContainer возвращает массив, поэтому ...
	const container = createLimitingContainer(headerInner)
	const header = createElement('div', {
		childrens: [...container],
		className: 'header',
	})

	return header
}