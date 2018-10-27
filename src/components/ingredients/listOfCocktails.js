import React, { Component } from 'react'
import Database from './database'



class listOfCocktails extends Component {

    constructor(props) {
        super(props)

console.log(props);
    }
  
    render() {
        return (
            <div>
                {`wybrales drinka na bazie ${this.props.data} i ma byc ${this.props.taste} w smaku`}
            
                <Database base={this.props.data} taste={this.props.taste} />
                </div>
        );
    }
}

export default listOfCocktails


