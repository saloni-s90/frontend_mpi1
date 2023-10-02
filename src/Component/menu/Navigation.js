import React from 'react'
import './Navigation.css'
import img1 from '../../assests/images/asd.jpeg'
import { NavLink } from 'react-router-dom';


function Navigation() {

    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a className='logobar' href="#">
                        <img src={img1} alt="MPI" width="200" height="50" class="d-inline-block align-text-top lb" />
                    </a>

                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse nav1" id="navbarNavDropdown">
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <NavLink className="nav-link" to = '/' >Configuration </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to='/admin' className="nav-link" >Admin Panel</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to = '/billing'  className="nav-link" >Billing</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to = '/setting'  className="nav-link" >Setting</NavLink>
                            </li>
                        </ul>
                    </div> 
                </div>
            </nav>
        </div>
    )
}

export default Navigation
