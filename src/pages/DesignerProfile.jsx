import React from 'react';
import Header2 from '../components/layouts/header2';
import Overview from '../components/Overview';
import { Projects, Project2, AddProject } from '../components/Projects';
import Reviews from '../components/Reviews';


function DesignerProfile(props) {
   
        const companyName = " My Design World"
        const componylogo = "/assets/icons/l1.jpg"
        const totalRating = "30", location = "Ahmedabad"
        return (
            <div class="page sub-page pages">
                <Header2 />
                <section class="content ">
                    <section class="block ">
                    
                        <div className="container-fluid detailpage-cover col-9"></div>
    
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
                                        <a href={`${process.env.PUBLIC_URL}/msg-panel`} class="btn btn-primary btn-rounded col-12"><i class="fa fa-envelope mr-3" aria-hidden="true"></i>
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
                                                <div className="col-4"><a href={`${process.env.PUBLIC_URL}/Img-detail`} ><AddProject /></a></div>
                                                
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
                  
                </section>
    
            </div>
    );
}

export default DesignerProfile;