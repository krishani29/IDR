import React from 'react';

function RadioFilter(props) {
    const types = [props.type1, props.type2, props.type3, props.type4 , props.type5]
    return (
        <div className="filters">
            <div class="form-group" id="type">
                <h3 for="type">{props.filterTitle}</h3>
                 <ul className="typeList">
                 {types.map(type => 
                    <li class="framed">
                        <input type="radio" name="type" value="1" required /> {type}
                    </li>
                 )}                   
                </ul>  
            </div>

        </div>
    );
}
function RadioFilterRoom(props) {
    const types = [props.type1, props.type2, props.type3, props.type4 , props.type5, props.type6, props.type7, props.type8, props.type9, props.type10]
    return (
        <div className="filters">
            <div class="form-group" id="type">
                <h3 for="type">{props.filterTitle}</h3>
                 <ul className="typeList">
                 {types.map(type => 
                    <li class="framed">
                        <input type="radio" name="type" value="1" required /> {type}
                    </li>
                 )}                   
                </ul>  
            </div>

        </div>
    );
}

export {RadioFilter,RadioFilterRoom};