import React, { createContext, useContext, useState } from 'react';
export const userContext = createContext()
const ContextApi = ({children}) => {
    const [color,setColor]= useState('#0077B5')
    const value= {
            color,
            setColor
    }
    return (
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    );
};

export default ContextApi;