import React from 'react'


const Options = (props) => {
    
        return (

            <select name={props.name}>
                {props.items.map((item, i) => 
                   
                    <option key={i} value={item.Alkohol}>{item.Alkohol}</option>
                )}
            
            </select>
    
        )
    }

        
    

export default Options