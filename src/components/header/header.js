import React from 'react';
import style from './header.scss';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import SideNavigation from '../../navi/navi'

const Header = (props) => {

    const logo = () => (
        <Link to='/' className={style.logo}>
            <img alt='Shaker' src='/images/shaker.jpeg'/>
        </Link>
    );
   
    return (
        <header className={style.header}>
            <SideNavigation {...props}/>
            <div className={style.headerOpt}>
                <div className={style.bars}>
            < FontAwesome name='bars'
                         onClick={props.onOpenNav}
                         style={{
                             color: 'red',
                             padding: '100px',
                         }}/>

            </div>
                {logo()}

            </div>
            <Link to='/leave'>leave</Link>
            <Link to="/newrecipe">new recipe</Link>
            <Link to="/mixer">Miksuj</Link>
            <Link to='/login'>zaloguj</Link>
        </header>
    );
};

export default Header;
