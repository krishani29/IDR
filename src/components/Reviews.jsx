import React from 'react';

function Reviews(props) {
    return (


        <section>
            <h2>Reviews</h2>
            <div class="comments">
                <div class="comment">
                    <div class="author">
                        <a href="#" class="author-image">
                            <div class="background-image">
                                <img src="assets/img/author-09.jpg" alt="" />
                            </div>
                        </a>
                        <div class="author-description">
                            <h3>Positive experience!</h3>
                            <div class="meta">
                                <span class="rating" data-rating="4"></span>
                                <span>02.05.2017</span>
                                <h5><a href="#">SMITA SHAH</a></h5>
                            </div>
                            {/* <!--end meta--> */}
                            <p>
                            One of the Best Architect providing the Best Interior Designing and Architecture services... Amazing.
                                                </p>
                        </div>
                        {/* <!--end author-description--> */}
                    </div>
                    {/* <!--end author--> */}
                </div>
                {/* <!--end comment--> */}

                <div class="comment">
                    <div class="author">
                        <a href="#" class="author-image">
                            <div class="background-image">
                                <img src="assets/img/author-05.jpg" alt="" />
                            </div>
                        </a>
                        <div class="author-description">
                            <h3>Perfect Designer. I am satisfied.</h3>
                            <div class="meta">
                                <span class="rating" data-rating="5"></span>
                                <span>02.05.2017</span>
                                <h5><a href="#">MIHIR GANDHI</a></h5>
                            </div>
                            {/* <!--end meta--> */}
                            <p>
                            Best service, Best quality and very cost effective. They gave deadline to complete it but completed it in before time and have manage their work smartly.
                                                </p>
                        </div>
                        {/* <!--end author-description--> */}
                    </div>
                    {/* <!--end author--> */}
                </div>
                {/* <!--end comment--> */}

                <div class="comment">
                    <div class="author">
                        <a href="#" class="author-image">
                            <div class="background-image">
                                <img src="assets/img/author-04.jpg" alt="" />
                            </div>
                        </a>
                        <div class="author-description">
                            <h3>Excellent Design Firm</h3>
                            <div class="meta">
                                <span class="rating" data-rating="3"></span>
                                <span>02.05.2017</span>
                                <h5><a href="#">Akshay V.</a></h5>
                            </div>
                            {/* <!--end meta--> */}
                            <p>
                            It was nice visiting this place. This is a perfect place to work for an out of the box thinker. A group of enthusiastic and creative designers who knows the meaning of team work in true sense. Unlike most of the others, there is no 'I' factor in here which makes this workplace happening. Get involved with these designers not only for the good end product but also to enjoy process.
                                                </p>
                        </div>
                        {/* <!--end author-description--> */}
                    </div>
                    {/* <!--end author--> */}
                </div>
                {/* <!--end comment--> */}
            </div>
            {/* <!--end comment--> */}
            <div class="center">
                <a href="#" class="btn btn-primary btn-rounded btn-framed">Load More</a>
            </div>
        </section>

    );
}

export default Reviews;