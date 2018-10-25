import React from 'react';
import style from './header.scss';
import {Link} from 'react-router-dom';



const Header = (props) => {

    const showMenu = () => {
        

    }


    const links = [
        {
            link: 'leave',
            name:'Leave'
            
        },
        {
            link: 'newrecipe',
            name:'Dodaj Drinka'
        }, {
            link: 'mixer',
            name:'Mixer'
        },
        {
            link: 'login',
            name:'Zaloguj'
        }
    ]

    const logo = () => (
        <Link to='/' className={style.logo}>
            <img alt='Shaker' src='./images/shaker.jpeg'/>
        </Link>
    );
   
    return (
        <header className={style.header}>          
            <div>
            {logo()}
            </div>  
            <div className={style.menu} >Menu</div>
            <div className={style.links}>
                {links.map((link) => (
                <div className={style.link}><Link to={`${link.link}`}>{link.name}</Link></div>     )              
            )}
            </div>
     
        </header>
    );
};

export default Header;
