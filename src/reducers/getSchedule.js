import { RECEIVED_SCHEDULE_CAR } from '../constants/processor'

export const schedulecar = (state = [], action) => {
	switch (action.type) {
		case RECEIVED_SCHEDULE_CAR:
			return action.payload
		default:
			return state
	}
}