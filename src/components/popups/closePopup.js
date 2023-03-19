export const closePopup = (elem) => {
	const popup = elem
	popup.classList.remove('open')
	document.body.classList.remove('lock')
}