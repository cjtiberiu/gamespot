import React, { useRef } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App2.css';

import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import ContactPage from './pages/ContactPage';
import GameDetail from './pages/GameDetail';

//import GameModal from './components/GameModal';

import ErrorBoundary from './components/ErrorBoundary';

import Header from './components/Header';

const App = () => {


    const containerRef = useRef();


    return (
        <div className='app-container' ref={containerRef}>
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