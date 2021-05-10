import React from 'react';
import { Link } from 'react-router-dom';

function MainNav(props) {
    return (
        <div class="main-navigation">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
                    <a class="navbar-brand" href="/">
                        <img src="assets/icons/default.png" alt="" />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbar">
                        {/* <!--Main navigation list--> */}
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href={`${process.env.PUBLIC_URL}/Professional`}>Professionals</a>
                                {/* <!-- 1st level --> */}
                                    
                            </li>
                            

                            <li class="nav-item">
                                <a class="nav-link" href={`${process.env.PUBLIC_URL}/Rooms`}>Rooms</a>
                            </li> 
                            <li class="nav-item" id="profile-menu">
                                <a class="nav-link" href={`${process.env.PUBLIC_URL}/my-profile`}>My Profile</a>
                            </li> 

                          <li class="nav-item">
                                <a class="nav-link" href={`${process.env.PUBLIC_URL}/team`}>Team</a>
                            </li>
                            {/* <li class="nav-item">
                                <Link to={`${process.env.PUBLIC_URL}/submit-ad`} class="btn btn-primary text-caps btn-rounded btn-framed">Submit Ad</Link>
                            </li> */}
                        </ul>
                        {/* <!--Main navigation list--> */}
                    </div>
                    {/* <!--end navbar-collapse--> */}
                </nav>
                {/* <!--end navbar--> */}
            </div>
            {/* <!--end container--> */}
        </div>
    );
}

export default MainNav;