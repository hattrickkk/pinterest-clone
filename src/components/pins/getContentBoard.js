import { createBoard } from "./createBoard"
import { divWrapper } from "../formElements/divWrapper"

export const getContentBoard = (pinsAray, classNamee) => {
	const board = createBoard(pinsAray)
	board.classList.add(classNamee)

	const boardWrapped = divWrapper([board], ['content'])
	return boardWrapped
}

