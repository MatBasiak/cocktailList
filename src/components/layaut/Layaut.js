import React, { Component } from 'react'
import MainPage from '../mainpage/mainpage'
import Legal from '../legal/legal'


class Layaut extends Component {
    
    constructor(props) {
        super(props),
         this.state = {
            islegal:false
        }
        }
     legal()  {
        this.setState({
             islegal:true
         })
       
   }
   
    render() {
        return (
            <div>
                {!this.state.islegal ?
                    <Legal legal={() => this.legal()} />
                    : 
                    <MainPage/>
                    }
            </div>
        );
    }
}

export default Layaut;

