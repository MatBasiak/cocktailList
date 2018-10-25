import React from 'react'
import style from './footer.scss'
import {Link} from 'react-router-dom'

export const Footer = (props) => {
    return(
        <div className={style.footer}>
            {props.children}
            footer
            
        </div>
    )
}

export default Footer