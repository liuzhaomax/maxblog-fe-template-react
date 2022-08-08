import React from "react"
import {Route} from "react-router-dom"

function NotFoundRoute() {
	let { element: Component, ...rest} = this.props
	return <Route {...rest} render={(props) => ( <Component {...props} /> )} />
}

export default NotFoundRoute
