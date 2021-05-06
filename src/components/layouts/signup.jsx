import React from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../layouts/header2';

function SignUp(props) {
    return (
        <div>
            <div class="page sub-page">

                <Header2 parent="Home" title="Sign Up" />

                {/* <!--*********************************************************************************************************-->
        <!--************ CONTENT ************************************************************************************-->
        <!--*********************************************************************************************************--> */}
                <section class="content">
                    <section class="block">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8">
                                    <form class="form clearfix">
                                    <button className="btn btn-primary social-btn ggl"><i class="fa fa-google py-3"></i> Sign Up with Google</button><br/>
                                    <button className="btn btn-primary social-btn fb"><i class="fa fa-facebook py-3"></i> Sign Up with Facebook</button>
                                    <div className="row"><hr className="col-4" id="part1"/> <b className="mt-3">OR</b> <hr className="col-4" id="part2"/></div>
                                      
                                        <div class="form-group">
                                            <label for="name" class="col-form-label required">Your Name</label>
                                            <input name="name" type="text" class="form-control" id="name" placeholder="Your Name" required />
                                        </div>
                                        {/* <!--end form-group--> */}
                                        <div class="form-group">
                                            <label for="email" class="col-form-label required">Email</label>
                                            <input name="email" type="email" class="form-control" id="email" placeholder="Your Email" required />
                                        </div>
                                        {/* <!--end form-group--> */}
                                        <div class="form-group" id="type">
                                            <label for="type" class="required">Type</label>
                                            <figure>
                                                <label class="framed">
                                                    <input type="radio" name="type" value="1" required /> Customer
                                               </label>
                                                <label class="framed">
                                                    <input type="radio" name="type" value="2" required /> Interior Designer
                                    </label>
                                            </figure>
                                        </div>
                                        <div class="form-group">
                                            <label for="password" class="col-form-label required">Password</label>
                                            <input name="password" type="password" class="form-control" id="password" placeholder="Password" required />
                                        </div>
                                        {/* <!--end form-group--> */}
                                        <div class="form-group">
                                            <label for="repeat_password" class="col-form-label required">Repeat Password</label>
                                            <input name="repeat_password" type="password" class="form-control" id="repeat_password" placeholder="Repeat Password" required />
                                        </div>
                                        {/* <!--end form-group--> */}
                                        <div class="d-flex justify-content-between align-items-baseline">
                                            <label>
                                                <input type="checkbox" name="newsletter" value="1" /> Agree
                                             </label>
                                            <Link to={`${process.env.PUBLIC_URL}/check-otp`}>
                                                <button type="submit" class="btn btn-primary">Submit</button>
                                            </Link>

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

export default SignUp;