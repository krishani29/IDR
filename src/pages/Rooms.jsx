import React from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../components/layouts/header2';
import Grid_section from '../components/layouts/grid_section';
import { RadioFilter, RadioFilterRoom } from '../components/RadioFilter';

function Rooms(props) {
    return (
        <div class="page sub-page pages" id="room">
            <Header2 parent="Home" title="Room interior design ideas, inspiration & pictures" />
            <section class="content ">
                <section class="block ">
                    <div class="container">
                        <div className="row justify-content-center">
                            <div className="col-3 sidebar">
                                <div class="form-group pro-location mt-4">
                                    <h3 for="input-location">Location</h3>
                                    <input name="location" type="text" class="form-control" id="input-location" placeholder="Enter Location" />
                                    <span class="geo-location input-group-addon" data-toggle="tooltip" data-placement="top" title="Find My Position"><i class="fa fa-map-marker"></i></span>
                                </div>
                                {/* <!--end form-group--> */}

                                <RadioFilterRoom
                                    filterTitle="Rooms"
                                    type1="Living room"
                                    type2="Bedroom"
                                    type3="Dining room"
                                    type4="Dressing room"
                                    type5="Houses"
                                    type6="Kitchen"
                                    type7="Media room"
                                    type8="Kid's room"
                                    type9="Balcony"
                                    type10="Gym"
                                /><br />

                                <RadioFilter
                                    filterTitle="Style"
                                    type1="Asian"
                                    type2="Classic"
                                    type3="Colonial"
                                    type4="Industrial"
                                    type5="Modern" /><br />


                            </div>
                            <div className="col-9 content room-pics">
                             {/* <div className="row">
                                 <div className="col-3"><img src="assets/img/img1.jpg" alt="" /></div>
                                 <div className="col-3"> <img src="assets/img/img1.jpg" alt="" /></div>
                                 <div className="col-3"> <img src="assets/img/img1.jpg" alt="" /></div>
                                 <div className="col-3"> <img src="assets/img/img1.jpg" alt="" /></div>
                             </div> */}
                                <Grid_section class="roomclassid" hoverclass="saveHover"
                                    picsrc1="assets/img/r1.jpg" 
                                    picsrc2="assets/img/r2.jpg" 
                                    picsrc3="assets/img/r3.jpg" 
                                    picsrc4="assets/img/r4.jpg" 
                                />
                                <Grid_section   hoverclass="saveHover"
                                    picsrc1="assets/img/r5.jpg" 
                                    picsrc2="assets/img/r6.jpg" 
                                    picsrc3="assets/img/r7.jpg" 
                                    picsrc4="assets/img/r8.jpg" 
                                />
                                 <Grid_section  hoverclass="saveHover"
                                    picsrc1="assets/img/r9.jpg" 
                                    picsrc2="assets/img/r10.jpg" 
                                    picsrc3="assets/img/r11.jpg" 
                                    picsrc4="assets/img/r12.jpg" 
                                />
                                 <Grid_section  hoverclass="saveHover"
                                    picsrc1="assets/img/r13.jpg" 
                                    picsrc2="assets/img/r14.jpg" 
                                    picsrc3="assets/img/r15.jpg" 
                                    picsrc4="assets/img/r16.jpg" 
                                />
                                {/* <!--============ Items ==========================================================================--> */}

                                {/* <!--============ End Items ==============================================================--> */}
                                <div class="page-pagination">
                                    <nav aria-label="Pagination">
                                        <ul class="pagination">
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">
                                                        <i class="fa fa-chevron-left"></i>
                                                    </span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                            </li>
                                            <li class="page-item active">
                                                <a class="page-link" href="#">1</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">2</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">3</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">
                                                        <i class="fa fa-chevron-right"></i>
                                                    </span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* <!--end page-pagination--> */}
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
    );
}

export default Rooms;