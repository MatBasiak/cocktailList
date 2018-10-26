import React,{Component} from 'react';
import style from './header.scss';
import { Link } from 'react-router-dom';
import Links from '../links'



class Header extends Component{
    constructor(props) {
        super(props)
        this.state = {
            links:[
                {
                    link: 'leave',
                    name: 'Leave',
                    type: "text",
                    class:  style.link 
                    
            
                },
                {
                    link: 'newrecipe',
                    name: 'Dodaj Drinka',
                    type: "text",
                    class:style.link
                    
                }, {
                    link: 'mixer',
                    name: 'Mixer',
                    type: "text",
                    class:style.link
                },
                {
                    link: 'login',
                    name: 'Zaloguj',
                    type: "text",
                    class:style.link
                }
            ]
        }
      
                
}
    

    
    render() {
        return (
            <header className={style.header}>
                <div>
                <Link to='/' className={style.logo}>
            <img alt='Shaker' src='./images/shaker.jpeg' />
        </Link>
                </div>
                <div className={style.menu} >Menu</div>
                <div className={style.links}>
                    <Links data={this.state.links} />
                </div>
     
            </header>
        );
    }
};

export default Header;
