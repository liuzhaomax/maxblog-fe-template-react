import axios from "axios"

export const getReqBlogList = path => {
	return dispatch => {
		return {
			promise: axios.get(path),
			dispatch
		}
	}
}

export const getReqBlog = blogIdPath => {
	return dispatch => {
		return {
			promise: axios.get(blogIdPath),
			dispatch
		}
	}
}