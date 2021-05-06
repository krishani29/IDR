import React from 'react';
import {SoldItem,AdsItem} from './AdsItem';
// import SoldItem from './AdsItem';
import { Link } from 'react-router-dom';
import Header2 from './header2';

function addListing(props) {
    return (
        <div class="page sub-page">
        <Header2  parent="Home" title="Ads Listing"/>
    {/* //    <!--************ CONTENT ************************************************************************************--> */}
       <section class="content">
            <section class="block">
                <div class="container">
                    {/* <!--============ Section Title===================================================================--> */}
                    <div class="section-title clearfix row">
                        <div class="float-left float-xs-none col-4">
                            <label class="mr-3 align-text-bottom">Sort by: </label>
                            <select name="sorting" id="sorting" class="small width-200px" data-placeholder="Default Sorting" >
                                <option value="">Default Sorting</option>
                                <option value="1">Most Recent</option>
                                <option value="2">Oldest First</option>
                                <option value="3">Highest Price First</option>
                                <option value="4">Lowest Price First</option>
                            </select>

                        </div>
                        <div class="float-center float-xs-none col-4">
                            <label class="mr-3 align-text-bottom">Filter by: </label>
                            <select name="sorting" id="sorting" class="small width-200px" data-placeholder="Default Sorting" >
                                <option value="">Default Filtering</option>
                                <option value="1">Urgent</option>
                                <option value="2">Normal</option>
                            </select>

                        </div>
                        
                        <div class="float-right d-xs-none thumbnail-toggle col-4">
                            <a href="" class="change-class" data-change-from-class="list" data-change-to-class="grid" data-parent-class="items">
                                <i class="fa fa-th"></i>
                            </a>
                            <a href="" class="change-class active" data-change-from-class="grid" data-change-to-class="list" data-parent-class="items">
                                <i class="fa fa-th-list"></i>
                            </a>
                        </div>
                    </div>
                 
                    {/* <!--============ Items ==========================================================================--> */}
                    <div class="items list grid-xl-4-items grid-lg-3-items grid-md-2-items">
                        <SoldItem tag="Urgent" deliveryStatus="Available" lable="featured"/>
                        {/* <!--end item1--> */}
                        <AdsItem  deliveryStatus="Not Available"/>
                        {/* <!--end item2--> */}

                        <AdsItem deliveryStatus="Not Available"/>
                        {/* <!--end item--> */}

                        <SoldItem tag="Urgent" lable="featured"/>
                        {/* <!--end item--> */}

                       <AdsItem/>
                        {/* <!--end item--> */}

                        <AdsItem/>
                        {/* <!--end item--> */}

                        <a href={`${process.env.PUBLIC_URL}/submit-ad`} class="item call-to-action">
                            <div class="wrapper">
                                <div class="title">
                                    <i class="fa fa-plus-square-o"></i>
                                    <Link to ={`${process.env.PUBLIC_URL}/submit-ad`}>Submit Your Ad</Link>
                                </div>
                            </div>
                        </a>

                    </div>
                    {/* <!--============ End Items ======================================================================--> */}
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
                {/* <!--end container--> */}
            </section>
            {/* <!--end block--> */}
        </section>
        </div>
    );
}

export default addListing;