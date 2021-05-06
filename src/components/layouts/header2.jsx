import React from 'react';
import HeroForm from '../common/heroForm';
import MainNav2 from '../common/mainNav2';
import SecondaryNav from '../common/secondaryNav';

function header2(props) {
    return (


        <header class="hero">
            <div class="hero-wrapper">
                {/* <!--============ Secondary Navigation ===============================================================--> */}
                <SecondaryNav />
                {/* <!--============ End Secondary Navigation ===========================================================-->
              
               <!--============ Main Navigation ====================================================================--> */}
                <MainNav2 parent={props.parent} pathtitle={props.title}/>
                {/* <!--============ End Main Navigation ================================================================-->
             
               <!--============ Hero Form ==========================================================================--> */}
                <HeroForm />
                {/* <!--============ End Hero Form ======================================================================-->*/}
                <div class="page-title">
                    <div class="container">
                        <h1>{props.title}</h1>
                    </div>
                    {/* <!--end container--> */}
                </div>
                {/* <!--============ End Page Title =====================================================================--> */}
                <div class="background"></div>

            </div>
        </header>


    );
}

export default header2;