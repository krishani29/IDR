import React from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../layouts/header2';

function InteriorDesignerSignUp(props) {
    return (
        <div>
            <div class="page sub-page pages">

                <Header2 parent="Home" title="Become Professional" />

                {/* <!--*********************************************************************************************************-->
    <!--************ CONTENT ************************************************************************************-->
    <!--*********************************************************************************************************--> */}
                <section class="content ">
                    <section class="block ">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div className="col-6 regimg">
                                    <img src="assets/images/interior_design.svg" alt="" srcset="" />
                                </div>
                                <div class="col-xl-5 col-lg-5 col-md-6 col-sm-8 pro-sign-div">
                                <h2>Sign Up for Free !!</h2>
                                    <form class="form clearfix">

                                        <div class="form-group">
                                            {/* <label for="searchable-select" class="col-form-label">Select Category</label> */}
                                            <select name="submit_category" id="searchable-select" data-placeholder="Select" data-enable-search="true">
                                                <option value="">Select Category</option>
                                                <option value="1">Interior Designers</option>
                                                <option value="2">Interior Architects</option>
                                                <option value="3">Interior Designers & Decorators</option>
                                                <option value="4">Kitchen Planners</option>
                                            </select>

                                        </div>
                                        {/* <!--end -group--> */}


                                        <div class="form-group">
                                            {/* <label for="name" class="col-form-label required">Your Name</label> */}
                                            <input name="c_name" type="text" class="form-control" id="name" placeholder="Enter Company Name" required />
                                        </div>
                                        {/* <!--end form-group--> */}
                                        <div class="form-group">
                                            {/* <label for="email" class="col-form-label required">Email</label> */}
                                            <input name="email" type="email" class="form-control" id="email" placeholder=" Enter Your Email" required />
                                        </div>
                                        {/* <!--end form-group--> */}

                                        <div class="form-group">
                                            {/* <label for="password" class="col-form-label required">Password</label> */}
                                            <input name="password" type="password" class="form-control" id="password" placeholder="Password" required />
                                        </div>
                                        {/* <!--end form-group--> */}
                                        <div class="form-group">
                                            {/* <label for="repeat_password" class="col-form-label required">Repeat Password</label> */}
                                            <input name="repeat_password" type="password" class="form-control" id="repeat_password" placeholder="Repeat Password" required />
                                        </div>

                                        {/* <!--end form-group--> */}
                                        <div className="row">
                                            <div class="form-group col-3">
                                                {/* <label for="searchable-select" class="col-form-label">Select Category</label> */}
                                                <select name="submit_category" id="searchable-select" data-placeholder="Select" data-enable-search="true">
                                                    <option value="1">+91</option>
                                                    <option value="2">+90</option>
                                                    <option value="3">+1</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-9 m_num">
                                                <input name="Mobile Number" type="text" class="form-control" id="mobile_number" placeholder="Enter your Mobile Number" required />
                                            </div>
                                        </div>

                                        <div class="d-flex justify-content-between align-items-baseline">
                                            <label>
                                                <input type="checkbox" name="newsletter" value="1" /> I accept the <a target="_blank" href="/terms">Terms &amp; Conditions</a> and <a target="_blank" href="/privacy">Privacy Policy</a>
                                            </label>


                                        </div>
                                        <div className="center mt-4">
                                       
                                                <button type="submit" class="col-10 btn btn-primary pro-sign-btn">Submit</button>
                                        
                                        </div>
                                       
                                    </form>
                                    <hr />
                                    <p>
                                        By clicking "Submit" button, you will agree for Term & Conditions.
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

export default InteriorDesignerSignUp;