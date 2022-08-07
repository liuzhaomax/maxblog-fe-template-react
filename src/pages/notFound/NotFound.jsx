import React from "react"
import NoFound from "antd/es/result/noFound"
import {Button} from "antd"
import {withRouter} from "react-router-dom"

class NotFound extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			secondsToGo: 5,
			timer: null,
			timerOut: null,
		}
	}

	componentDidMount() {
		this.setState({
			timer: setInterval(() => {
				this.setState({
					secondsToGo: this.state.secondsToGo - 1
				})
			}, 1000),
			timerOut: setTimeout(() => {
				this.props.history.goBack()
			}, this.state.secondsToGo * 1000)
		})
	}

	componentWillUnmount() {
		clearTimeout(this.state.timerOut)
		clearInterval(this.state.timer)
	}

	onClickGoBack = () => {
		this.props.history.goBack()
	}

	render() {
		return (
			<div className="NotFound">
				<h3>Your page is not found. Code: 404.</h3>
				<NoFound/>
				<p>Will jump to the previous page after <span id="nf-cound-down">{this.state.secondsToGo}</span> second(s).</p>
				<Button type="primary" onClick={this.onClickGoBack}>Go Back</Button>
			</div>
		)
	}
}

export default withRouter(NotFound)
