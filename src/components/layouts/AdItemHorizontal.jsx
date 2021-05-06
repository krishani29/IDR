import React from 'react';

function AdItemHorizontal1(props) {
    return (
        <div class="item">
            <div class="ribbon-featured">{props.label}</div>
            {/* <!--end ribbon--> */}
            <div class="wrapper">
                <div class="image">
                    <h3>
                        <a href="#" class="tag category">Home & Decor</a>
                        <a href="single-listing-1.html" class="title">Furniture for sale</a>
                        <span class="tag ml-2">Offer</span>
                    </h3>
                    <a href="single-listing-1.html" class="image-wrapper background-image">
                        <img src="assets/img/image-01.jpg" alt="" />
                    </a>
                </div>
                {/* <!--end image--> */}
                <h4 class="location">
                    <a href="#">Manhattan, NY</a>
                </h4>
                <div class="price">$80</div>
                <div class="meta">
                    <figure>
                        <i class="fa fa-calendar-o"></i>02.05.2017 at 8:30am
                                </figure><br />
                    <figure>
                        <a href="#">
                            <i class="fa fa-user"></i>Jane Doe
                                    </a>
                    </figure><br />
                    <figure id="delstatus">
                        <a href="#"><i class="fa fa-map-marker"></i>Delivery: {props.deliveryStatus}
                        </a>
                    </figure>

                </div>
                {/* <!--end meta--> */}
                <div class="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis</p>
                </div>
                {/* <!--end description--> */}
                <a class="markFav detail text-caps underline"><i class="fa fa-heart"></i> Favourite</a>
                <a href="single-listing-1.html" class="detail text-caps underline">Detail</a>
            </div>
        </div>
    );
}

function AdItemHorizontal2(props) {
    return (
        <div class="item">
            <div class="wrapper">
                <div class="image">
                    <h3>
                        <a href="#" class="tag category">Education</a>
                        <a href="single-listing-1.html" class="title">Creative Course</a>
                        <span class="tag ml-2">Offer</span>
                    </h3>
                    <a href="single-listing-1.html" class="image-wrapper background-image">
                        <img src="assets/img/image-02.jpg" alt="" />
                    </a>
                </div>
                {/* <!--end image--> */}
                <h4 class="location">
                    <a href="#">Nashville, TN</a>
                </h4>
                <div class="price">$125</div>
                <div class="meta">
                    <figure>
                        <i class="fa fa-calendar-o"></i>02.05.2017 at 8:30am
                                </figure><br />
                    <figure>
                        <a href="#">
                            <i class="fa fa-user"></i>Jane Doe
                                    </a>
                    </figure><br />
                    <figure id="delstatus">
                        <a href="#"><i class="fa fa-map-marker"></i>Delivery: {props.deliveryStatus}
                        </a>
                    </figure>

                </div>
                {/* <!--end meta--> */}
                <div class="description">
                    <p>Proin at tortor eros. Phasellus porta nec elit non lacinia. Nam bibendum erat at leo faucibus vehicula. Ut laoreet porttitor risus, eget suscipit tellus tincidunt sit amet. </p>
                </div>
                {/* <!--end description--> */}

                {/* <!--end addition-info--> */}
                <a class="markFav detail text-caps underline"><i class="fa fa-heart"></i> Favourite</a>
                <a href="single-listing-1.html" class="detail text-caps underline">Detail</a>
            </div>
        </div>
    );
}


export { AdItemHorizontal1, AdItemHorizontal2 };