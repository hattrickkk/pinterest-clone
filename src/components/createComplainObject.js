export const createComplainObject = currrentPin => {
	const newObject = {
		'pin_id': currrentPin.id,
		complains: []
	}

	const checkboxes = document.querySelectorAll('.popop__checkbox')
	for (let i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked == true) {
			const checkboxId = checkboxes[i].id
			const label = document.querySelector(`label[for="${checkboxId}"]`)
			newObject.complains.push(label.textContent)
		}
	}

	return newObject
}