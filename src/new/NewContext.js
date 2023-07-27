
import React, { createContext, useState } from 'react'

export const NewContext = createContext();


export const NewProvider = (props) => {
    const { children } = props;
    const [schedule, setschedule] = useState([]);
    return (
        <NewContext.Provider value={{schedule,setschedule}}>
            {children}
        </NewContext.Provider>
    )
}