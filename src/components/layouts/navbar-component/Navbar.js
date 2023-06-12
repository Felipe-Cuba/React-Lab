import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  const lessonThreeRoutes = ['/gallery', '/todolist'];

  const lessonFourRoutes = [
    '/toolbar',
    '/memory-gallery',
    '/simple-counter',
    '/form-1',
    '/form-2',
    '/form-3',
    '/moving-dot',
  ];

  const lessonFiveRoutes = [
    '/form-quiz',
    '/form-ticket',
    '/accordion',
    '/menssenger',
  ];

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li
            className={`navbar-item ${
              location.pathname === '/' ? 'active' : ''
            }`}
          >
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>

          <li
            className={`navbar-item ${
              location.pathname === '/lesson-one' ? 'active' : ''
            }`}
          >
            <Link to="/lesson-one" className="navbar-link">
              Atividade 01
            </Link>
          </li>

          <li
            className={`navbar-item ${
              location.pathname === '/lesson-two' ? 'active' : ''
            }`}
          >
            <Link to="/lesson-two" className="navbar-link">
              Atividade 02
            </Link>
          </li>

          <li
            className={`navbar-item ${
              lessonThreeRoutes.includes(location.pathname) ? 'active' : ''
            }`}
          >
            <Link to="/gallery" className="navbar-link">
              Atividade 03
            </Link>
          </li>

          <li
            className={`navbar-item ${
              lessonFourRoutes.includes(location.pathname) ? 'active' : ''
            }`}
          >
            <Link to="/toolbar" className="navbar-link">
              Atividade 04
            </Link>
          </li>

          <li
            className={`navbar-item ${
              lessonFiveRoutes.includes(location.pathname) ? 'active' : ''
            }`}
          >
            <Link to="/form-quiz" className="navbar-link">
              Atividade 05
            </Link>
          </li>

          <li
            className={`navbar-item ${
              location.pathname === '/calculator' ? 'active' : ''
            }`}
          >
            <Link to="/calculator" className="navbar-link">
              Calculadora
            </Link>
          </li>

          <li
            className={`navbar-item ${
              location.pathname === '/memory-game' ? 'active' : ''
            }`}
          >
            <Link to="/memory-game" className="navbar-link">
              Jogo da memória
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
