import React from 'react';
import {Link} from 'react-router-dom'


const links=(props)=>{

        return (
            <div>
                {props.data.map((link, i) => (
                    <div key={i} className={link.class}><Link className={link.class} key={i} to={`${link.link}`}>{link.name}</Link></div>)
                    )}
                
            </div>
        );
    
}


export default links;