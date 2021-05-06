import React from 'react';
import { AdItemHorizontal1, AdItemHorizontal2 } from './AdItemHorizontal';
import Header2 from './header2';
import Header3 from './header3';

function AdsDetail(props) {
    <script type="text/javascript" src="http://maps.google.com/maps/api/js?key=AIzaSyBEDfNcQRmKQEyulDN8nGWjLYPm8s4YB58&libraries=places"></script>

    var latitude = 51.511971;
    var longitude = -0.137597;
    var markerImage = "assets/img/map-marker.png";
    var mapTheme = "light";
    var mapElement = "map-small";
    var markerDrag = true;
    //simpleMap(latitude, longitude, markerImage, mapTheme, mapElement, markerDrag);

    return (
        <div class="page sub-page">
            <Header3 parent="Home" title="Ad Detail" itemTitle="Furniture For Sale" price="$80" id="3401" />

            {/* <!--************ CONTENT ************************************************************************************--> */}
            <section class="content">
                <section class="block">
                    <div class="container">
                        {/* <!--Gallery Carousel--> */}
                        <section>
                            <div className="gallery-carousel owl-carousel ">
                                <img src="assets/img/image-20.jpg" alt="" data-hash="1" />
                                <img src="assets/img/image-01.jpg" alt="" data-hash="2" />
                                <img src="assets/img/image-21.jpg" alt="" data-hash="3" />
                                <img src="assets/img/image-22.jpg" alt="" data-hash="4" />
                                <img src="assets/img/image-23.jpg" alt="" data-hash="5" />
                                <img src="assets/img/image-14.jpg" alt="" data-hash="6" />
                            </div>
                            <div className="gallery-carousel-thumbs owl-carousel">
                                <a href="#1" className="owl-thumb active-thumb background-image">
                                    <img src="assets/img/image-20.jpg" alt="" />
                                </a>
                                <a href="#2" className="owl-thumb background-image">
                                    <img src="assets/img/image-01.jpg" alt="" />
                                </a>
                                <a href="#3" className="owl-thumb background-image">
                                    <img src="assets/img/image-21.jpg" alt="" />
                                </a>
                                <a href="#4" className="owl-thumb background-image">
                                    <img src="assets/img/image-22.jpg" alt="" />
                                </a>
                                <a href="#5" className="owl-thumb background-image">
                                    <img src="assets/img/image-23.jpg" alt="" />
                                </a>
                                <a href="#6" className="owl-thumb background-image">
                                    <img src="assets/img/image-14.jpg" alt="" />
                                </a>
                            </div>
                        </section>
                        {/* <!--end Gallery Carousel--> */}
                        <div className="row flex-column-reverse flex-md-row">
                            {/* <!--============ Listing Detail =============================================================--> */}
                            <div class="col-md-8">
                                <section className="detail-title">
                                    <h2>Furniture For Sale {props.itemName}</h2>
                                    <h4 class="location">
                                        <a href="#">Manhattan, NY</a>
                                        <p className="mt-3">05.04.2017 at 05:30pm</p>
                                    </h4>
                                    <div className="fav-share row">
                                        <div className="fav col-4">
                                        <abbr title="Add to Favourite"> <button className="fav-share-btn"><i class="fa fa-heart my-3" aria-hidden="true"></i></button>
                                            </abbr>
                                        </div>
                                        <div className="share col-8">
                                            <button className="fav-share-btn"><i class="fa fa-share-alt my-3" aria-hidden="true"></i></button>
                                            <div className="share-card">
                                            <ul className="share-list">
                                                <li className="iconList"><i class="fa fa-share-alt mr-4 " aria-hidden="true"></i>Copy link</li>
                                                <li className="iconList"><i class="fa fa-envelope mr-4 " aria-hidden="true"></i>E-mail</li>
                                                <li className="iconList"><i class="fa fa-facebook mr-4 " aria-hidden="true"></i>Facebook</li>
                                            </ul>
                                          
                                        </div> 
                                        </div>
                                       


                                    </div>

                                </section>

                                <section className="row detail-price">
                                    <div className="col-2">
                                        <h3>Price</h3>
                                        <h3 className="detailprice">$ 80{props.price}</h3>
                                        <p></p>
                                    </div>
                                    <div className="col-4">
                                        <h3>Delivery charge</h3>
                                        <h3 className="detailprice">$ 20{props.price}</h3>
                                    </div>
                                    {/* <div className="fav-share row">
                                        <div className="fav col-4">
                                            <button className="fav-share-btn"><i class="fa fa-heart my-3" aria-hidden="true"></i></button>
                                        </div>
                                        <div className="share col-4">
                                            <button className="fav-share-btn"><i class="fa fa-share-alt my-3" aria-hidden="true"></i></button>
                                        </div>


                                    </div> */}

                                </section>
                                {/* <!--Description--> */}


                                {/* <!--end Description--> */}
                                {/* <!--Details--> */}
                                <section>
                                    <h2>Details</h2>
                                    <dl class="columns-2">
                                        <dt>Date Added</dt>
                                        <dd>05.04.2017</dd>
                                        <dt>Type</dt>
                                        <dd>Offer</dd>
                                        <dt>Condition</dt>
                                        <dd>Good</dd>
                                        <dt>Status</dt>
                                        <dd>Used</dd>
                                        <dt>First Owner</dt>
                                        <dd>Yes</dd>
                                        <dt>Material</dt>
                                        <dd>Wood, Leather</dd>
                                        <dt>Color</dt>
                                        <dd>White, Grey</dd>
                                        <dt>Height</dt>
                                        <dd>47cm</dd>
                                        <dt>Width</dt>
                                        <dd>203cm</dd>
                                        <dt>Length</dt>
                                        <dd>54cm</dd>
                                    </dl>
                                </section>
                                {/* <!--end Details--> */}

                                <section>
                                    <h2>Description</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit
                                        amet fermentum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                        per inceptos himenaeos. Vestibulum tincidunt, sapien sagittis sollicitudin dapibus,
                                        risus mi euismod elit, in dictum justo lacus sit amet dui. Sed faucibus vitae nisl
                                        at dignissim.
                                </p>
                                </section>

                                {/* <!--Location--> */}
                                <section>
                                    <h2>Location</h2>
                                    <div class="map height-300px" id="map-small"></div>
                                </section>
                                {/* <!--end Location--> */}
                               
                                <button type="submit" class="btn btn-primary buybtn ml-2">Buy Now</button>
                                <button type="submit" class="btn btn-primary chatbtn">Start Chat</button>
                                <hr />

                                {/* <!--Similar Ads--> */}
                                <section>
                                    <h2>Similar Ads</h2>
                                    <div class="items list compact">
                                        <AdItemHorizontal1 label="Featured" />
                                        {/* <!--end item--> */}

                                        <AdItemHorizontal2 />
                                        {/* <!--end item--> */}

                                        <AdItemHorizontal2 />
                                        {/* <!--end item--> */}

                                        <div class="center">
                                            <a href="#" class="btn btn-primary text-caps btn-framed">Show All</a>
                                        </div>
                                    </div>
                                    {/* <!--end items.list.compact--> */}
                                </section>
                                {/* <!--end Similar Ads--> */}
                            </div>
                            {/* <!--============ End Listing Detail =========================================================--> */}
                            {/* <!--============ Sidebar ====================================================================--> */}
                            <div class="col-md-4">
                                <aside class="sidebar">
                                    {/* <!--Author--> */}
                                    <section>
                                        <h2>Seller</h2>
                                        <div class="box">
                                            <div class="author">
                                                <div class="author-image">
                                                    <div class="background-image">
                                                        <img src="assets/img/author-01.jpg" alt="" />
                                                    </div>
                                                </div>
                                                {/* <!--end author-image--> */}
                                                <div class="author-description">
                                                    <h3>Jane Doe</h3>
                                                    <div class="rating" data-rating="4"></div>
                                                    <a href="seller-detail-1.html" class="text-uppercase">Show My Listings
                                                    <span class="appendix">(12)</span>
                                                    </a>
                                                    <h5 className="mt-2">Member since: 05/08/2018</h5>
                                                    <button className="btn btn-primary btn-framed" id="follow-btn">Follow</button>
                                                </div>
                                                {/* <!--end author-description--> */}
                                            </div>
                                            <hr />
                                            
                                        </div>
                                        {/* <!--end box--> */}
                                    </section>
                                    {/* <!--End Author--> */}
                                </aside>
                            </div>
                            {/* <!--============ End Sidebar ================================================================--> */}
                        </div>
                    </div>
                    {/* <!--end container--> */}
                </section>
                {/* <!--end block--> */}
            </section>
            {/* <!--end content--> */}

        </div>
    );
}

export default AdsDetail;