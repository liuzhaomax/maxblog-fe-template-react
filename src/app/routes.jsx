import React from "react"
import {Route, Routes} from "react-router-dom"
import NotFoundRoute from "./NotFoundRoute"
import NotFound from "../pages/notFound/NotFound"
import HomeRoute from "./HomeRoute"
import MainLayoutRoute from "./MainLayoutRoute"
import Index from "../pages/index/Index"
import Home from "../pages/home/Home"
import {SERVICE_NAME} from "../config/constants"

const MODULE_NAME_PATH = SERVICE_NAME.MODULE_NAME.PATH

export default (
	<Routes>
		<Route path="/" component={ Index } />
		<HomeRoute path="/home" component={ Home } />
		<MainLayoutRoute path={MODULE_NAME_PATH} component={ NotFound } />
		<NotFoundRoute component={NotFound} />
	</Routes>
)