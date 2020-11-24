import React, { useState, useEffect, useRef } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import ContactPage from './pages/ContactPage';
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

                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/games' component={() => <GamesPage setPageHeight={setPageHeight} />} />
                        <Route exact path='/games/:game' component={GameDetail} />
                        <Route exact path='/contact' component={ContactPage} />
                        
                    </Switch>
                    
                </div>
                
            </div>

            
        </div>
    )
};

export default App;