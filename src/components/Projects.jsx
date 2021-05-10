import React from 'react';

function Projects(props) {
    return (
        <>
            <div className="projects">
                <div className="row">
                    <div className="col-6 p1">
                        <div id="c1" className="mt-2"></div>
                    </div>
                    <div className="col-6 p1">
                        <div id="c2" className="my-2"></div>
                        <div id="c3" className="my-2"></div>
                    </div>
                    <caption>3BHK Modern look interior</caption>
                </div>


            </div>

           
        </>
    );
}
function Project2(params) {
    return(
        <div className="projects ">
                <div className="row">
                    <div className="col-6 p1">
                        <div id="c4" className="mt-2"></div>
                    </div>
                    <div className="col-6 p1">
                        <div id="c5" className="my-2"></div>
                        <div id="c6" className="my-2"></div>
                    </div>
                    <caption>Corporate Office</caption>
                </div>


            </div>
    )
    
}
function AddProject(params) {
    return(
        <div className="projects ">
             <div className="addProject row ">
            <a href={`${process.env.PUBLIC_URL}/add-project`} >
            <button className="btn btn-primary" id="plus">+ Add Project</button>
            </a>
              
             </div>   
                    
        </div>
    )
    
}
export  {Projects, Project2, AddProject};