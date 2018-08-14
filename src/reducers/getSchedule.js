import { RECEIVED_SCHEDULE_CAR, RECEIVED_SCHEDULE_MOT, RECEIVED_SCHEDULE_BY_EVENTID } from '../constants/processor'

export const schedulecar = (state = [], action) => {
	switch (action.type) {
		case RECEIVED_SCHEDULE_CAR:
			return action.payload
		default:
			return state
	}
}

export const schedulebyid = (state = [], action) => {
	switch (action.type) {
		case RECEIVED_SCHEDULE_BY_EVENTID:
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