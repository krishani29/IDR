import React from 'react';
import { Link } from 'react-router-dom';


function allCategories(props) {
    return (
        //  <!--============ Categories =============================================================================-->
         <section class="block allcategoryblock">
                <div class="container">
                    <h2>All Categories</h2>
                    <ul class="categories-list clearfix">
                        <li>
                            <i class="category-icon">
                                <img src="assets/icons/category-furniture-b.png" alt=""/>
                            </i>
                            <h3><Link to={`${process.env.PUBLIC_URL}/ads-listing`}>Furniture</Link></h3>
                            <div class="sub-categories">
                                <a href="#">Beds</a>
                                <a href="#">Sofas</a>
                                <a href="#">Garden</a>
                            </div>
                        </li>
                        {/* <!--end category item--> */}
                        <li>
                            <i class="category-icon">
                                <img src="assets/icons/category-pets-b.png" alt=""/>
                            </i>
                            <h3><Link to={`${process.env.PUBLIC_URL}/ads-listing`}>Pets</Link></h3>
                            <div class="sub-categories">
                                <a href="#">Dogs</a>
                                <a href="#">Cats</a>
                                <a href="#">Exotic</a>
                            </div>
                        </li>
                        {/* <!--end category item--> */}
                        <li>
                            <i class="category-icon">
                                <img src="assets/icons/category-real-estate-b.png" alt=""/>
                            </i>
                            <h3><a href={`${process.env.PUBLIC_URL}/ads-listing`}>Real Estate</a></h3>
                            <div class="sub-categories">
                                <a href="#">Houses</a>
                                <a href="#">Apartments</a>
                            </div>
                        </li>
                        {/* <!--end category item--> */}
                        <li>
                            <i class="category-icon">
                                <img src="assets/icons/category-jobs-b.png" alt=""/>
                            </i>
                            <h3><Link to={`${process.env.PUBLIC_URL}/ads-listing`}>Jobs</Link></h3>
                            <div class="sub-categories">
                                <a href="#">Find Job</a>
                                <a href="#">Offer Job</a>
                            </div>
                        </li>
                        {/* <!--end category item--> */}

                        <li>
                            <i class="category-icon">
                                <img src="assets/icons/category-cars-b.png" alt=""/>
                            </i>
                            <h3><Link to={`${process.env.PUBLIC_URL}/ads-listing`}>Car</Link></h3>
                            <div class="sub-categories">
                                <a href="#">New</a>
                                <a href="#">Used</a>
                                <a href="#">Rent</a>
                            </div>
                        </li>
                        {/* <!--end category item--> */}
                        <li>
                            <i class="category-icon">
                                <img src="assets/icons/category-mobile-b.png" alt=""/>
                            </i>
                            <h3><a href={`${process.env.PUBLIC_URL}/ads-listing`}>Mobile</a></h3>
                            <div class="sub-categories">
                                <a href="#">Apple</a>
                                <a href="#">Samsung</a>
                            </div>
                        </li>
                        {/* <!--end category item--> */}
                        <li>
                            <i class="category-icon">
                                <img src="assets/icons/category-cameras-b.png" alt=""/>
                            </i>
                            <h3><a href={`${process.env.PUBLIC_URL}/ads-listing`}>Cameras</a></h3>
                            <div class="sub-categories">
                                <a href="#">Photo</a>
                                <a href="#">Video</a>
                                <a href="#">Lenses</a>
                            </div>
                        </li>
                        {/* <!--end category item--> */}
                        <li>
                            <i class="category-icon">
                                <img src="assets/icons/category-sport-b.png" alt=""/>
                            </i>
                            <h3><a href={`${process.env.PUBLIC_URL}/ads-listing`}>Sport</a></h3>
                            <div class="sub-categories">
                                <a href="#">Ski</a>
                                <a href="#">Bike</a>
                                <a href="#">Hockey</a>
                            </div>
                        </li>
                        {/* <!--end category item--> */}

                        <li>
                            <i class="category-icon">
                                <img src="assets/icons/category-electro-b.png" alt=""/>
                            </i>
                            <h3><Link to={`${process.env.PUBLIC_URL}/ads-listing`}>Electro</Link></h3>
                            <div class="sub-categories">
                                <a href="#">TV</a>
                                <a href="#">Radio</a>
                                <a href="#">PC</a>
                            </div>
                        </li>
                        {/* <!--end category item--> */}
                        <li>
                            <i class="category-icon">
                                <img src="assets/icons/category-clothing-b.png" alt=""/>
                            </i>
                            <h3><a href="#">Clothing</a></h3>
                            <div class="sub-categories">
                                <a href="#">Shirts</a>
                                <a href="#">Trousers</a>
                            </div>
                        </li>
                        {/* <!--end category item--> */}
                        <li>
                            <i class="category-icon">
                                <img src="assets/icons/category-books-b.png" alt=""/>
                            </i>
                            <h3><a href="#">Books</a></h3>
                            <div class="sub-categories">
                                <a href="#">Fantasy</a>
                                <a href="#">History</a>
                                <a href="#">Sci-Fi</a>
                            </div>
                        </li>
                        {/* <!--end category item--> */}
                        <li>
                            <i class="category-icon">
                                <img src="assets/icons/category-music-b.png" alt=""/>
                            </i>
                            <h3><a href="#">Music</a></h3>
                            <div class="sub-categories">
                                <a href="#">Rock</a>
                                <a href="#">Techno</a>
                                <a href="#">Folk</a>
                            </div>
                        </li>
                        {/* <!--end category item--> */}
                    </ul>
                    {/* <!--end categories-list--> */}
                </div>
                {/* <!--end container--> */}
            </section>
           
    );
}

export default allCategories;