import React from "react"
import {Route, withRouter} from "react-router-dom"

class NotFoundRoute extends React.Component {
	render() {
		let { component: Component, ...rest} = this.props
		return <Route {...rest} render={(props) => ( <Component {...props} /> )} exact/>
	}
}

export default withRouter(NotFoundRoute)
