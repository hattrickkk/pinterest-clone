import { complainsUrl } from "./constants"
export const getPostRequest = (obj) => {
	const postOptions = {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify(obj)
	}

	return new Request(complainsUrl, postOptions)
}