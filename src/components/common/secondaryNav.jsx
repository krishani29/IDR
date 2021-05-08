import React from 'react';
import { Link } from 'react-router-dom';


function SecondaryNav(props) {
    return (
        <div class="secondary-navigation">
            <div class="container">
                <ul class="left">
                    <li>
                       <Link to={`${process.env.PUBLIC_URL}/InteriorDesigner-signup`}>
                            <i class="fa fa-user"></i>Become Professional
                                </Link>
                    </li>
                </ul>
                {/* <!--end left--> */}
                <ul class="right">
                   
                    <li>
                    <Link to={`${process.env.PUBLIC_URL}/login`} >
                            <i class="fa fa-sign-in"></i>Login
                            </Link>
                    </li>
                    <li>
                        <Link to={`${process.env.PUBLIC_URL}/sign-up`}>
                            <i class="fa fa-pencil-square-o"></i>Sign Up
                                </Link>
                    </li>
                </ul>
                {/* <!--end right--> */}
            </div>
            {/* <!--end container--> */}
        </div>


    );
}

export default SecondaryNav;