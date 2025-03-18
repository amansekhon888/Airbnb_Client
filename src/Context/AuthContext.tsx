import { createContext, useContext, useState } from "react";

interface AuthContextProps {
    isAuthenticated: boolean;
    setIsAuthenticated: (auth: boolean) => void;
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, openModal, setOpenModal }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};
