import React from 'react';

function grid_section(props) {
    return (
        <div class="block" id={props.class}>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <div class="row">
                <div class="col-md-3 ">
                    <img src={props.picsrc1} className="gridimg" alt="" />
                         <h3 className="overlay">{props.t1}</h3>
                   
                    {/* <!--end grid4-box--> */}
                </div>
                {/* <!--end col--> */}
                <div class="col-md-3 ">
                        <img src={props.picsrc2} className="gridimg" alt="" />
                        <h3 className="overlay">{props.t2}</h3>
                    {/* <!--end grid4-box--> */}
                </div>
                {/* <!--end grid4-box--> */}
                {/* <!--end col--> */}
                <div class="col-md-3 ">
                        <img src={props.picsrc3} className="gridimg" alt="" />
                        <h3 className="overlay">{props.t3}</h3>
                    {/* <!--end grid4-box--> */}
                </div>
                <div class="col-md-3 ">
                        <img src={props.picsrc4} className="gridimg" alt="" />
                        <h3 className="overlay">{props.t4}</h3>
                    {/* <!--end grid4-box--> */}
                </div>
                {/* <!--end col--> */}

                {/* <!--end col--> */}
            </div>
            {/* <!--end row--> */}
        </div>

    );
}

export default grid_section;