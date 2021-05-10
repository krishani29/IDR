import React from 'react';
import Header2 from '../layouts/header2';

function MessagePanel(props) {
    return (
        <div class="page sub-page pages">
        <Header2 parent="User" title="Negotiation Panel" />
      
        {/* <!--************ CONTENT ************************************************************************************--> */}
        <section class="content">
            <section class="block">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 col-lg-5 col-xl-4">
                            {/* <!--============ Section Title===========================================================--> */}
                            <div class="section-title clearfix">
                                <h3>People</h3>
                            </div>
                            <div id="messaging__chat-list" class="messaging__box">
                                <div class="messaging__header">
                                    <ul class="nav nav-pills">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#">All</a>
                                        </li>
                                    
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Interior Designers</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Blocked</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="messaging__content">
                                    <ul class="messaging__persons-list">
                                       
                                        <li>
                                            <a href="#" class="messaging__person active">
                                                <figure class="messaging__image-item" data-background-image="assets/img/image-03.jpg"></figure>
                                                <figure class="content">
                                                    <h5>Karam Rajpal</h5>
                                                    <p>Fusce consectetur nibh ac euismod vestibulum. Sed sit amet elit tellus</p>
                                                    <small>48 Hour Ago</small>
                                                </figure>
                                                <figure class="messaging__image-person" data-background-image="assets/img/author-02.jpg"></figure>
                                            </a>
                                            {/* <!--messaging__person--> */}
                                        </li>
                                        <li>
                                            <a href="#" class="messaging__person">
                                                <figure class="messaging__image-item" data-background-image="assets/img/image-05.jpg"></figure>
                                                <figure class="content">
                                                    <h5>Sharad Malhotra</h5>
                                                    <p>Nam vel egestas lacus, eget rutrum justo. Fusce eleifend, magna ac venenatis</p>
                                                    <small>28.03.2017</small>
                                                </figure>
                                                <figure class="messaging__image-person" data-background-image="assets/img/author-03.jpg"></figure>
                                            </a>
                                            {/* <!--messaging__person--> */}
                                        </li>
                                        <li>
                                            <a href="#" class="messaging__person">
                                                <figure class="messaging__image-item" data-background-image="assets/img/image-06.jpg"></figure>
                                                <figure class="content">
                                                    <h5>Divyanka Tripathi</h5>
                                                    <p>Donec consequat lobortis erat non tempus. Quisque id accumsan velit.</p>
                                                    <small>05.03.2017</small>
                                                </figure>
                                                <figure class="messaging__image-person" data-background-image="assets/img/author-04.jpg"></figure>
                                            </a>
                                            {/* <!--messaging__person--> */}
                                        </li>
                                        <li>
                                            <a href="#" class="messaging__person">
                                                <figure class="messaging__image-item" data-background-image="assets/img/image-07.jpg"></figure>
                                                <figure class="content">
                                                    <h5>Neel Patel</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut</p>
                                                    <small>11.01.2017</small>
                                                </figure>
                                                <figure class="messaging__image-person" data-background-image="assets/img/author-05.jpg"></figure>
                                            </a>
                                            {/* <!--messaging__person--> */}
                                        </li>
                                        <li>
                                            <a href="#" class="messaging__person">
                                                <figure class="messaging__image-item" data-background-image="assets/img/image-08.jpg"></figure>
                                                <figure class="content">
                                                    <h5>Meena Jain</h5>
                                                    <p>Suspendisse potenti. Quisque vel ipsum in purus pretium malesuada. </p>
                                                    <small>24.08.2016</small>
                                                </figure>
                                                <figure class="messaging__image-person" data-background-image="assets/img/author-06.jpg"></figure>
                                            </a>
                                            {/* <!--messaging__person--> */}
                                        </li>
                                    </ul>
                                    {/* <!--end messaging__persons-list--> */}
                                </div>
                                {/* <!--messaging__content--> */}
                            </div>
                            {/* <!--end section-title--> */}
                        </div>
                        {/* <!--end col-md-3--> */}
                        <div class="col-md-7 col-lg-7 col-xl-8">
                            {/* <!--============ Section Title===========================================================--> */}
                            <div class="section-title clearfix">
                                <h3>Message Window</h3>
                            </div>
                            {/* <!--end section-title--> */}
                            <div id="messaging__chat-window" class="messaging__box">
                                <div class="messaging__header">
                                    <div class="float-left flex-row-reverse messaging__person">
                                        <h5 class="font-weight-bold">Karam Rajpal</h5>
                                        <figure class="mr-4 messaging__image-person" data-background-image="assets/img/author-02.jpg"></figure>
                                    </div>
                                    <div class="float-right messaging__person">
                                        <h5 class="mr-4">You</h5>
                                        <figure id="messaging__user" class="messaging__image-person" data-background-image="assets/img/author-06.jpg"></figure>
                                    </div>
                                </div>
                                <div class="messaging__content" data-background-color="rgba(0,0,0,.05)">
                                    <div class="messaging__main-chat">
                                    <div class="messaging__main-chat__bubble user">
                                            <p>
                                                Can I get Details about your service plans
                                                <small>24 hour ago</small>
                                            </p>
                                        </div>
                                        <div class="messaging__main-chat__bubble">
                                            <p>
                                               Yes sure!! What kind of design requirement you have?
                                                <small>24 hour ago</small>
                                            </p>
                                        </div>
                                        
                                        <div class="messaging__main-chat__bubble user">
                                            <p>
                                               I want to design Modular kitchen
                                                <small>24 hour ago</small>
                                            </p>
                                        </div>
                                        <div class="messaging__main-chat__bubble ">
                                            <p>
                                                I will send you our kitchen design gallery, so you can choose from there and also we can customize them
                                                <small>24 hour ago</small>
                                            </p>
                                        </div>
                                       
                                        <div class="messaging__main-chat__bubble user">
                                            <p>
                                                that will be great.. thank you for quick response
                                                <small>24 hour ago</small>
                                            </p>
                                        </div>
                                        <div class="messaging__main-chat__bubble ">
                                            <p>
                                                we are gratefull...have a good day sir
                                                <small>24 hour ago</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="messaging__footer">
                                    <form class="form">
                                        <div class="input-group">
                                            <input type="text" class="form-control mr-4" placeholder="Your Message"/>
                                            <div className="fileadd">
                                            <i class="fa fa-file-image-o" aria-hidden="true"></i>
                                            </div>
                                            <div class="input-group-append">
                                                <button class="btn btn-primary" type="submit">Send <i class="fa fa-send ml-3"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!--end col-md-9--> */}
                    </div>
                    {/* <!--end row--> */}
                </div>
           </section>
       </section>

            
        </div>
    );
}

export default MessagePanel;