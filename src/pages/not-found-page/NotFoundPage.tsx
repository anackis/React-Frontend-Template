import { NavLink } from 'react-router-dom';
import './NotFoundPage.scss'; 

const NotFoundPage = () => {
	 return (
		<div className="not-found-page-component">
			<div className="not-found-page-notification">
				<div className="not-found-page-notification-wrapper">
					<h1>404</h1>
					<h2>Page not Found.</h2>
					<span>Return to a Home Page</span>
					<NavLink className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'} to="/">Home Page</NavLink>
				</div>
			</div>
		</div>
	 );
}

export default NotFoundPage;