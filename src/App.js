import React, { useState, useEffect, useRef, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Context } from './store/Store';
import axios from 'axios';

import './App2.css';

import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import ContactPage from './pages/ContactPage';
import GameDetail from './pages/GameDetail';

import ErrorBoundary from './components/ErrorBoundary';

import Header from './components/Header';

const App = () => {

    const [height, setHeight] = useState(0);

    const containerRef = useRef();

    useEffect(() => {
        //setHeight(containerRef.current.scrollHeight);


    }, []);

    // const setPageHeight = () => {
    //     setHeight(containerRef.current.scrollHeight);
    // }


    return (
        <div className='app-container' ref={containerRef} style={{'height': height}}>
            <Header />

            <div className='content'>

                <div className='container'>
                    <Switch>
                        <ErrorBoundary>

                            <Route exact path='/' component={HomePage} />
                            <Route exact path='/games' component={() => <GamesPage />} />
                            <Route exact path='/games/:game' component={GameDetail} />
                            <Route exact path='/contact' component={ContactPage} />

                        </ErrorBoundary>
                        
                        
                    </Switch>
                    
                </div>
                
            </div>

            
        </div>
    )
};

export default App;