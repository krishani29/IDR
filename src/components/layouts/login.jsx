import React from 'react';
import Header2 from '../layouts/header2';
import { Link } from 'react-router-dom';


function login(props) {
    return (
        <div>
            <div class="page sub-page pages">

                <Header2 parent="Home" title="Login" />
                <section class="content">
                    <section class="block">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-4">
                                    <form class="form clearfix">
                                    <button className="btn btn-primary social-btn ggl"><i class="fa fa-google py-3"></i> Login with Google</button><br/>
                                    <button className="btn btn-primary social-btn fb"><i class="fa fa-facebook py-3"></i> Login with Facebook</button>
                                    <div className="row"><hr className="col-4" id="part1"/> <b className="mt-3">OR</b> <hr className="col-4" id="part2"/></div>
                                  
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
                                        <div class="d-flex justify-content-between align-items-baseline">
                                            <label>
                                                <input type="checkbox" name="remember" value="1" /> Remember Me
                                    </label>
                                            <button type="submit" class="btn btn-primary">Login</button>
                                        </div>
                                    </form>
                                    <hr />
                                    <p>
                                        Forgot Password? <Link to={`${process.env.PUBLIC_URL}/forgot-password`} class="link">Click here.</Link>
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

export default login;
