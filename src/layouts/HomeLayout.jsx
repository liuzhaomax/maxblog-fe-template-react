import React from "react"
import "./HomeLayout.css"
import HomeNav from "./HomeNav"
import bgSky from "../assets/forest/sky.png"
import bgBackRock from "../assets/forest/back_rock.png"
import bgBridge from "../assets/forest/bridge.png"
import bgFrontRock from "../assets/forest/front_rock.png"
import {Button} from "antd"
import Footer from "./Footer"

class HomeLayout extends React.Component {

	componentDidMount() {
		let sky = document.getElementById("sky")
		let backRock = document.getElementById("back-rock")
		let bridge = document.getElementById("bridge")
		let explore = document.getElementById("explore")
		let text = document.getElementById("text")
		let slogan1 = document.getElementById("slogan1")
		let slogan2 = document.getElementById("slogan2")
		let instruction = document.getElementById("instruction")
		window.addEventListener("scroll", () => {
			let value = window.scrollY
			sky.style.top = value * 0.5 + "px"
			backRock.style.top = value * 0.3 + "px"
			bridge.style.top = value * 0.5 + "px"
			text.style.marginRight = value * 4 + "px"
			text.style.marginTop = value * 1.5 - 420 + "px"
			slogan1.style.marginLeft = value * 4 + "px"
			slogan1.style.marginTop = value * 1.5 - 250 + "px"
			slogan2.style.marginLeft = value * 4 + "px"
			slogan2.style.marginTop = value * 1.5 - 160 + "px"
			instruction.style.marginTop = value * 1.5 - 90 + "px"
			explore.style.marginTop = value * 1.5 + 30 + "px"
		})
	}

	mousemove = e => {
		let sky = document.getElementById("sky")
		let backRock = document.getElementById("back-rock")
		e.mx = e.pageX || e.clientX + document.body.scrollLeft
		let windowWidth = document.body.clientWidth
		let center = windowWidth / 2
		backRock.style.left = (center - e.mx)/5 * 0.1 + "px"
		sky.style.left = (center - e.mx)/5 * 0.18 + "px"
	}

	explore = () => {
		document.getElementById("HomeOverview").scrollIntoView(true)
	}

	render() {
		let { component: Component } = this.props
		return (
			<div className="HomeLayout" onMouseMove={this.mousemove}>
				<HomeNav/>
				<section id="parallax-compo">
					<img id="sky" src={bgSky} alt="sky img" data-depth="0.03"/>
					<img id="back-rock" src={bgBackRock} alt="back rock img" data-depth=".05"/>
					<h4 id="slogan1" data-depth="0">SAVING RARE PLANTS</h4>
					<h4 id="slogan2" data-depth="0">FOR FUTURE GENERATIONS</h4>
					<h6 id="instruction" data-depth="0">Know more about the plants in Australia</h6>
					<Button id="explore" shape="round" onClick={this.explore} data-depth="0">Explore</Button>
					<img id="bridge" src={bgBridge} alt="bridge img" data-depth="0"/>
					<h3 id="text" data-depth="0">Conservation of Endangered Plants</h3>
					<img id="front-rock" src={bgFrontRock} alt="front rock img" data-depth=".01"/>
				</section>
				<Component/>
				<Footer/>
			</div>
		)
	}
}

export default HomeLayout

