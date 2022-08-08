import React from "react"
import "./MainLayout.css"
import {Outlet} from "react-router-dom"
// import MainNav from "./MainNav"
// import Footer from "./Footer"

class MainLayout extends React.Component {

	componentDidMount() {
		// lztodo 请求数据
	}

	render() {
		return (
			<div className="MainLayout">
				{/*<MainNav/>*/}
				<Outlet/>
				{/*<Footer/>*/}
			</div>
		)
	}
}

export default MainLayout

