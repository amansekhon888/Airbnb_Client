import Divider from "../../Components/Divider/Divider.tsx";
import Banner from "../../Components/Home/Banner.tsx";
import Category from "../../Components/Home/Category.tsx";
import Recommended from "../../Components/Home/Recommended.tsx";
import PopularStays from "../../Components/Home/PopularStays.tsx";
import WeekendDeals from "../../Components/Home/WeekendDeals.tsx";
import { SearchProvider } from "../../Provider/SearchContext.tsx";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "../../Components/AuthModals/index.tsx"

const Home = () => {
    const location = useLocation();
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        if (location.state?.showAuthModal) {
            setOpenModal(true);
        }
    }, [location.state]);
    
    return (
        <div>
            <SearchProvider>
                <Banner />
            </SearchProvider>
            <Divider classes="my-10" />
            <Category/>
            <Recommended/>
            <PopularStays/>
            <WeekendDeals/>
            <Modal openModal={openModal} setOpenModal={setOpenModal} />
        </div>
    )
}

export default Home