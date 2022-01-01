import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
    } from 'react-router-dom';

import StoreProvider from '../context/Provider';

import RoutesPrivate from './private/private';

import LoginPage from '../pages/login/login';
import Profile from '../pages/profile-user/Profile';

export default function (){
    <Router>
        <StoreProvider>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <RoutesPrivate path="/" element={<Profile/>}/>
            </Routes>
        </StoreProvider>
    </Router>
}