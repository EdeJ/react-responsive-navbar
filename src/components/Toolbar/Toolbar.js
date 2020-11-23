import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

function Toolbar() {
    return (
        <header className="toolbar">
            <nav className="toolbar-navigation">
                <div>
                    <DrawerToggleButton />
                </div>
                <div className="toolbar-logo" ><a href="/">THE LOGO</a></div>
                <div className="spacer"></div>
                <div className="toolbar-navigation-items">
                    <ul>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">Users</a></li>
                    </ul>
                </div>
            </nav>
        </header >
    )
}

export default Toolbar;