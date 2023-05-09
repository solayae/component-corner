import {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useLocation} from 'react-router-dom';

<<<<<<< HEAD
import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import {  Link, useLocation } from "react-router-dom";


import { logout } from "../../redux/actions";
import { clearMessage } from "../../redux/actions";
import EventBus from "../../common/EventBus";


=======
import {logout} from '../../redux/actions';
import {clearMessage} from '../../redux/actions';
import EventBus from '../../common/EventBus';
>>>>>>> 4827aa5a03443d463fefe8713dc5a3d64dadfa81

const NavBar = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
<<<<<<< HEAD
  //const { user: currentUser } = useSelector((state) => state.user);
=======
  const {user: currentUser} = useSelector((state) => state.user);
>>>>>>> 4827aa5a03443d463fefe8713dc5a3d64dadfa81
  const dispatch = useDispatch();
  let location = useLocation();
  const user = localStorage.getItem('user')
  useEffect(() => {
<<<<<<< HEAD
    if (["/", "/home"].includes(location.pathname)) {
=======
    if (['/home', '/register'].includes(location.pathname)) {
>>>>>>> 4827aa5a03443d463fefe8713dc5a3d64dadfa81
      dispatch(clearMessage()); // clear message when changing location
    }
  }, [dispatch, location]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
<<<<<<< HEAD
    if (user.roles) {
      setShowModeratorBoard(user?.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user?.roles.includes("ROLE_ADMIN"));
=======
    if (currentUser?.roles) {
      setShowModeratorBoard(currentUser?.roles.includes('ROLE_MODERATOR'));
      setShowAdminBoard(currentUser?.roles.includes('ROLE_ADMIN'));
>>>>>>> 4827aa5a03443d463fefe8713dc5a3d64dadfa81
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on('logout', () => {
      logOut();
    });

    return () => {
      EventBus.remove('logout');
    };
  }, [user, logOut]);

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={'/'} className="navbar-brand">
          Componentes Corner - test navBar
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={'/user'} className="nav-link">
              Inicio
            </Link>
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={'/mod'} className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={'/admin'} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

<<<<<<< HEAD
            {user && (
                <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                    Usuario
                </Link>
                </li>
            )}
            </div>

            {user ? (
            <div className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                   Mi perfil
                </Link>
                </li>
                <li className="nav-item">
                <a href="/home" className="nav-link" onClick={logOut}>
                    Cerrar Sesión
                </a>
                </li>
            </div>
            ) : (
            <div className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                    Login
                </Link>
                </li>
=======
          {currentUser && (
            <li className="nav-item">
              <Link to={'/user'} className="nav-link">
                Usuario
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={'/profile'} className="nav-link">
                Mi perfil
              </Link>
            </li>
            <li className="nav-item">
              <a href="/home" className="nav-link" onClick={logOut}>
                Cerrar Sesión
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={'/home'} className="nav-link">
                Login
              </Link>
            </li>
>>>>>>> 4827aa5a03443d463fefe8713dc5a3d64dadfa81

            <li className="nav-item">
              <Link to={'/home'} className="nav-link">
                Sign Up
              </Link>
              <a href="/home" className="nav-link" onClick={logOut}>
                Cerrar Sesión
              </a>
            </li>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
