import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Addcontact from './addcontact'


const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Welcome To My Contact App</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<Link to="/addcontact"> <button type="button" class="btn btn-success" render={() => <Addcontact />} > Add Contact</button> </Link>
		</div>
	);
};

export default Main;
