import { RECEIVED_SCHEDULE_CAR, RECEIVED_SCHEDULE_MOT } from '../constants/processor'

export const schedulecar = (state = [], action) => {
	switch (action.type) {
		case RECEIVED_SCHEDULE_CAR:
			return action.payload
		default:
			return state
	}
}

export const schedulemot = (state = [], action) => {
	switch (action.type) {
		case RECEIVED_SCHEDULE_MOT:
			return action.payload
		default:
			return state
	}
}