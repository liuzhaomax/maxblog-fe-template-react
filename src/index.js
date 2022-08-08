import React from "react"
import {createRoot} from "react-dom/client"
import "./index.css"
import App from "./app/App"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import rootReducer from "./state/reducers"
import configJson from "./config/config.json"
import axios from "axios"
import config from "./config/config"
// import logger from "redux-logger"

// https upgrading config
if (configJson.run_mode === "release") {
	const head = document.getElementsByTagName("head")[0]
	const https = document.createElement("meta")
	https.setAttribute("http-equiv", "Content-Security-Policy")
	https.setAttribute("content", "upgrade-insecure-requests")
	head.appendChild(https)
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

axios.defaults.baseURL = config.beBaseUrl

const ROOT_ELEM = document.getElementById("root")
const ROOT = createRoot(ROOT_ELEM)
ROOT.render(
	<Provider store={store}>
		<App store={store}/>
	</Provider>
)