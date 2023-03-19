export const createElement = (tagName, attributes) => {
	const elem = document.createElement(tagName)

	for (attr in attributes) {
		if (attr === 'childrens') {
			elem.append(...attributes[attr])
			continue
		}

		if (attr == 'for') {
			elem.setAttribute('for', attributes[attr])
			continue
		}

		if (!attr) {
			continue
		}

		elem[attr] = attributes[attr]
	}

	return elem
}
