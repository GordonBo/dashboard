import React, { createContext, useContext, useState } from "react";


const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isSelected, setIsSelected] = useState(initialState);
    const handleClick = (clicked) => {
        setIsSelected({ ...initialState, [clicked]: true })

    }

    const [screenSize, setScreenSize] = useState(undefined)

    return (
        <StateContext.Provider
            value={{
                activeMenu, setActiveMenu, isSelected,
                screenSize, setScreenSize, setIsSelected, handleClick
            }}


        >
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)