import React from 'react';
import './SideDrawer.css';

function SideDrawer() {
    return (
        <nav className="side-drawer">
            <ul>
                <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li>
            </ul>
        </nav>
    )
}

export default SideDrawer;
