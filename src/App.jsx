import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from "aos"
import "aos/dist/aos.css"
import Login from "./components/Login"

import App2 from "./App2"
import ForgotPassword from "./components/ForgotPassword"
import App3 from "./App3"
import axios from "axios"
import Signup from "./components/SIgnup"




function App() {
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])

	const [user, setUser] = useState();
	useEffect(() => {
		axios.put('https://apiai-apii.vercel.app/kelas/updated')
		headers: {
			Authorization: `Berear ${localStorage.getItem('token')}`
		}
	})
	.then(res => {
		if(res.data.success) {
			setUser(res.data.user)
		}
	}).catch(err => {
		console.log(err)
	})

	return (
		<>
<BrowserRouter>
<Routes>

	<Route path = "/" element={<App3/>}></Route>
	<Route path = "/signup" element={<Signup/>}></Route>
	<Route path = "/login" element={<Login/>}></Route>
	<Route path = "/home" element={<App2/>}></Route>
	<Route path = "/forgotpassword" element={<ForgotPassword/>}></Route>
	
</Routes>
</BrowserRouter>
		</>
	)
}

export default App
