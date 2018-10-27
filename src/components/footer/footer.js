import React,{Component} from 'react'
import style from './footer.scss'
import {CURRENT_YEAR} from '../config'


class Footer extends Component{
    constructor() {
        super()
   
        this.state = {
            social: [{
                link: 'www.facebook.com',
                icon: 'facebook.png'
            },
            {
                link: 'https://github.com/frechpriest?tab=repositories',
                icon: 'github.png'
            },
            {
                link: 'mailto:mateusz.basiak@gmail.com',
                icon: 'email.png'
            },
            {
                link: 'www.skype.com',
                icon: 'skype.png'
            },
                {
                    link: 'www.linkedin.com',
                    icon: 'pobrane.png'
                }
    
            ]
        }
    }
   
    render() {
        return (
            <div className={style.footer}>
          
                <div className={style.container}>
                    <div className={style.copy}>
                        {'\u00A9'} Mateusz Basiak {CURRENT_YEAR} All rights reserved</div>
                
                    {this.state.social.map((item, i) => (
                        <a href={item.link} key={i}><img src={`./images/${item.icon}`} /></a>
                    )
                    )}
                </div>
                   
            </div>
        )
    }
}

export default Footer