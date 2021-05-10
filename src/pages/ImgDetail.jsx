import React from 'react';
import Header2 from '../components/layouts/header2';

function ImgDetail(props) {
    const companyName = "Hari Om Decors",location ="Mehsana", componylogo="/assets/icons/l2.jpg"
    return (
        <div class="page sub-page  Imgdetail">
            <section class="content ">
                <section class="block ">
                    <div className="container-fluid row ">
                        <div className="col-9">
                            <section>
                                <div class="gallery-carousel owl-carousel">
                                    <img src="assets/img/1.jpg" alt="" data-hash="1" />
                                    <img src="assets/img/b1.jpg" alt="" data-hash="2" />
                                    <img src="assets/img/b2.jpg" alt="" data-hash="3" />
                                    <img src="assets/img/b3.jpg" alt="" data-hash="4" />
                                    <img src="assets/img/b4.jpg" alt="" data-hash="5" />
                                    <img src="assets/img/b7.jpg" alt="" data-hash="6" />
                                </div>
                                <div class="gallery-carousel-thumbs owl-carousel">
                                    <a href="#1" class="owl-thumb active-thumb background-image">
                                        <img src="assets/img/1.jpg" alt="" />
                                    </a>
                                    <a href="#2" class="owl-thumb background-image">
                                        <img src="assets/img/b1.jpg" alt="" />
                                    </a>
                                    <a href="#3" class="owl-thumb background-image">
                                        <img src="assets/img/b2.jpg" alt="" />
                                    </a>
                                    <a href="#4" class="owl-thumb background-image">
                                        <img src="assets/img/b3.jpg" alt="" />
                                    </a>
                                    <a href="#5" class="owl-thumb background-image">
                                        <img src="assets/img/b4.jpg" alt="" />
                                    </a>
                                    <a href="#6" class="owl-thumb background-image">
                                        <img src="assets/img/b7.jpg" alt="" />
                                    </a>
                                </div>
                            </section>

                        </div>
                        <div className="col-3 prof-info">
                            <h1>Living Area</h1>
                            <h2 className="row"><a href={`${process.env.PUBLIC_URL}/Designer-detail`} class="title col-9">{companyName}</a>
                            <div className="profilelogo col-3">
                                <img src={componylogo} alt="" srcset="" />
                            </div></h2>
                            <h4 class="location">
                                <a href="#">{location}</a>
                            </h4>
                            <div className="rqst col-9 ">
                                    <a href="#" class="btn btn-primary col-12"><i class="fa fa-envelope mr-3" aria-hidden="true"></i>
                                    Request Quote</a>
                                </div>

                                <div className="close-btn">
                                    <a href={`${process.env.PUBLIC_URL}/Rooms`} >
                                    <img src="assets/img/close-btn.png" alt="" srcset="" />
                                   </a>
                                </div>

                                
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default ImgDetail;

{/* <section>
                                    <div class="gallery-carousel owl-carousel">
                                        <img src="assets/img/image-20.jpg" alt="" data-hash="1" />
                                        <img src="assets/img/image-01.jpg" alt="" data-hash="2" />
                                        <img src="assets/img/image-21.jpg" alt="" data-hash="3" />
                                        <img src="assets/img/image-22.jpg" alt="" data-hash="4" />
                                        <img src="assets/img/image-23.jpg" alt="" data-hash="5" />
                                        <img src="assets/img/image-14.jpg" alt="" data-hash="6" />
                                    </div>
                                    <div class="gallery-carousel-thumbs owl-carousel">
                                        <a href="#1" class="owl-thumb active-thumb background-image">
                                            <img src="assets/img/image-20.jpg" alt="" />
                                        </a>
                                        <a href="#2" class="owl-thumb background-image">
                                            <img src="assets/img/image-01.jpg" alt="" />
                                        </a>
                                        <a href="#3" class="owl-thumb background-image">
                                            <img src="assets/img/image-21.jpg" alt="" />
                                        </a>
                                        <a href="#4" class="owl-thumb background-image">
                                            <img src="assets/img/image-22.jpg" alt="" />
                                        </a>
                                        <a href="#5" class="owl-thumb background-image">
                                            <img src="assets/img/image-23.jpg" alt="" />
                                        </a>
                                        <a href="#6" class="owl-thumb background-image">
                                            <img src="assets/img/image-14.jpg" alt="" />
                                        </a>
                                    </div>
                                </section> */}