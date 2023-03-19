import { divWrapper } from "./divWrapper"

export const createLimitingContainer = elem => {
	return divWrapper([elem], ['container'])
}