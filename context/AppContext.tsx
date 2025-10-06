'use client';
import React, {createContext, useState, useContext, ReactNode} from "react";

interface AppContextType {
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
    searchContent: string;
    setSearchContent: (value: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({children}: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchContent, setSearchContent] = useState('');
    return (
        <AppContext.Provider
            value={{
                isLoading,
                setIsLoading,
                searchContent,
                setSearchContent
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};