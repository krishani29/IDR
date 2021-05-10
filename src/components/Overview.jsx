import React from 'react';

function Overview(props) {
    return (
        <div className="overview">
            <h3>All About My Design World</h3>
            <p>
                Ahmedabad-based design firm MY DESIGN WORLD is the interior design firm established with a vision to introduce a one-stop solution to all home décor needs. The USP (Unique Selling Proposition) of the Turnkey Interior design firm offers various design solutions for residential, commercial, and office space with equal ease. They work on the principle of trust and honesty to provide excellent and quality services to their clients. The firm's young designers approach the clients with a fresh perspective, an open mind and a keen eye for details to transform many dream turnkey projects into a reality for the clients' with their creative insight.
            </p>
            <br />
            <h3>Design Philosophy</h3>
            <p>
                The mantra that the professionals of MY DESIGN WORLD follow is "We create Happy Homes." They have a futuristic and straightforward design philosophy and work to achieve a unique aesthetic appeal irrespective of the project's budget. They are very transparent with the clients and honest with their work and projects. If they can style lavish luxury home, then they can also create a minimalist home within a budget. They provide the most professional services with the utmost professionalism at an affordable price. They sum up their design philosophy and décor style to be a 'dream comes true' for the clients, with their dreams given a form with the expertise of the design experts of the firm.
            </p>    <br />

            <h3>Get Connected</h3>
            <p>
                You can contact MY DESIGN WORLD Designs by calling them directly on +91 9741104444. You can also connect them by dropping a mail at sales@mydesignworld.com. However, they prefer the call over email. So feel free to contact at your convenience. If they miss the call, expect the return call any time soon. When the message received via Homify, they call to validate the authenticity of the lead. If the service requirement is within the firm's range, they contact the client for discussion. Once the meeting reaches the final stage, they contact the client with project proposals and the services' terms and conditions.
        </p>

            <div className="row services-address">
                <div className="col-3 s1">
                    <h3>Services</h3>
                    <ul>
                        <li>Interior Design</li>
                        <li>Interior commercial/office</li>
                        <li>Interior Residential</li>
                        <li>Interior Execution</li>
                    </ul>
                </div>
                <div className="col-3 s1" >
                    <h3>Service Area</h3>
                    <p style={{color:"black"}}>Ahmedabad, Mehsana, Gandhinagar in Gujarat</p>
                </div>
                <div className="col-3 s1">
                    <h3>Address</h3>
                    <p  style={{color:"black"}}>My Design World, 40/2, First Floor,</p>
                    <p style={{color:"black"}}>S.G Highway, Ahmedabad, 384125</p>
                    <p style={{color:"black"}}>Gujarat, India</p>
                </div>
                <div className="col-3 ">
                    <h3>Social Links</h3>
                    <ul className="socialLink">
                        <li><i className="fa fa-facebook mr-3"></i> _My_Design_World</li>
                        <li><i class="fa fa-instagram mr-3"></i>_My_Design_World</li>
                        <li><i className="fa fa-twitter mr-3"></i>_My_Design_World</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Overview;