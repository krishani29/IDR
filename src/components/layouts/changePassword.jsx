import React from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../layouts/header2';
import Sidebar from './sidebar';



function changePassword(props) {
    return (
        <div>
            <div class="page sub-page">

            <Header2 parent="Home" title="Change Password"/>

         {/************ CONTENT ************************************************************************** */}
        <section class="content">
            <section class="block">
                <div class="container">
                    <div class="row">
                        <Sidebar/>
                        {/* <!--end col-md-3--> */}
                        <div class="col-md-9">
                            <form class="form">
                                <div class="row justify-content-center">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="current_password" class="col-form-label required">Current Password</label>
                                            <input name="current_password" type="password" class="form-control" id="current_password" placeholder="Current Password" required/>
                                        </div>
                                        {/* <!--end form-group--> */}
                                        <div class="form-group">
                                            <label for="new_current_password" class="col-form-label required">New Password</label>
                                            <input name="new_current_password" type="password" class="form-control" id="new_current_password" placeholder="New Password" required/>
                                        </div>
                                        {/* <!--end form-group--> */}
                                        <div class="form-group">
                                            <label for="repeat_new_current_password" class="col-form-label required">Repeat Password</label>
                                            <input name="repeat_new_current_password" type="password" class="form-control" id="repeat_new_current_password" placeholder="Repeat New Password" required/>
                                        </div>
                                        {/* <!--end form-group--> */}
                                        <button type="submit" class="btn btn-primary float-right">Change Password</button>
                                    </div>
                                    {/* <!--end col-md-6--> */}
                                </div>
                            </form>
                        </div>
                        {/* <!--end col-md-9--> */}
                    </div>
                    {/* <!--end row--> */}
                </div>
                {/* <!--end container--> */}
            </section>
            {/* <!--end block--> */}
        </section>
        {/* <!--end content--> */}
          </div>

            </div>
    );
}

export default changePassword;