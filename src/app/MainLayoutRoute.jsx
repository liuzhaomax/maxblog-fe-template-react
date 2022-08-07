import React from "react"
import {Route} from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

class MainLayoutRoute extends React.Component {
	render() {
		let { component: Component, ...rest} = this.props
		return <Route {...rest} render={(props) => ( <MainLayout {...props} component={Component}/> )} />
	}
}

export default MainLayoutRoute