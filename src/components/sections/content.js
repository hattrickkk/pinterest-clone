import { createElement } from "../formElements/createElement"
import { createBoard } from "../pins/createBoard"
import { addPinToStore, getData } from "../store/store"
import { pinsUrl, STORE_KEY } from "../constants"


export const content = () => {
	let content = createElement('div', {
		classList: 'content',
	})


	fetch(pinsUrl)
		.then(response => response.json())
		.then(data => {

			// закинули в store (если пина там нет)  
			data.forEach((element) => {
				const hasPin = getData()['news'].find(elem => elem.id == element.id)
				if (!hasPin) {
					addPinToStore('news', element)
				}
			});


			localStorage.setItem(STORE_KEY, JSON.stringify(getData()))


			content.append(createBoard(data))
		})

	return content
}