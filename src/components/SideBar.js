import React from 'react';
import image from '../assets/images/logo-DH.png';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import SearchMovies from './SearchMovies';
import NotFound from './NotFound';
import {Link, Route, Routes} from 'react-router-dom';

import { Profile } from './Profile';
import { useAuth0 } from '@auth0/auth0-react';

function SideBar(){
    
    const {isAuthenticated} = useAuth0();

    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Disbyte</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Perfil -->*/}
                {
                    isAuthenticated ? 
                    <li className="nav-item nav-link">
                        <Link className="nav-link" to="/Profile">
                            <i className="fas fa-user"></i>
                            <span>Profile</span>
                        </Link>
                    </li>
                :
                    ''
                }

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ContentRowMovies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></Link>
                </li>
                
                {/*<!-- Buscador -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/SearchMovies">
                        <i className="fas fa-search"></i>
                        <span>Search</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            <Routes>
                <Route exactly={true} path="/" element={<ContentWrapper />}> </Route>
                <Route path="/GenresInDb" element={<GenresInDb />}> </Route>
                <Route path="/LastMovieInDb" element={<LastMovieInDb />}> </Route>
                <Route path="/ContentRowMovies" element={<ContentRowMovies />}> </Route>
                <Route path="/SearchMovies" element={<SearchMovies />}> </Route>
                <Route path="/Profile" element={<Profile />}> </Route>
                <Route component={NotFound} />
            </Routes>
            
        </React.Fragment>
    )
}
export default SideBar;