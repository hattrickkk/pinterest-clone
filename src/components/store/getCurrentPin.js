import { CURRENT_PIN_KEY } from "../constants"

export const getCurentPin = () => {
	return JSON.parse(localStorage.getItem(CURRENT_PIN_KEY))
}