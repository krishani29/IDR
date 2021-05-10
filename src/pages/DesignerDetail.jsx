import React from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../components/layouts/header2';
import Overview from '../components/Overview';
import { Projects, Project2 } from '../components/Projects';
import Reviews from '../components/Reviews';

function DesignerDetail(props) {
    const companyName = " My Design World"
    const componylogo = "/assets/icons/l1.jpg"
    const totalRating = "30", location = "Ahmedabad"
    return (
        <div class="page sub-page pages">
            <Header2 />
            <section class="content ">
                <section class="block ">
                    <div className="container-fluid detailpage-cover"></div>

                    <div class="container DesignerDetail">
                        <div class="row justify-content-center">
                            <div className="col-8 row">
                                <b><div className="profilelogo col-6">
                                    <img src={componylogo} alt="" srcset="" />
                                </div></b>
                                <div className="col-6 info">
                                    <h2><a href={`${process.env.PUBLIC_URL}/Designer-detail`} class="title ">{companyName}</a></h2>
                                    <div class="rating" data-rating="4"> <div className="ratingNumber">({totalRating})</div></div>
                                    <h4 class="location">
                                        <a href="#">{location}</a>
                                    </h4>

                                </div>

                            </div>
                            <div class="col-4 row call-email">
                                <div className="call col-6">
                                    <a href="#" class="btn btn-primary btn-rounded col-12"><i class="fa fa-phone mr-3" aria-hidden="true"></i>
Call Us</a>
                                </div>
                                <div className="email col-6">
                                    <a href={`${process.env.PUBLIC_URL}/msg-panel`}class="btn btn-primary btn-rounded col-12"><i class="fa fa-envelope mr-3" aria-hidden="true"></i>
E-mail Us</a>
                                </div>

                            </div>
                        </div>
                        <div class="container detail-tab">
                            <div class="col-md-12">

                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="one" aria-expanded="true">Overview</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="two">Projects</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" id="four-tab" data-toggle="tab" href="#four" role="tab" aria-controls="four">Reviews</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="one" role="tabpanel" aria-labelledby="one-tab">
                                        <Overview />
                                    </div>
                                    <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="two-tab">
                                        <div className="row">
                                            <div className="col-4"><a href={`${process.env.PUBLIC_URL}/Img-detail`} ><Projects /></a></div>
                                            <div className="col-4"><a href={`${process.env.PUBLIC_URL}/Img-detail`} ><Project2 /></a></div>
                                            <div className="col-4"></div>
                                        </div>
                                    </div>

                                    <div class="tab-pane fade" id="four" role="tabpanel" aria-labelledby="four-tab">
                                        <Reviews />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </section>
                {/* <!--Author--> */}
                <section className="container">
                    <h2>Designer</h2>
                    <div class="box col-9"> 
                        <div class="author">
                            <div class="author-image">
                                <div class="background-image">
                                    <img src="assets/img/author-01.jpg" alt="" />
                                </div>
                            </div>
                            {/* <!--end author-image--> */}
                            <div class="author-description">
                                <h3>Jayesh Raval</h3>
                                <div class="rating" data-rating="4"></div>
                                <a href="seller-detail-1.html" class="text-uppercase">Show My Listings
                                                    <span class="appendix">(12)</span>
                                </a>
                            </div>
                            {/* <!--end author-description--> */}
                        </div>
                        <hr />
                        <dl>
                            <dt>Phone</dt>
                            <dd>830-247-0930</dd>
                            <dt>Email</dt>
                            <dd>designHub@example.com</dd>
                        </dl>
                        {/* <!--end author--> */}
                        <form class="form email">
                            <div class="form-group">
                                <label for="name" class="col-form-label">Name</label>
                                <input name="name" type="text" class="form-control" id="name" placeholder="Your Name" />
                            </div>
                            {/* <!--end form-group--> */}
                            <div class="form-group">
                                <label for="email" class="col-form-label">Email</label>
                                <input name="email" type="email" class="form-control" id="email" placeholder="Your Email" />
                            </div>
                            {/* <!--end form-group--> */}
                            <div class="form-group">
                                <label for="message" class="col-form-label">Message</label>
                                <textarea name="message" id="message" class="form-control" rows="4" placeholder="Hi there! I am interested in your offer ID 53951. Please give me more details."></textarea>
                            </div>
                            {/* <!--end form-group--> */}
                            <a href={`${process.env.PUBLIC_URL}/msg-panel`}>
                            <button type="submit" class="btn btn-primary">Send Enquiry</button>
                            </a>
                        </form>
                    </div>
                    {/* <!--end box--> */}
                </section><br/><br/>
                {/* <!--End Author--> */}
                <section className="container  my-4">
                                <h2>Write a Review</h2>
                                <form class="form col-9">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <div class="form-group">
                                                <label for="subject" class="col-form-label">Subject</label>
                                                <input name="subject" type="text" class="form-control" id="subject" placeholder="Did you like a Sevice?"/>
                                            </div>
                                            {/* <!--end form-group--> */}
                                        </div>
                                        {/* <!--end col-md-8--> */}
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="rating" class="col-form-label">Rating</label>
                                                <select name="rating" id="rating" data-placeholder="Select Rating">
                                                    <option value="">Select Rating</option>
                                                    <option value="1" data-option-stars="1">Horrible</option>
                                                    <option value="2" data-option-stars="2">Average</option>
                                                    <option value="3" data-option-stars="3">Good</option>
                                                    <option value="4" data-option-stars="4">Very Good</option>
                                                    <option value="5" data-option-stars="5">Excellent</option>
                                                </select>
                                            </div>
                                            {/* <!--end form-group--> */}
                                        </div>
                                        {/* <!--end col-md-4--> */}
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="review" class="col-form-label">Your Review</label>
                                                <textarea name="review" id="review" class="form-control" rows="4" placeholder="Good seller, I am satisfied."></textarea>
                                            </div>
                                            {/* <!--end form-group--> */}
                                        </div>
                                        {/* <!--end col-md-12--> */}
                                    </div>
                                    {/* <!--end row--> */}
                                </form>
                                {/* <!--end form--> */}
                            </section><br/><br/>
            </section>

        </div>
    );
}

export default DesignerDetail;