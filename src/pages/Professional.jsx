import React from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../components/layouts/header2';
import HorizontalListing from '../components/layouts/HorizontalListing';
import {RadioFilter,RadioFilterRoom} from '../components/RadioFilter';

function Professional(props) {
    return (
        <div class="page sub-page pages">
            <Header2 parent="Home" title="Top Professionals" />
            <section class="content ">
                <section class="block ">
                    <div class="container">
                        <div className="row justify-content-center">
                            <div className="col-3 sidebar">
                                <div class="form-group pro-location mt-4">
                                    <h3 for="input-location">Location</h3>
                                    <input name="location" type="text" class="form-control" id="input-location" placeholder="Enter Location" />
                                    <span class="geo-location input-group-addon" data-toggle="tooltip" data-placement="top" title="Find My Position"><i class="fa fa-map-marker"></i></span>
                                </div>
                                {/* <!--end form-group--> */}

                                <RadioFilter
                                    filterTitle="Filter By Type"
                                    type1="Interior Designers & Decorators"
                                    type2="Interior Architects"
                                    type3="Kitchen Planners"
                                    type4="Bathroom Designers"
                                    type5="Restraunt & Hotel Designers"
                                /><br />

                                <RadioFilter
                                    filterTitle="Construction & Renovation"
                                    type1="Home Builders"
                                    type2="Cabinate & Cabinetry"
                                    type3="Engineering Offices"
                                    type4="Buildings"
                                    type5="General" /><br />

                                <RadioFilter
                                    filterTitle="Out Side The Home"
                                    type1="Lendscape Designers"
                                    type2="Pools"
                                    type3="Spas"
                                    type4="Garden"
                                    type5="Fancing & Gates" />

                            </div>
                            <div className="col-9 content">


                                {/* <!--============ Items ==========================================================================--> */}
                                <div class="items list compact grid-xl-3-items grid-lg-3-items grid-md-2-items">
                                    <HorizontalListing
                                        picsrc={"assets/img/b4.jpg"} 
                                        type="Interior Designer" 
                                        companyName="Krishna Decors" 
                                        componylogo="/assets/icons/l1.jpg"
                                        location="Mehsana, Gujarat" 
                                        totalRating="25"/>
                                    <HorizontalListing
                                        picsrc={"assets/img/b3.jpg"} 
                                        type="Living Room Specialist" 
                                        componylogo="/assets/icons/l2.jpg"
                                        companyName="Urban Space" 
                                        location="Palanpur, Gujarat" 
                                        totalRating="20"/>
                                    <HorizontalListing
                                        picsrc={"assets/img/kitchen.jpg"} 
                                        type="Kitchen Planner" 
                                        componylogo="/assets/icons/l3.jpg"
                                        companyName="Dream Crafts" 
                                        location="Ahmedabad, Gujarat" 
                                        totalRating="45"/>
                                    <HorizontalListing
                                        picsrc={"assets/img/b1.jpg"} 
                                        componylogo="/assets/icons/l4.jpg"
                                        type="Interior Designer" 
                                        companyName="Esthetic Cube" 
                                        location="Surat, Gujarat" 
                                        totalRating="15"/>
                                    <HorizontalListing
                                        picsrc={"assets/img/b7.jpg"} 
                                        componylogo="/assets/img/1.jpg"
                                        type="Interior Designer" 
                                        companyName="Om Designers" 
                                        location="Ahmedabad, Gujarat" 
                                        totalRating="25"/>
                                    <HorizontalListing
                                        picsrc={"assets/img/bathroom.jpg"} 
                                        componylogo="/assets/icons/l6.jpg"
                                        type="Bathroom & Spa Designer" 
                                        companyName="Marka DesignHub" 
                                        location="Vadodra, Gujarat" 
                                        totalRating="30"/>



                                </div>
                                {/* <!--============ End Items ==============================================================--> */}
                                <div class="page-pagination">
                                    <nav aria-label="Pagination">
                                        <ul class="pagination">
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">
                                                        <i class="fa fa-chevron-left"></i>
                                                    </span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                            </li>
                                            <li class="page-item active">
                                                <a class="page-link" href="#">1</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">2</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">3</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">
                                                        <i class="fa fa-chevron-right"></i>
                                                    </span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* <!--end page-pagination--> */}
                            </div>
                            {/* <!--end col-md-9--> */}

                        </div>
                        {/* <!--end row--> */}
                    </div>
                    {/* <!--end container--> */}
                </section>
                {/* <!--end block--> */}
            </section>
            {/* <!--end content--> */}
        </div>
    );
}

export default Professional;