import React, {useState} from 'react';
import StoreContext from './Context'

const StoreProvider = ({children}) => {

    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token') || '{}'))

    localStorage.setItem('token', JSON.stringify(token))

    return (
        <StoreContext.Provider
         value={{
             token,
             setToken,
         }}
        >
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;