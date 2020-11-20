import React, { useState, useEffect, useRef } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import GamesPage from './pages/GamesPage';
import GameDetail from './pages/GameDetail';

import Header from './components/Header';

const App = () => {

    const [height, setHeight] = useState(0);

    const containerRef = useRef();

    useEffect(() => {
        setHeight(containerRef.current.scrollHeight);
    }, []);

    const setPageHeight = () => {
        setHeight(containerRef.current.scrollHeight);
    }


    return (
        <div className='app-container' ref={containerRef} style={{'height': height}}>
            <Header />

            <div className='content'>

                <div className='container'>
                    <Switch>
                        <Route exact path='/games' component={() => <GamesPage setPageHeight={setPageHeight} />} />
                        <Route exact path='/games/:game' component={GameDetail} />
                    </Switch>
                    
                </div>
                
            </div>

            
        </div>
    )
};

export default App;