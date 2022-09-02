import React, { createContext, useContext } from "react";
import { HomeContextProviderProps, HomeContextType } from "./types";

const HomeContext = createContext({} as HomeContextType);

export const HomeContextProvider: React.FC<HomeContextProviderProps> = ({
    children,
}) => {
    return (
        <HomeContext.Provider value={{}}>
            {children}
        </HomeContext.Provider>
    );
};

export const useHomeContext = () => {
    return useContext(HomeContext);
};