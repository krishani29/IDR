import React from 'react';
import { Link } from 'react-router-dom';

function sidebar(props) {
    return (
        <div class="col-md-3">
            <nav class="nav flex-column side-nav">
                <Link class="nav-link active icon" to={`${process.env.PUBLIC_URL}/my-profile`}>
                    <i class="fa fa-user"></i>My Profile
                       </Link>
                <a class="nav-link icon" href="my-ads.html">
                    <i class="fa fa-heart"></i>My Ads Listing
                </a>
                <a class="nav-link icon" href="bookmarks.html">
                    <i class="fa fa-check"></i>Sold Items
                 </a>
                <a class="nav-link icon" href="change-password.html">
                    <i class="fa fa-cog"></i>Settings
                  </a>
                <Link class="nav-link icon" to={`${process.env.PUBLIC_URL}/change-password`} >
                    <i class="fa fa-recycle"></i>Change Password
              </Link>
            </nav>
        </div>
    );
}

export default sidebar;