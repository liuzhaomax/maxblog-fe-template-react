import React from "react"
import {Route} from "react-router-dom"
import HomeLayout from "../layouts/HomeLayout"

class HomeRoute extends React.Component {
	render() {
		let { component: Component, ...rest} = this.props
		return <Route {...rest} render={(props) => ( <HomeLayout {...props} component={Component}/> )} exact/>
	}
}

export default HomeRoute