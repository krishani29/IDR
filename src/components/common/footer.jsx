import React from 'react';

function Footer(props) {
    return (
        // <!--*********************************************************************************************************-->
        // <!--************ FOOTER *************************************************************************************-->
        // <!--*********************************************************************************************************-->
        <footer class="footer">
            <div class="wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5">
                            <a href="#" class="brand">
                                <img src="assets/icons/default.png" alt="" />
                            </a>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit amet
                                fermentum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                        </p>
                        </div>

                        <div class="col-md-4">
                            {/* <h2>Navigation</h2> */}
                            <div class="row">
                                <div class="col-md-6 col-sm-6">
                                    <nav>
                                        <ul class="list-unstyled">
                                            <li>
                                                <a href="#">Home</a>
                                            </li>
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Our Services</a>
                                            </li>
                                            <li>
                                                <a href="#">Privacy Policy</a>
                                            </li>
                                            <li>
                                                <a href="#">Terms & Conditions</a>
                                            </li>
                                            <li>
                                                <a href="#">Submit Ad</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <nav>
                                        <ul class="list-unstyled">
                                            <li>
                                                <a href="#">My Ads</a>
                                            </li>
                                            <li>
                                                <a href="#">Login</a>
                                            </li>
                                            <li>
                                                <a href="#">Sign Up</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <h2>Contact Us</h2>
                            <address>
                                <figure>
                                    124 Abia Martin Drive<br />
                                        New York, NY 10011
                                </figure>
                                    <br />
                                        <strong>Email:</strong> <a href="#">hello@example.com</a>
                                        <br />
                                        <strong>Skype: </strong> Home Interio ❤
                                            <br />
                                            <br />
                                            <a href="contact.html" class="btn btn-primary text-caps btn-framed">Contact Us</a>
                            </address>
                    </div>
                                            {/* <!--end col-md-4--> */}
                </div>
                                        {/* <!--end row--> */}
            </div>
                                    <div class="background">
                                        <div class="background-image original-size">
                                            <img src="assets/img/footer-background-icons.jpg" alt="" />
                                        </div>
                                        {/* <!--end background-image--> */}
                                    </div>
                                    {/* <!--end background--> */}
        </div>
    </footer>
    );
}

export default Footer;