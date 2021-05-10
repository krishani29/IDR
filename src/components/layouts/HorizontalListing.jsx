import React from 'react';

function HorizontalListing(props) {
    return (
        <div class="item prof-list">
            <div class="wrapper">
                <div class="image">
                    <h3>
                        <a href="#" class="tag category" id="prof-list-cat">{props.type}</a>
                       
                        <a href={`${process.env.PUBLIC_URL}/Designer-detail`} class="title">{props.companyName}</a>
                        <b><div className="profilelogo">
                                <img src={props.componylogo} alt="" srcset="" />
                            </div></b>
                        
                       
                    </h3>
                    <a href={`${process.env.PUBLIC_URL}/Designer-detail`} class="image-wrapper background-image">
                        <img src={props.picsrc} alt="" />
                    </a>
                </div>
                {/* <!--end image--> */}
                <h4 class="location">
                    <a href="#">{props.location}</a>
                </h4>
                <div class="rating" data-rating="4"></div> <div className="ratingNumber">({props.totalRating})</div>
                
                <div class="description">
                    <p>Proin at tortor eros. Phasellus porta nec elit non lacinia. Nam bibendum erat at leo faucibus vehicula. Ut laoreet porttitor risus, eget suscipit tellus tincidunt sit amet. </p>
                </div>
                {/* <!--end description--> */}
                
                <a href={`${process.env.PUBLIC_URL}/Designer-detail`} class="btn btn-primary text-caps showprofile ">Show Profile</a>
            </div>
        </div>

 
    );
}

export default HorizontalListing;