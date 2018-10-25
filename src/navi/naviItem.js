import React from 'react';
import {Link} from 'react-router-dom'

import FontAwesome from 'react-fontawesome'
import style from './sideNav.scss'


const items = [
    {
        type: style.options,
        icon: 'home',
        text: 'Home',
        link: '/'
    },
    {
        type: style.options,
        icon: 'file-alt',
        text: 'News',
        link: '/news'
    },
    {
        type: style.options,
        icon: 'play',
        text: 'Videos',
        link: '/videos'
    },
    {
        type: style.options,
        icon: 'sign-in-alt',
        text: 'Sign-in',
        link: '/sign-in'
    },
    {
        type: style.options,
        icon: 'sign-out-alt',
        text: 'Sign-out',
        link: '/sign-out'
    }
];
const showItems = () => {
    return items.map((item, i) => {
        return (
            <div key={i} >
                <Link to={item.link}>
                    <FontAwesome name={item.icon}/>
                    {item.text}
                </Link>
            </div>

        )
    })
};


const SideNavItems = () => {
    return (
        <div>
            {showItems()}
        </div>


    );
};

export default SideNavItems;