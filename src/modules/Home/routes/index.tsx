import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { HomeContextProvider } from "../context";
import { Routes } from "./routes";

export const HomeModule: React.FC<any> = () => {
    return (
        <HomeContextProvider>
            <Routes />
        </HomeContextProvider>
    );
};