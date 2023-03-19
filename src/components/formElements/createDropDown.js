import { createElement } from "./createElement"

export const createDropDown = () => {

	// dropdown__select (выбранный элемент)
	const dropDownSelected = createElement('span', {
		textContent: 'Лента',
		classList: 'dropdown__selected'
	})
	const switcher = createElement('div', {
		classList: 'dropdown__switch'
	})
	const dropDownSelect = createElement('div', {
		classList: 'dropdown__select',
		childrens: [dropDownSelected, switcher]
	})


	// dropdown menu
	let options = []
	options.push(createElement('li', { textContent: 'Лента' }))
	for (let i = 1; i <= 3; i++) {
		const option = createElement('li', {
			textContent: `Доска №${i}`
		})
		options.push(option)
	}

	const menu = createElement('ul', {
		classList: 'dropdown__menu menu',
		childrens: [...options]
	})

	const dropdown = createElement('div', {
		classList: 'dropdown',
		childrens: [dropDownSelect, menu]
	})

	return dropdown
}