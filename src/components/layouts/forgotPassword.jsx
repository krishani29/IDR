import React from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../layouts/header2';


function forgotPassword(props) {
    return (
        <div>
            <div class="page sub-page">

             <Header2  parent="Home" title="Forgot Password"/>

             {/* <!--*********************************************************************************************************-->
       <!--************ CONTENT ************************************************************************************-->
       <!--*********************************************************************************************************--> */}
                <section class="content">
                    <section class="block">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8">
                                    <form class="form clearfix">
                                        <div class="form-group">
                                            <h2>Forfot Your Password?</h2>
                                            <p>No Worries! Enter your email and we will send you a reset</p>
                                            <label for="email" class="col-form-label required">Email</label>
                                            <input name="email" type="email" class="form-control" id="email" placeholder="Enter Your Email" required />
                                        </div>
                                        {/* <!--end form-group--> */}

                                        {/* <!--end form-group--> */}
                                        <div class="d-flex justify-content-between align-items-baseline">
                                            <Link to="/change-password">
                                                <button type="submit" class="btn btn-primary">Send Request</button>
                                            </Link>

                                        </div>
                                    </form>
                                    <hr />
                                    <p>
                                        By clicking "Send Request" button, you will be able to reset your password.
                                       </p>


                                </div>
                            </div>
                        </div>
                    </section>
                </section>



            </div>

        </div>
    );
}

export default forgotPassword;