import React, { useState } from 'react';
import Backdrop from './components/Backdrop/Backdrop';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Toolbar from './components/Toolbar/Toolbar';
import './App.css';



function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  }

  const backdropClickHandler = () => {
    // console.log('close');
    setSideDrawerOpen(false);
  }

  return (
    <div style={{ height: '100%' }}>
      <Toolbar drawerToggleClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {sideDrawerOpen && <Backdrop backdropClickHandler={backdropClickHandler} />}
      <main style={{ marginTop: '64px' }}>
        <p>Page content</p>
      </main>
    </div>
  )
}

export default App;
