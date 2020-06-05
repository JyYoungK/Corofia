//initiate react application
//Everything created from react is going to be inside here

import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Join from './components/Join/Join';
import Lobby from './components/Lobby/Lobby';

const App = () => (
    <Router>
        {/* Through query strings which we are going to pass the data through to the chat once we have the data we are going to render the chat component*/}
        <Route path ="/" exact component={Join} />
        <Route path ="/lobby" component={Lobby} />
    </Router>
);

export default App;
