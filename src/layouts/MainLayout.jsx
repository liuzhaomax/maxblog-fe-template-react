import React from "react"
import "./MainLayout.css"
import MainNav from "./MainNav"
import Footer from "./Footer"

class MainLayout extends React.Component {

	componentDidMount() {
		// lztodo 请求数据
	}

	render() {
		let { component: Component } = this.props
		return (
			<div className="MainLayout">
				<MainNav/>
				<Component/>
				<Footer/>
			</div>
		)
	}
}

export default MainLayout

