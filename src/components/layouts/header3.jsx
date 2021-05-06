import React from 'react';
import HeroForm from '../common/heroForm';
import MainNav from '../common/mainNav';
import SecondaryNav from '../common/secondaryNav';

function header3(props) {
    return (
        <header class="hero">
            <div class="hero-wrapper">
                {/* <!--============ Secondary Navigation ===============================================================--> */}
                <SecondaryNav />
                {/* <!--============ End Secondary Navigation ===========================================================-->
              
               <!--============ Main Navigation ====================================================================--> */}
                <MainNav />
                {/* <!--============ End Main Navigation ================================================================-->
             
               <!--============ Hero Form ==========================================================================--> */}
                <HeroForm />
                {/* <!--============ End Hero Form ======================================================================-->*/}
                {/* <!--============ End Page Title =====================================================================--> */}
                
                <div class="page-title">
                    <div class="container clearfix">
                        <div class="float-left float-xs-none">
                            <h1>{props.itemTitle}
                                <span class="tag">Offer</span>
                            </h1>
                            <h4 class="location">
                                <a href="#">Manhattan, NY</a>
                            </h4>
                        </div>
                        <div class="float-right float-xs-none price">
                            <div class="number">{props.price}</div>
                            <div class="id opacity-50">
                                <strong>ID: </strong>{props.id}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="background"></div>

            </div>
        </header>
    );
}

export default header3;