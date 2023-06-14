import React from 'react';
import SideBar from './SideBar';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { isLoading, isAuthenticated } = useAuth0();

  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
        </div>
    </React.Fragment>
  );
}

export default App;
