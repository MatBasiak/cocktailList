import React,{Component} from 'react';
import style from './header.scss';
import { Link } from 'react-router-dom';
import Links from '../links'
import { CSSTransition, transit } from "react-css-transition";


const transitionStyles = {
    defaultStyle: {
        transform: "translate(-200px, 0)",
        opacity: 0,
    },
    enterStyle: {
        transform: transit("translate(0, 0)", 500, "ease-in-out"),
        opacity:0.5,
    },
    leaveStyle: {
        transform: transit("translate(-200px, 0)", 500, "ease-in-out"),
        opacity:0.5,
    },
    activeStyle: {
      transform: "translate(0, 0)",
    },
  };



class Header extends Component{
    constructor(props) {
        super(props)
        this.state = {
            links:[
                // {
                //     link: 'leave',
                //     name: 'Leave',
                //     type: "text",
                //     class:  style.link 
                    
            
                // },
                {
                    link: 'newrecipe',
                    name: 'Dodaj Koktail',
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
            ],
            active: false
        }
      
                
}
    
handleClick=()=>{
    this.setState({active: !this.state.active});
  }
    
    render() {
        return (
            <header className={style.header}>
                <div>
            <Link to='/' className={style.logo}>
            <img alt='Shaker' src='./images/shaker.jpeg' />
            </Link>
                </div>
                <div className={style.title}>czego by sie dzisiaj napic ....?</div>
                <div className={style.menu} onClick={this.handleClick}><div className={style.titleMenu}>Menu</div></div>
                <CSSTransition {...transitionStyles} active={this.state.active}>
                <div className={style.links}>
                
                        <Links data={this.state.links} />
                        </div>
                </CSSTransition>
                
     
            </header>
        );
    }
};

export default Header;
