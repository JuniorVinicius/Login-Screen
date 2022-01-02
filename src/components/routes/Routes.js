import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    } from 'react-router-dom';

import StoreProvider from '../context/Provider';
import LoginPage from '../pages/login/login';
import Profile from '../pages/profile-user/Profile'

export default function MainRoutes(){
    return(
        <Router>
            <StoreProvider>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </StoreProvider>
        </Router>
    )
}