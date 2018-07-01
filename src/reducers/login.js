import { SAVE_SESSION_PERSISTANCE, RECEIVED_CEK_TOKEN  } from '../constants/processor'

export const sessionPersistance = (state = {}, action) => {
	switch (action.type) {
		case SAVE_SESSION_PERSISTANCE:
			return action.payload
		default:
			return state
	}
}

export const resultCekToken = (state = {}, action) => {
	switch (action.type) {
		case RECEIVED_CEK_TOKEN:
			return action.payload
		default:
			return state
	}
}