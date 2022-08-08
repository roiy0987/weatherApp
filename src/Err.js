import React from 'react';

const Err=(props)=>{
    return (
        <div className="ui placeholder segment">
            <div className="ui icon header">
                <i className="search icon"></i>
                Error! {props.message}
            </div>
            <div className="inline">
                <div className="ui primary button">Allow location to the browser</div>
            </div>
        </div>
    );
};

export default Err;