import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './breadcrumb';


function mainNav2(props) {
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
                            <li class="nav-item has-child">
                                <a class="nav-link" href="#">Listing</a>
                                {/* <!-- 1st level --> */}
                                <ul class="child">
                                    <li class="nav-item has-child">
                                        <a href="#" class="nav-link">Grid</a>
                                        {/* <!-- 2nd level --> */}
                                        <ul class="child">
                                            <li class="nav-item">
                                                <a href="listing-grid-full-width.html" class="nav-link">Full Width</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="listing-grid-sidebar.html" class="nav-link">With Sidebar</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="listing-grid-compact-sidebar.html" class="nav-link">Compact With Sidebar</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="listing-grid-compact-full-width.html" class="nav-link">Compact Full Width</a>
                                            </li>
                                        </ul>
                                        {/* <!-- end 2nd level --> */}
                                    </li>
                                    <li class="nav-item has-child">
                                        <a href="#" class="nav-link">List</a>
                                        {/* <!-- 2nd level --> */}
                                        <ul class="child">
                                            <li class="nav-item">
                                                <a href="listing-list-full-width.html" class="nav-link">Full Width</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="listing-list-sidebar.html" class="nav-link">With Sidebar</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="listing-list-compact-sidebar.html" class="nav-link">Compact With Sidebar</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="listing-list-compact-full-width.html" class="nav-link">Compact Full Width</a>
                                            </li>
                                        </ul>
                                        {/* <!-- end 2nd level --> */}
                                    </li>
                                    <li class="nav-item has-child">
                                        <a href="#" class="nav-link">Masonry</a>
                                        {/* <!-- 2nd level --> */}
                                        <ul class="child">
                                            <li class="nav-item">
                                                <a href="listing-masonry-full-width.html" class="nav-link">Full Width</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="listing-masonry-sidebar.html" class="nav-link">With Sidebar</a>
                                            </li>
                                        </ul>
                                        {/* <!-- end 2nd level --> */}
                                    </li>
                                    <li class="nav-item has-child">
                                        <a href="#" class="nav-link">Single</a>
                                        {/* <!-- 2nd level --> */}
                                        <ul class="child">
                                            <li class="nav-item">
                                                <a href="single-listing-1.html" class="nav-link">Single 1</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="single-listing-2.html" class="nav-link">Single 2</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="single-listing-3.html" class="nav-link">Single 3</a>
                                            </li>
                                        </ul>
                                        {/* <!-- end 2nd level --> */}
                                    </li>
                                </ul>
                                {/* <!-- end 1st level --> */}
                            </li>
                            <li class="nav-item has-child">
                                <a class="nav-link" href="#">Pages</a>
                                {/* <!-- 2nd level --> */}
                                <ul class="child">
                                    <li class="nav-item">
                                        <a href="sellers.html" class="nav-link">Sellers</a>
                                    </li>
                                    <li class="nav-item has-child">
                                        <a href="#" class="nav-link">Seller Detail</a>
                                        {/* <!-- 3rd level --> */}
                                        <ul class="child">
                                            <li class="nav-item">
                                                <a href="seller-detail-1.html" class="nav-link">Seller Detail
                                        1</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="seller-detail-2.html" class="nav-link">Seller Detail
                                        2</a>
                                            </li>
                                        </ul>
                                        {/* <!-- end 3rd level --> */}
                                    </li>
                                    <li class="nav-item">
                                        <a href="blog.html" class="nav-link">Blog</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="blog-post.html" class="nav-link">Blog Post</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href={`${process.env.PUBLIC_URL}/submit-ad`} class="nav-link">Submit Ad</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pricing.html" class="nav-link">Pricing</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="faq.html" class="nav-link">FAQ</a>
                                    </li>
                                </ul>
                                {/* <!-- end 2nd level --> */}
                            </li>
                            <li class="nav-item has-child">
                                <a class="nav-link" href="#">User</a>
                                {/* <!--1st level --> */}
                                <ul class="child">
                                    <li class="nav-item has-child">
                                        <a href="#" class="nav-link">User Panel</a>
                                        <ul class="child">
                                            <li class="nav-item">
                                                <Link to={`${process.env.PUBLIC_URL}/my-profile`} class="nav-link">My Profile</Link>
                                            </li>
                                            <li class="nav-item">
                                                <a href="my-ads.html" class="nav-link">My Ads</a>
                                            </li>
                                            <li class="nav-item">
                                                <Link to={`${process.env.PUBLIC_URL}/change-password`} class="nav-link">Change
                                                            Password</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link to={`${process.env.PUBLIC_URL}/login`} class="nav-link">Login</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link to={`${process.env.PUBLIC_URL}/sign-up`} class="nav-link">Sign Up</Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item">
                                        <a href="elements.html" class="nav-link">Elements</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="typography.html" class="nav-link">Typography</a>
                                    </li>
                                    <li class="nav-item has-child">
                                        <a href="#" class="nav-link">Nested Navigation</a>
                                        {/* <!--2nd level --> */}
                                        <ul class="child">
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">Level 2</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">Level 2</a>
                                            </li>
                                            <li class="nav-item has-child">
                                                <a href="#" class="nav-link">Level 2</a>
                                                {/* <!--3rd level --> */}
                                                <ul class="child">
                                                    <li class="nav-item has-child">
                                                        <a href="#" class="nav-link">Level 3</a>
                                                        {/* <!--4th level --> */}
                                                        <ul class="child">
                                                            <li class="nav-item">
                                                                <a href="#" class="nav-link">Level 4</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a href="#" class="nav-link">Level 4</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a href="#" class="nav-link">Level 4</a>
                                                            </li>
                                                        </ul>
                                                        {/* <!-- end 4th level--> */}
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="#" class="nav-link">Level 3</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="#" class="nav-link">Level 3</a>
                                                    </li>
                                                </ul>
                                                {/* <!--end 3rd level--> */}
                                            </li>
                                        </ul>
                                        {/* <!-- end 2nd level --> */}
                                    </li>
                                    <li class="nav-item">
                                        <a href="image-header.html" class="nav-link">Image Header</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="messaging.html" class="nav-link">Messages</a>
                                    </li>
                                </ul>
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
                    <a href="#collapseMainSearchForm" class="main-search-form-toggle" data-toggle="collapse" aria-expanded="false" aria-controls="collapseMainSearchForm">
                        <i class="fa fa-search"></i>
                        <i class="fa fa-close"></i>
                    </a>
                    {/* <!--end main-search-form-toggle--> */}
                </nav>
                {/* <!--end navbar--> */}{console.log(props.pathtitle)}
                <Breadcrumb title={props.pathtitle} parent={props.parent} />
                {/* <!--end breadcrumb--> */}
            </div>
            {/* <!--end container--> */}
        </div>

    );
}

export default mainNav2;