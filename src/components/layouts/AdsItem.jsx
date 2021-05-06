import React from 'react';

function SoldItem(props) {
    return (
        <div class="item">
            <div class="ribbon-diagonal">
                <div class="ribbon-diagonal__inner">
                    <span>{props.tag}</span>
                </div>
            </div>
            <div class="ribbon-featured">{props.lable}</div>
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

                    <figure id="delstatus">
                        <a href="#"><i class="fa fa-map-marker"></i>Delivery: {props.deliveryStatus}
                        </a>
                    </figure>

                </div>
                {/* <!--end meta--> */}
                {/* <div class="deliveryStatus">
                    <h4 class="deliveryStatus">Delivery: Available</h4>
                </div> */}

                <div class="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis</p>
                </div>
                {/* <!--end description--> */}


                <a class="markFav detail text-caps underline"><i class="fa fa-heart"></i> Favourite</a>
                <a href={`${process.env.PUBLIC_URL}/ads-detail`} class="detail text-caps underline">Detail</a>
            </div>
        </div>

    )
}

function AdsItem(props) {
    return (

        <div class="item">
            <div class="wrapper">
                <div class="image">
                    <h3>
                        <a href="#" class="tag category">Interior Designer</a>
                        <a href="single-listing-1.html" class="title">{props.name}</a>
                      
                    </h3>
                    <a href="single-listing-1.html" class="image-wrapper background-image">
                        <img src={props.picsrc} alt="" />
                    </a>
                </div>
                {/* <!--end image--> */}
                <h4 class="location">
                    <a href="#">{props.address}</a>
                </h4>

                <div class="meta">

                    <figure>
                        <a href="#">
                            <div className="profilelogo">
                                <img src={props.componylogo} alt="" srcset="" />
                            </div>
                        </a>
                    </figure>
                    <figure>
                        <div class="rating" data-rating="4"></div>
                    </figure>
                </div>
                {/* <!--end meta--> */}
                <div class="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis lobortis</p>
                </div>
                <div className="center">
                    <button className="btn btn-primary" id="showProfile">Show Profile</button><br />
                </div>

            </div>
        </div>
    );
}

export { SoldItem, AdsItem }