import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the state with proper types
interface Inputs {
    destination: string;
    checkIn: string;
    checkOut: string;
    guests: number;
}

interface SearchContextType {
    inputs: Inputs,
    handleInputChange: (field: keyof Inputs, value: string | number) => void,
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

interface DashboardProviderProps {
    children: ReactNode;
}

export const SearchProvider: React.FC<DashboardProviderProps> = ({
    children,
}) => {
    const [inputs, setInputs] = useState<Inputs>({
        destination: '',
        checkIn: '',
        checkOut: '',
        guests: 1,
    });

    const handleInputChange = (field: keyof Inputs, value: string | number) => {
        setInputs((prev) => ({
            ...prev,
            [field]: field === 'guests' ? Number(value) : value,
        }));
    };

    return (
        <SearchContext.Provider value={{ inputs, handleInputChange }}>
            {children}
        </SearchContext.Provider>
    );
};