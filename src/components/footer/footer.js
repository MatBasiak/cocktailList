import React from 'react'
import style from './footer.scss'
import {CURRENT_YEAR} from '../config'


export const Footer = (props) => {
   
    const social = [{
        link: 'www.facebook.com',
        icon:'facebook.png'
    },
        {
            link: 'www.github.com/frechpriest',
            icon:'github.png'
        },
        {
            link: 'www.gmail.com',
            icon:'email.png'
        },
        {
            link: 'www.skype.com',
            icon:'skype.png'
    }
    
    ]
   
   
    return (
        <div className={style.footer}>
          
            <div className={style.container}>
            <div className={style.copy}>
            {'\u00A9'} Mateusz Basiak {CURRENT_YEAR} All rights reserved</div>
                
            {social.map((item) => (
                <a  href={item.link}><img src={`./images/${item.icon}`}/></a>
            )
                )}
            </div>
                   
        </div>
    )
}

export default Footer