import { RECEIVED_ADM_FEE } from '../constants/processor'

export const receivedadmfee = (state = [], action) => {
	switch (action.type) {
		case RECEIVED_ADM_FEE:
			return action.payload
		default:
			return state
	}
}