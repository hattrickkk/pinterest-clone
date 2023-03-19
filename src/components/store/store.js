let store = {
	news: [],
	board1: [],
	board2: [],
	board3: [],
}

export const getData = () => {
	return store
}

export const addPinToStore = (arrayName, pin) => {
	getData()[arrayName].push(pin)
}

export const updateStore = newStore => {
	store = newStore
}