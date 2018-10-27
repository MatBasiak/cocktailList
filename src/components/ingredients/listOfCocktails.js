import React, { Component } from 'react'
import Database from './database'
import style from './listOfCoktails.scss'



class listOfCocktails extends Component {

    constructor(props) {
        super(props)

console.log(props);
    }
  
    render() {
        return (
            <div className={style.container}>
                <div className={style.info}>{`Wybrales drinka na bazie ${this.props.data} i ma byc ${this.props.taste} w smaku`}</div>
            
               <div> <Database base={this.props.data} taste={this.props.taste} /></div>
                </div>
        );
    }
}

export default listOfCocktails


