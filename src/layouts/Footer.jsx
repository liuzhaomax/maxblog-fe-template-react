import React from "react"
import "./Footer.css"
import logo from "../assets/logo_bottom_color.png"

class Footer extends React.Component {

	scrollToTop = () => {
		document.getElementById("parallax-compo").scrollIntoView(true)
	}

	jumpToAnchor = (path, id) => {
		this.props.history.push(path)
		setTimeout(() => {
			document.getElementById(id).scrollIntoView(true)
		}, 10)
		let menuItems = document.getElementsByClassName("menu-item")
		for (let i = 0; i < menuItems.length; i++) {
			menuItems[i].classList.remove("ant-menu-item-selected")
		}
		let moduleName = window.location.pathname.split("/").slice(-1)[0].toLowerCase()
		for (let i = 0; i < menuItems.length; i++) {
			let name = menuItems[i].getElementsByTagName("span")[0].innerText
				.split(" ").join("").toLowerCase()
			if (moduleName === name) {
				menuItems[i].classList.add("ant-menu-item-selected")
			}
		}
	}

	render() {
		return (
			<div className="Footer">
				<div id="footer-container">
					<div id="footer-upper-wrap">
						<img id="footer-logo" className="footer-upper-wrap" src={logo} alt={"logo"}/>
						<div className="footer-upper-nav">
							<h3 onClick={this.jumpToAnchor.bind(this,"/home","parallax-compo")}>Home</h3>
							<p onClick={this.jumpToAnchor.bind(this,"/home","HomeOverview")}>Plant Overview</p>
							<p onClick={this.jumpToAnchor.bind(this,"/home","HomeReason")}>Reason of Endangered</p>
							<p onClick={this.jumpToAnchor.bind(this,"/home","HomeTrend")}>Trend in Australia</p>
							<p onClick={this.jumpToAnchor.bind(this,"/home","HomeExtinct")}>Extinct Plants in AU</p>
						</div>
						<div className="footer-upper-nav">
							<h3 onClick={this.jumpToAnchor.bind(this,"/planthub","PlantHub")}>Plant Hub</h3>
							<h3 onClick={this.jumpToAnchor.bind(this,"/getinvolved","GetInvolved")}>Get Involved</h3>
							<h3 onClick={this.jumpToAnchor.bind(this,"/blog","Blog")}>Blog</h3>
							<h3 onClick={this.jumpToAnchor.bind(this,"/about","About")}>About</h3>
						</div>
						<div className="footer-upper-nav">
							<h3 onClick={this.jumpToAnchor.bind(this,"/stathub","StatHub")}>Stat Hub</h3>
							<p onClick={this.jumpToAnchor.bind(this,"/stathub/map","StatHub")}>Distribution Map</p>
							<p onClick={this.jumpToAnchor.bind(this,"/stathub/force","StatHub")}>Force Diagram</p>
							<p onClick={this.jumpToAnchor.bind(this,"/stathub/line","StatHub")}>Line Chart</p>
						</div>
						<div className="footer-upper-nav">
							<h3>Relevant Links</h3>
							<a href="https://admin.endangeredplantsau.ga">Admin CMS</a>
							<a href="https://mahara.infotech.monash.edu/view/view.php?id=56000">Mahara SM Page</a>
							<a href="https://mahara.infotech.monash.edu/view/view.php?id=56002">Mahara IM Page</a>
							<a href="https://monashie.leankit.com/board/1602422272">LeanKit Board</a>
						</div>
					</div>
					<hr/>
					<div id="footer-lower-wrap">
						<p>
                            Flora Protech is a non-profit corporation devoting to save endangered plants
                            through IT and machine learning technology in Australia. <br/>
                            Our vision is to arouse individual and social awareness of protecting the environment
                            through integrating and providing information about endangered and non-endangered plants.
						</p>
						<p>
                            All pictures are downloaded from copyright-free websites.
                            The data we have used are open-data sources.
						</p>
						<p>
                            Email: info@floraprotech.com
						</p>
						<p>
                            © Flora Protech Co., 2021. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer