import React from 'react';
import ReactDom from 'react-dom';
import HomePage from './HomePage'
import Navbar from './Navbar';

export default class App extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <>
            <Navbar/>
            <HomePage />
            </>
            
        );
           
    }
}

//ReactDom.render(<App/>, document.getElementById('root'));

