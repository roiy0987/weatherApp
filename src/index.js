import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import Err from './Err';



class App extends React.Component {

    state={lat:null,weather:'',lon:null,errorMessage:'',apiKey:"2f724f10fd4d5a2f2745607ee3bbf7cc"};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) =>{ this.setState({lat: position.coords.latitude, lon: position.coords.longitude})},
            (err) => this.setState({errorMessage: err.message})
        );
        
    }


    renderContent(){
        if(this.state.lat===null&&this.state.errorMessage===''){
            return <Spinner message="Please accept location request"/>;
        }
        if(this.state.lat==null){
            return <Err message={this.state.errorMessage}/>;
        }
        return <SeasonDisplay lat={this.state.lat}/>;
    }

    render(){
        return(
            <div>
                {this.renderContent()}
                <h1>Hello</h1>
            </div>
            
        );
    }
}

const container = document.getElementById('root');
const root=ReactDOM.createRoot(container);
root.render(<App />);


