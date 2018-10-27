import React, { PureComponent } from 'react'
import style from './options.scss'


class Options extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }

        
    }
    
    
    handleChange=(event)=> {
        console.log(event.target.value);
         this.setState({ value: event.target.value }, () => { 
            
            this.handleUpdate();
         });
        
    };
    handleUpdate=()=>{
        this.props.data(this.state.value)
    }
    render() {
        

        return (
            

            <select onChange={this.handleChange} name={this.props.name} value={this.state.value}>
                {this.props.items.map((item, i) =>
                   
                    <option key={i} value={item.Alkohol}>{item.Alkohol}</option>
                )}
            
            </select>
    
        )
    }
    }

        
    

export default Options