import { createElement } from "./createElement"

export const createBtn = (name, cb = null) => {
	const btn = createElement('input', {
		classList: 'button',
		type: 'button',
		value: name
	})

	btn.addEventListener('click', cb)
	return btn
}