import React from "react"
import "./MainNav.css"
import {Menu} from "antd"
import { MenuOutlined } from "@ant-design/icons"
import { HOME, COMPONENT } from "../config/constants"

class MainNav extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			current: "1",
			menu: null,
		}
	}

	async componentDidMount() {
		await this.setState({current: this.searchKey()})
		await this.scrollToTop()
		await this.menuHandler()
		await this.listenWindowSize()
	}

	listenWindowSize = () => {
		window.addEventListener("resize", this.menuHandler.bind(this))
	}

	menuHandler = () => {
		if (document.body.clientWidth >= 1020) {
			this.setState({
				menu: (
					<Menu id="main-nav-menu" className="menu"
						onClick={this.toggleNav}
						selectedKeys={[this.state.current]}
						mode={"horizontal"}
						key="nav-menu-without-sub"
					>
						<Menu.Item className="menu-item" key="0"> {HOME.NAME} </Menu.Item>
						<Menu.Item className="menu-item" key="1"> {COMPONENT.NAME} </Menu.Item>
					</Menu>
				)
			})
		} else {
			this.setState({
				menu: (
					<Menu id="main-nav-menu" className="menu"
						onClick={this.toggleNav}
						selectedKeys={[this.state.current]}
						mode={"horizontal"}
						key="nav-menu-with-sub"
					>
						<Menu.SubMenu key="SubMenu" icon={<MenuOutlined className="submenu-icon"/>}>
							<Menu.Item className="menu-item" key="0"> {HOME.NAME} </Menu.Item>
							<Menu.Item className="menu-item" key="1"> {COMPONENT.NAME} </Menu.Item>
						</Menu.SubMenu>
					</Menu>
				)
			})
		}
	}

	scrollToTop = () => {
		let plantHub = document.getElementById("PlantHub")
		let statHub = document.getElementById("StatHub")
		let getInvolved = document.getElementById("GetInvolved")
		let blog = document.getElementById("Blog")
		let about = document.getElementById("About")
		if (plantHub) {
			plantHub.scrollIntoView(true)
		} else if (statHub) {
			statHub.scrollIntoView(true)
		} else if (getInvolved) {
			getInvolved.scrollIntoView(true)
		} else if (blog) {
			blog.scrollIntoView(true)
		} else if (about) {
			about.scrollIntoView(true)
		}
	}

	// searchKey = () => {
	// 	let result
	// 	let recordPath
	// 	let realPath
	// 	for (const key in SERVICE_NAME) {
	// 		if (SERVICE_NAME[key] instanceof Object) {
	// 			recordPath = SERVICE_NAME[key].PATH.split("/")[1]
	// 			realPath = window.location.pathname.split("/")[1]
	// 			if (recordPath === realPath) {
	// 				result = key
	// 				break
	// 			}
	// 		}
	// 	}
	// 	return result.slice(-1)
	// }

	jumpToPath = path => {
		this.props.history.push(path)
	}

	// toggleNav = e => {
	// 	this.setState({ current: e.key })
	// 	this.state.menu.props.selectedKeys[0] = e.key  // actual working codes
	// 	let path
	// 	if (e.key === "0") {
	// 		this.jumpToPath("/home")
	// 	} else {
	// 		path = SERVICE_NAME["MODULE_" + e.key].PATH
	// 		this.jumpToPath(path)
	// 	}
	// 	this.scrollToTop()
	// }

	render() {
		return (
			<div className="MainNav">
				<div id="main-nav-logo" className="logo" onClick={this.jumpToPath.bind(this, "/home")}/>
				{this.state.menu}
			</div>
		)
	}
}

export default MainNav