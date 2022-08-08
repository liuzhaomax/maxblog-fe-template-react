import React, {Suspense} from "react"
import { Routes, Route } from "react-router-dom"
import Index from "../pages/index/Index"
import NotFound from "../pages/notFound/NotFound"
import Home from "../pages/home/Home"
import HomeLayout from "../layouts/HomeLayout"
import {HOME, COMPONENT, MAIN_LAYOUT} from "../config/constants"

const lazyLoad = path => {
	const Comp = React.lazy(() => import(`../${path}`))
	return (
		<Suspense fallback={<>加载中...</>}>
			<Comp />
		</Suspense>
	)
}

export default (
	<Routes>
		<Route path="/" element={<Index/>}/>
		<Route element={<HomeLayout/>}>
			<Route path={HOME.PATH} element={<Home/>}/>
		</Route>
		<Route element={lazyLoad(MAIN_LAYOUT.FILE_PATH)}>
			<Route path={COMPONENT.PATH} element={lazyLoad(COMPONENT.FILE_PATH)}/>
		</Route>
		<Route path="*" element={<NotFound/>}/>
	</Routes>
)