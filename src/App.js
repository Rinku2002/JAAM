import './App.css';
import {Routes,Route, Link } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Contactus from './components/contactus';
import Courses from './components/courses';
import Course from './components/course';
import Signup from './components/form';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouseUser,faGraduationCap,faAddressBook,faUser } from '@fortawesome/free-solid-svg-icons'
function App() {
  let ui=useSelector(state=>state.ui)
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg w-sm-75 mx-auto">
      <div className="container-fluid">
      <Link className="nav-link active h1 text-white nav" to="/"><FontAwesomeIcon icon={faHouseUser} /> Home</Link>
      <div className="d-flex">
      <form className="d-flex">
        <input className="form-control me-2 w-lg-25" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-lg-auto me-3">
          <li className="nav-item">
            <Link className="nav-link active nav" to="/courses"><FontAwesomeIcon icon={faGraduationCap}/ > All Courses</Link>
          </li>
          <li className="nav-item">
          </li>
          <li className="nav-item">
            <Link className="nav-link active nav" to="/contactus"><FontAwesomeIcon icon={faAddressBook}/ > Contact us</Link>
          </li>
          <li className="nav-item">
            { ui.length==0?
              <Link className="nav-link active nav" to="/login"><FontAwesomeIcon icon={faUser}/ > Login</Link>:
              <Link className="nav-link active nav" to="/login"><FontAwesomeIcon icon={faUser}/ > {ui[0].username}</Link>
            }
          </li>
        </ul>
      </div>
      </div>
      </nav>



      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/courses" element={<Courses />}/>
        <Route path="course" element={<Course />} />
        <Route path="/contactus" element={<Contactus />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="signup" element={<Signup />} />
      </Routes>

    </div>
  );
}

export default App;
