import React from 'react';
import Header2 from '../components/layouts/header2';

function Team(props) {
    return (
        <div class="page sub-page pages team">
            <Header2 title="OUR TEAM"/>
            <section class="content ">
                <section class="block ">
                    <div className="container">
                        <div class="card-deck">
                            <div class="card">
                                <img class="card-img-top" src="assets/images/me.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h3 class="card-title">Krishani Bhavsar</h3>
                                    <p class="card-text">Enrollment No - 170290107002 </p>
                                    <p class="card-text">B.E Computer Engineering at L.C. Institute of technology</p>
                                </div>
                                
                            </div>
                            <div class="card">
                                <img class="card-img-top" src="assets/images/hinal.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h3 class="card-title">Hinal Prajapati</h3>
                                    <p class="card-text">Enrollment No - 170290107011</p>
                                    <p class="card-text">B.E Computer Engineering at L.C. Institute of technology</p>
                                </div>
                                
                            </div>
                            <div class="card">
                                <img class="card-img-top" src="assets/images/haripriya.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h3 class="card-title">Haripriya Gurajapu</h3>
                                    <p class="card-text">Enrollment No - 170290107003</p>
                                    <p class="card-text">B.E Computer Engineering at L.C. Institute of technology</p>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </section>
            </section></div>
    );
}

export default Team;