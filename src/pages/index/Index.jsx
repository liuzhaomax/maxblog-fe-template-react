import React from "react"
import {Navigate} from "react-router-dom"

class Index extends React.Component {
	render() {
		return <Navigate to="/home" replace={true}/>
	}
}

export default Index
