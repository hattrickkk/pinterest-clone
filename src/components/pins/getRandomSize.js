
export const getRandomsize = () => {
	const num = Math.round(Math.random() * 2) + 1
	switch (num) {
		case 1:
			return 'small'
		case 2:
			return 'medium'
		case 3:
			return 'big'
		default:
			break;
	}
}