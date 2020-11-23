import React from 'react';
import Backdrop from './components/Backdrop/Backdrop';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Toolbar from './components/Toolbar/Toolbar';



function App() {
  return (
    <div style={{ height: '100%' }}>
      <Toolbar />
      <SideDrawer />
      <Backdrop />
      <main style={{ marginTop: '64px' }}>
        <p>Page content</p>
      </main>
    </div>
  );
}

export default App;
