import React from 'react';
import { Link } from 'react-router-dom';

function MainNav(props) {
    return (
        <div class="main-navigation">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
                    <a class="navbar-brand" href="index.html">
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
                                <a class="nav-link" href="#">Professionals</a>
                                {/* <!-- 1st level --> */}
                                    
                            </li>

                            <li class="nav-item has-child">
                                <a class="nav-link" href="#">Rooms</a>
                                {/* <!-- 2nd level --> */}
                                <ul class="child">
                                    <li class="nav-item">
                                        <a href="sellers.html" class="nav-link">Living Room</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="sellers.html" class="nav-link">Bedrooms</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="sellers.html" class="nav-link">Kitchen</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="sellers.html" class="nav-link">Balcony</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="sellers.html" class="nav-link">Garden</a>
                                    </li>
                                    <li class="nav-item has-child">
                                        <a href="#" class="nav-link">Restraunt</a>
                                        {/* <!-- 3rd level --> */}
                                        <ul class="child">
                                            <li class="nav-item">
                                                <a href="seller-detail-1.html" class="nav-link">Entrance
                                                            </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="seller-detail-2.html" class="nav-link">Dining area
                                                            </a>
                                            </li>
                                        </ul>
                                        {/* <!-- end 3rd level --> */}
                                    </li>
                                   
                                </ul>
                                {/* <!-- end 2nd level --> */}
                            </li>
                          <li class="nav-item">
                                <a class="nav-link" href="contact.html">Contact</a>
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