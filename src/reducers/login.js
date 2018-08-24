import { SAVE_SESSION_PERSISTANCE } from '../constants/processor'

//reducer for Session
export const sessionPersistance = (state = {}, action) => {
	switch (action.type) {
		case SAVE_SESSION_PERSISTANCE:
			return action.payload
		default:
			return state
	}
}