import React from 'react';
import Header2 from '../components/layouts/header2';
import Sidebar from '../components/layouts/sidebar';


function AddProject(props) {
    return (
        <div>
            <div class="page sub-page">

                <Header2 parent="Home" title="Add Project" />

                {/************ CONTENT ************************************************************************** */}
                <section class="content">
                    <section class="block">
                        <div class="container">
                            <div class="row">
                                <Sidebar />
                                {/* <!--end col-md-3--> */}
                                <div class="col-md-9">
                                <section>
                            <h2>Gallery</h2>
                            <div class="form-group">
                                            <label for="pname" class="col-form-label required">Project Name</label>
                                            <input pname="pname" type="text" class="form-control" id="pname" placeholder="Enter Project Name" required />
                                        </div>
                            <div class="file-upload-previews"></div>
                            <div class="file-upload">
                                <input type="file" name="files[]" class="file-upload-input with-preview" multiple title="Click to add files" maxlength="10" accept="gif|jpg|png"/>
                                <span><i class="fa fa-plus-circle"></i>Click or drag images here</span>
                            </div>
                        </section>

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

export default AddProject;