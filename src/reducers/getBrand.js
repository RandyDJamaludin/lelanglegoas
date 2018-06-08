import { RECEIVED_BRAND } from '../constants/processor'

export const receivedbrand = (state = [], action) => {
	switch (action.type) {
		case RECEIVED_BRAND:
			return action.payload
		default:
			return state
	}
}