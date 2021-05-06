import React from 'react';
import Header2 from '../layouts/header2';
import { Link } from 'react-router-dom';


function otp(props) {
    return (
        <div>
            <div class="page sub-page">

                <Header2 title="OTP"  parent="Home" />

                <section class="content">
                    <section class="block">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8">
                                    <form class="form clearfix">
                                        <div class="form-group">
                                            <label for="name" class="col-form-label">Verify Your Email id</label>
                                            <input name="email" type="email" class="form-control" id="email" placeholder="Your Email" required />
                                        </div>
                                        <p>Click here to <a href="" style={{ color: "blue" }}>Get OTP</a></p>
                                        <div class="form-group">
                                            <label for="otp" class="col-form-label">Enter OTP</label>
                                            <input name="otp" type="text" class="form-control" id="otp" placeholder="Plese enter OTP" required />
                                        </div>

                                        {/* <!--end form-group--> */}
                                        <div class="d-flex justify-content-between align-items-baseline">
                                            <Link to="/check-otp">
                                                <button type="submit" class="btn btn-primary">Verify</button>
                                            </Link>

                                        </div>
                                    </form>
                                    <hr />


                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    );
}

export default otp;