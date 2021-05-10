import React from 'react';
import { Link } from 'react-router-dom';

function ideabook(params) {
    prompt("Save in your Idea Book, Write Idea Book Name", "Design Plan 1")
}
function grid_section(props) {

    return (
        <div class="block" id={props.class}>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <div class="row ">
                <div class="col-md-3 ">
                    <Link to={props.roomsrc}><img src={props.picsrc1} className="gridimg" alt="" /></Link>
                    <h3 className="overlay">{props.t1}</h3>
                    <a href={props.roomsrc}>
                        <div className={props.hoverclass}>
                            <a href="#" class="btn btn-success small" onClick={ideabook} data-toggle="modal" data-target="#myModal">+ Save</a>
                        </div>
                    </a>

                </div>
                <div class="col-md-3 ">
                    <img src={props.picsrc2} className="gridimg" alt="" />
                    <h3 className="overlay">{props.t2}</h3>
                    <a href={props.roomsrc}>
                        <div className={props.hoverclass}>
                            <a href="#" class="btn btn-success small" onClick={ideabook} data-toggle="modal" data-target="#myModal">+ Save</a>
                        </div></a>
                </div>

                <div class="col-md-3 ">
                    <img src={props.picsrc3} className="gridimg" alt="" />
                    <h3 className="overlay">{props.t3}</h3>
                    <a href={props.roomsrc}>
                        <div className={props.hoverclass}>
                            <a href="#" class="btn btn-success small" onClick={ideabook} data-toggle="modal" data-target="#myModal">+ Save</a>
                        </div></a>

                </div>
                <div class="col-md-3 ">
                    <img src={props.picsrc4} className="gridimg" alt="" />
                    <h3 className="overlay">{props.t4}</h3>
                    <a href={props.roomsrc}>
                        <div className={props.hoverclass}>
                            <a href="#" class="btn btn-success small" onClick={ideabook} data-toggle="modal" data-target="#myModal">+ Save</a>
                        </div> </a>

                </div>



            </div>
            {/* <!--end row--> */}
            {/* <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                       
                        <div class="modal-body">
                            <p>This is a small modal.</p>
                        </div>
                       
                    </div>
                </div>
            </div> */}
        </div>

    );
}

export default grid_section;