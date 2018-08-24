import { RECEIVED_BRAND } from '../constants/processor'

//reducer for List Brand
export const receivedbrand = (state = [], action) => {
	switch (action.type) {
		case RECEIVED_BRAND:
			return action.payload
		default:
			return state
	}
}