import React from 'react';
import Header from '../components/common/header';
import Grid_section from '../components/layouts/grid_section';
import { AdsItem, SoldItem } from '../components/layouts/AdsItem';


function Home(props) {
    return (
        <div className="homepage">
            <div class="page home-page">
                <Header />
                {/* 
        <!--************ CONTENT ************************************************************************************--> */}
                <section class="content">
                    {/* <!--============ Featured Ads ===========================================================================--> */}
                    {/* <!--============ End Featured Ads =======================================================================-->
            <!--============ Features Steps =========================================================================--> */}
                    <section class="block">
                        <div class="container">
                            <div class="block">
                                <h1>How you can use </h1>
                                <h2>Get Started in 3 simple steps </h2>
                                <div class="row">
                                    <div class="col-md-4 center">
                                        <div class="feature-box">
                                            <figure className="step-img">
                                                <img src="assets/icons/search_48.png" alt="" id="search-step" />
                                                <span>1</span>
                                            </figure>
                                            <h3>Find inspiration from over 3 million pictures</h3>
                                           
                                        </div>
                                        {/* <!--end feature-box--> */}
                                    </div>
                                    {/* <!--end col--> */}
                                    <div class="col-md-4 center">
                                        <div class="feature-box">
                                            <figure className="step-img">
                                                <img src="assets/icons/chatting.png" id="chat-step" alt="" />
                                                <span>2</span>
                                            </figure>
                                            <h3>Connect with professionals for a quote</h3>
                                         
                                        </div>
                                        {/* <!--end feature-box--> */}
                                    </div>
                                    {/* <!--end col--> */}
                                    <div class="col-md-4 center">
                                        <div class="feature-box">
                                            <figure className="step-img">
                                                <img src="assets/icons/done.png" id="done-step"  alt="" />
                                                <span>3</span>
                                            </figure>
                                            <h3>Complete your project and leave feedback</h3>
                                            
                                        </div>
                                        {/* <!--end feature-box--> */}
                                    </div>
                                    {/* <!--end col--> */}
                                   
                                    {/* <!--end col--> */}
                                </div>
                                {/* <!--end row--> */}
                            </div>
                            {/* <!--end block--> */}
                        </div>
                        {/* <!--end container--> */}
                        <div class="background" data-background-color="#fff"></div>
                        {/* <!--end background--> */}
                        <div className="center">
                        <button className="btn btn-primary" id="start-now">START NOW</button>
                        </div>
                       
                    </section>

                    <section class="block">
                        <div class="container">
                        <Grid_section  hoverclass="HomeHover"
                        title="Explore Images" 
                        subtitle="Browse through millions of home and living pictures"
                        picsrc1="assets/img/img1.jpg"    t1="Living Room"
                        picsrc2="assets/img/kitchen.jpg"  t2="Kitchen" 
                        picsrc3="assets/img/bedroom.jpg"   t3="Bedroom"
                        picsrc4="assets/img/bathroom.jpg"  t4="Bathroom"
                        />
                        
                        
                        <Grid_section class="progrid" hoverclass="HomeHover"
                         title="Find Professionals"
                         subtitle="Contact thousands of experts from one single directory"
                         picsrc1="assets/img/de1.jpg" t1="Design Planners"
                         picsrc2="assets/img/de3.jpg" t2="Interior Designers"
                         picsrc3="assets/img/de4.jpg" t3="Decorators"
                         picsrc4="assets/img/de2.jpg" t4="Designer Firms"
                         />

                        </div>
                    </section>
                    {/* <!--end block-->
                    
            <!--============ End Features Steps =====================================================================-->
            <!--============ Recent Ads =============================================================================--> */}
                    <section class="block">
                        <div class="container top-pro-container">
                            <h1>Top professionals for you</h1>
                            <h2>The right professionals for your home projects</h2>
                            <div class="items grid grid-xl-4-items grid-lg-3-items grid-md-2-items">
                                <AdsItem 
                                picsrc="assets/img/b7.jpg"
                                componylogo="/assets/icons/l1.jpg"
                                name="MONOCEROS INTERARCH SOLUTIONS"
                                address="Mehsana, Gujarat" />
                                {/* <!--end item--> */}

                                <AdsItem picsrc="assets/img/banner.jpg" 
                                componylogo="/assets/icons/l2.jpg"
                                name="DESIGN SPACE"
                                address="Ahmedabad, Gujarat" />
                                {/* <!--end item--> */}

                                <AdsItem picsrc="assets/img/b3.jpg"
                                componylogo="/assets/icons/l3.jpg"
                                name="THE WORKROOM"
                                address="Ahmedabad, Gujarat"  />
                                {/* <!--end item--> */}

                                <AdsItem picsrc="assets/img/b4.jpg" 
                                componylogo="/assets/icons/l8.jpg"
                                name="ARPIT SHAH PROJECTS OPC PVT LTD."
                                address="Ahmedabad, Gujarat" 
                                />
                                {/* <!--end item--> */}

                                <AdsItem picsrc="assets/img/b5.jpg" 
                                componylogo="/assets/icons/l4.jpg"
                                name="SCALE STUDIO"
                                address="Ahmedabad, Gujarat" 
                                />
                                {/* <!--end item--> */}

                                <AdsItem picsrc="assets/img/b6.jpg"
                                componylogo="/assets/icons/l5.png"
                                name="DREAM CRAFT STUDIO"
                                address="Mehsana, Gujarat"  />
                                {/* <!--end item--> */}

                                <AdsItem picsrc="assets/img/bedroom.jpg" 
                                componylogo="/assets/icons/l6.jpg"
                                name="MARCA DESIGN"
                                address="Ahmedabad, Gujarat" 
                                />
                                {/* <!--end item--> */}

                                <AdsItem picsrc="assets/img/kitchen.jpg" 
                                componylogo="/assets/icons/l7.jpg"
                                name="K MEWADA INTERIOR DESIGNER"
                                address="Ahmedabad, Gujarat" 
                                />
                                {/* <!--end item--> */}
                            </div>
                        </div>
                        {/* <!--end container--> */}
                    </section>
                    {/* <!--end block-->
            <!--============ End Recent Ads =========================================================================-->
            <!--============ Newsletter =============================================================================--> */}
                    
                    {/* <!--end block--> */}

                  

                </section>
                {/* <!--end content--> */}
            </div>

        </div>
    );
}

export default Home;