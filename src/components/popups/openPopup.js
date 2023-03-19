export const openPopup = (popunName, isBoard = false) => {
	const popup = document.querySelector(`.${popunName}`)
	popup.classList.add('open')
	document.body.classList.add('lock')

	if (popunName === 'complain-popup') {
		const items = document.querySelectorAll('.complain-list__item input')
		items.forEach(elem => {
			elem.checked = false
		})
	}

	if (!isBoard) {
		popup.classList.add('show-delete-btn')
	} else {
		popup.classList.remove('show-delete-btn')
	}
}