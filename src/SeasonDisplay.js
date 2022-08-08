import './SeasonDisplay.css';
import React from 'react';

const seasonConfig={
    summer:{
        text:"Let's go to the beach!",
        iconName:'sun'
    },
    winter:{
        text:"It's cold outside!",
        iconName:'snowflake'
    }

};

const getSeason=(lat,month)=>{
    if(month>2&&month<9){
        return lat>0 ? 'summer' : 'winter';
    }
    return lat>0?'winter':'summer';
}


const SeasonDisplay=(props)=>{
    const season= getSeason(props.lat,new Date().getMonth());
    const {iconName,text}= seasonConfig[season];
    return(
        <div className={`season-display ${season}`}>
            <h2><i className={`icon-left huge ${iconName} icon`}></i></h2>
            <img alt='hello' src='./icons8-sun'/>
            <h1>{text}</h1>
            <h2><i className={`icon-right huge ${iconName} icon`}></i></h2>
        </div>
    );
};

export default SeasonDisplay;