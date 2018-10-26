import React,{PureComponent} from 'react'


class Options extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            value:'pimms'
        }

        this.handleChange=this.handleChange.bind(this)
    }
    
    
     handleChange(event){
         this.setState({ value: event.target.value });
         this.props.data(this.state.value)
        // console.log(event.target.value);
    };
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