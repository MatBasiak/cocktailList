import React from 'react';
import SideNav, {MenuIcon} from 'react-simple-sidenav'
import SideNavItems from './naviItem'

const SideNavigation = (props) => {
    return (
        <div>
             <MenuIcon onClick={() => this.setState({showNav: true})}/>
            <SideNav
                showNav={props.showNav}
                onHideNav={props.onHideNav}
                navStyle={{
                    backgroundColor:'green',
                    maxWidth:'450px'
                }}
                items={['item1','item2']}
            />
                
            
        </div>
    );
};

export default SideNavigation;
