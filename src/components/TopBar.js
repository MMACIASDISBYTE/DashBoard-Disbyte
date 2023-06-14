import React from 'react';
import foto from '../assets/images/LoginLogoDisbyte.png';
import { useAuth0 } from '@auth0/auth0-react';
// import { Profile } from './Profile';
// import { useNavigate } from 'react-router-dom';

function TopBar() {

	const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

	// const ClickLogin = () => {
	// 	loginWithRedirect({
	// 		redirectUri: `${window.location.origin}/Profile`,
	// 	})
	// };

	// console.log(usuario, 'este es el usuario')
	return (
		<React.Fragment>
			{/*<!-- Topbar -->*/}
			<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

				{/*<!-- Sidebar Toggle (Topbar) -->*/}
				<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
					<i className="fa fa-bars"></i>
				</button>

			{
			isAuthenticated ?
				// SI ESTA AUTENTICADO MUESTRA
				(<>
					{/*<!-- Topbar Navbar -->*/}
					<ul className="navbar-nav ml-auto">

						{/*<!-- Nav Item - Alerts -->*/}
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
								<i className="fas fa-bell fa-fw"></i>
								{/*<!-- Counter - Alerts -->*/}
								<span className="badge badge-danger badge-counter">3+</span>
							</a>
						</li>

						{/*<!-- Nav Item - Messages -->*/}
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
								<i className="fas fa-envelope fa-fw"></i>
								{/*<!-- Counter - Messages -->*/}
								<span className="badge badge-danger badge-counter">7</span>
							</a>
						</li>

						<div className="topbar-divider d-none d-sm-block"></div>

						{/*<!-- Nav Item - User Information -->*/}
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/Profile" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small">{user.name}</span>
								<img className="img-profile rounded-circle" src={user.picture} alt={user.nickname} width="60" />
							</a>
						</li>

					</ul>
					<button className="btn btn-secondary" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LogOut</button>
					{/* <Profile user={user}/> */}
				</>)

				// SI NO ESTA AUTENTICADO MUESTRA
				:
				(<>
					{/*<!-- Topbar Navbar -->*/}
					<ul className="navbar-nav ml-auto">

						{/*<!-- Nav Item - Alerts -->*/}
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
								<i className="fas fa-bell fa-fw"></i>
								{/*<!-- Counter - Alerts -->*/}
								<span className="badge badge-danger badge-counter"></span>
							</a>
						</li>

						{/*<!-- Nav Item - Messages -->*/}
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
								<i className="fas fa-envelope fa-fw"></i>
								{/*<!-- Counter - Messages -->*/}
								<span className="badge badge-danger badge-counter"></span>
							</a>
						</li>

						<div className="topbar-divider d-none d-sm-block"></div>

						{/*<!-- Nav Item - User Information -->*/}
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small">Bienvenido Loggeate</span>
								<img className="img-profile rounded-circle" src={foto} alt="Jordan Walke - Creador de React" width="60" />
							</a>
						</li>

					</ul>
					<button className="btn btn-secondary" onClick={() => loginWithRedirect()}>Login</button>
				</>)
			}
			</nav>
			{/*<!-- End of Topbar -->*/}
		</React.Fragment>
	)
}

export default TopBar;