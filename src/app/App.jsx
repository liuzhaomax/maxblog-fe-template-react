import React from "react"
import "./App.css"
import {BrowserRouter as Router} from "react-router-dom"
import routes from "./routes"
// import { Input } from 'antd'
// import NotFoundRoute from "./NotFoundRoute";
// import NotFound from "../pages/notFound/NotFound";

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			pw: ""
		}
	}

	onPressEnter = e => {
		this.setState({
			pw: e.target.value
		})
		document.getElementById("app-locker-container").style.display = "none"
	}

	render() {
		return (
			<div id="App" className="App">
				{/*<div id="app-locker-container">*/}
				{/*    <Input id="app-locker"*/}
				{/*           style={{"width": "30vw", "margin": "30px auto"}}*/}
				{/*           placeholder="Please enter password to unlock the website."*/}
				{/*           autoComplete="off"*/}
				{/*           onPressEnter={this.onPressEnter}*/}
				{/*    />*/}
				{/*</div>*/}
				{/*<Router>*/}
				{/*    {*/}
				{/*        this.state.pw === "23" ?*/}
				{/*            routes*/}
				{/*            :*/}
				{/*            <NotFoundRoute component={ NotFound }/>*/}
				{/*    }*/}
				{/*</Router>*/}
				<Router>{ routes }</Router>
			</div>
		)
	}
}

export default App
