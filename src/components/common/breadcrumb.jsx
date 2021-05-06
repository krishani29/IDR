import React from 'react';

function breadcrumb(props) {
    const {title, parent} = props;
    return (
        <div>
              <ol class="breadcrumb">
                    {/* <li class="breadcrumb-item"><a href="#">Home</a></li> */}
                    <li class="breadcrumb-item"><a href="/">{parent}</a></li>
                    <li class="breadcrumb-item active">{title}</li>
                </ol>
            
        </div>
    );
}

export default breadcrumb;