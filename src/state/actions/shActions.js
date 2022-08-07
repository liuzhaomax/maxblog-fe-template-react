import {MAP_LOADING} from "../../config/constants"

export const changeMapLoadingStatus = bool => {
	return dispatch => {
		return dispatch(toggleMapLoadingStatus(bool))
	}
}

export const toggleMapLoadingStatus = mapIsLoading => {
	return {
		type: MAP_LOADING,
		mapIsLoading,
	}
}