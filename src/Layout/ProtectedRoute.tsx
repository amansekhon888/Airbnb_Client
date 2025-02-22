import { useEffect, useState } from "react";
import { useGetUserQuery } from "../services/apiSlice"
import Modal from "../Components/AuthModals/index"
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token");
    const { data: user, error, isLoading, refetch: verifyToken } = useGetUserQuery(token);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        if (!isLoading && error) {
            navigate("/", { state: { showAuthModal: true } }); 
        }
    }, [error, isLoading]);
    
    return <>
        {children}
        <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </>
}

export default ProtectedRoute