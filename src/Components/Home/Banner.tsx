import { Add, CloseOutlined, PlaceOutlined, Remove, SearchRounded } from "@mui/icons-material"
import BannerBg from "../../assets/images/bannerBg.png"
import Flatpickr from "react-flatpickr";
import { useContext, useEffect, useRef, useState } from "react";
import { SearchContext } from "../../Provider/SearchContext";
import { Link } from "react-router-dom";
import CommanSearch from "../CommanSearch/CommanSearch";
const Banner = () => {
    const context = useContext(SearchContext);

    const [date, setDate] = useState<Date | string>("");
    const [showMonths, setShowMonths] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setShowMonths(1);
        } else {
            setShowMonths(2);
        }
    }, [])
    const [showGuest, setShowGuest] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const guestDropdownRef = useRef<HTMLDivElement>(null);
    const searchDropdownRef = useRef<HTMLDivElement>(null);

    const handleGuestDropdown = () => {
        setShowGuest(!showGuest);
    }
    const handleSearchDropdown = () => {
        setShowSearch(!showSearch);
    }

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setShowMonths(1);
        } else {
            setShowMonths(2);
        }
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                guestDropdownRef.current &&
                !guestDropdownRef.current.contains(event.target as Node)
            ) {
                setShowGuest(false);
            }
            if (
                searchDropdownRef.current &&
                !searchDropdownRef.current.contains(event.target as Node)
            ) {
                setShowSearch(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    // when scroll to id={searchSec} section then headerTab show and searchSec hide
    const handleScroll = () => {
        const searchSec = document.getElementById('searchSec');
        const headerTab = document.getElementById('headerTab');
        if (searchSec && headerTab) {
            const searchSecOffsetTop = searchSec.offsetTop + 180; // Offset by 100px
            if (window.scrollY > searchSecOffsetTop) {
                // Show headerTab
                setShowGuest(false);
                setShowSearch(false);
                headerTab.style.opacity = '1';
                searchSec.style.opacity = '0'

                searchSec.style.transition = 'all .3s ease';
            } else {
                // Hide headerTab
                headerTab.style.opacity = '0';
                searchSec.style.opacity = '1';

                searchSec.style.transition = 'all .3s ease';
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div >
            <div className="container mx-auto">
                <div className='relative h-[440px] rounded-2xl flex items-center justify-center'>
                    <div className="absolute top-0 left-0 w-full h-full z-10 rounded-2xl overflow-hidden">
                        <img src={BannerBg} alt="" className="w-full h-full object-cover" />
                        <div className="w-full h-full absolute top-0 left-0 bg-[#151f259c]"></div>
                    </div>
                    <div className="relative z-20 text-center">
                        <h1 className='text-5xl font-bold text-text2'>Let’s Find Your <span className="text-[#1BB1BB]">Dream House</span></h1>
                        <p className='text-text2 max-w-[890px] mx-auto mt-5 md:text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        <div className="mt-16">
                            <CommanSearch/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Banner