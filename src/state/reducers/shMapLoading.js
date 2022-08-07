import {MAP_LOADING} from "../../config/constants"

const initialState = {
	mapIsLoading: false,
}

const shMapLoading = (state=initialState, action) => {
	switch (action.type) {
	case MAP_LOADING:
		console.log(action.mapIsLoading)
		return {
			mapIsLoading: action.mapIsLoading,
		}
	default:
		return state
	}
}

export default shMapLoading
