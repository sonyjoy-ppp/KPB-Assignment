import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Addcontact from "./components/Main/addcontact";
import Contactlist from "./components/Main/contactlist";


function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/addcontact" exact element={<Addcontact/>} />
			<Route path="/contactlist" exact element={<Contactlist/>} />
		</Routes>
	);
}

export default App;
