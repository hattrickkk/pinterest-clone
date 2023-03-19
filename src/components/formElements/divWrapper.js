import { createElement } from "./createElement"

export const divWrapper = (elements, classes) => {
	let wrappedArray = []

	for (let i = 0; i < elements.length; i++) {
		const wrappedElement = createElement('div', {
			classList: classes[i],
			childrens: [elements[i]],
		})
		wrappedArray.push(wrappedElement)
	}
	return wrappedArray
}