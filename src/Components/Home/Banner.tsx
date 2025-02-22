import { Add, CloseOutlined, PlaceOutlined, Remove, SearchRounded } from "@mui/icons-material"
import BannerBg from "../../assets/images/bannerBg.png"
import Flatpickr from "react-flatpickr";
import { useContext, useEffect, useRef, useState } from "react";
import { SearchContext } from "../../Provider/SearchContext";
import { Link } from "react-router-dom";
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
                            <div id="searchSec" className="max-w-[1300px] mx-auto bg-text2 flex items-center justify-between rounded-md gap-4 p-3 pl-6">
                                <div className="flex items-start flex-col gap-1">
                                    <label htmlFor="where" className="font-medium text-text1">Where</label>
                                    <div className='relative' ref={searchDropdownRef}>
                                        <button className='text-nowrap' onClick={handleSearchDropdown}>Anywhere</button>
                                        {showSearch &&
                                            <div
                                                id="dropdown-menu"
                                                className="absolute z-40 top-[100%] right-0 w-max pt-5 duration-300 left-1/2 -translate-x-1/2"
                                            >
                                                <div className="flex flex-col gap-2 bg-white rounded-xl shadow-[0px_4px_20px_0px_#151F2533] py-4 px-3 w-[300px]">
                                                    <div className='relative'>
                                                        <input type="text" className='w-full rounded border-border1 pr-9' placeholder='Search destinations' />
                                                        <button className='absolute top-1/2 -translate-y-1/2 right-3 flex items-center justify-center'><CloseOutlined className='!text-lg' /></button>
                                                    </div>
                                                    <div className='max-h-32 overflow-auto'>
                                                        <ul>
                                                            <li className='w-full flex items-center gap-2 cursor-pointer py-1 px-2 hover:bg-gray-100 duration-300'>
                                                                <PlaceOutlined className='!text-lg' /> Dubai
                                                            </li>
                                                            <li className='w-full flex items-center gap-2 cursor-pointer py-1 px-2 hover:bg-gray-100 duration-300'>
                                                                <PlaceOutlined className='!text-lg' /> Abu Dhabi
                                                            </li>
                                                            <li className='w-full flex items-center gap-2 cursor-pointer py-1 px-2 hover:bg-gray-100 duration-300'>
                                                                <PlaceOutlined className='!text-lg' /> Sharjha
                                                            </li>
                                                            <li className='w-full flex items-center gap-2 cursor-pointer py-1 px-2 hover:bg-gray-100 duration-300'>
                                                                <PlaceOutlined className='!text-lg' /> Sharjha
                                                            </li>
                                                            <li className='w-full flex items-center gap-2 cursor-pointer py-1 px-2 hover:bg-gray-100 duration-300'>
                                                                <PlaceOutlined className='!text-lg' /> Sharjha
                                                            </li>
                                                            <li className='w-full flex items-center gap-2 cursor-pointer py-1 px-2 hover:bg-gray-100 duration-300'>
                                                                <PlaceOutlined className='!text-lg' /> Sharjha
                                                            </li>
                                                            <li className='w-full flex items-center gap-2 cursor-pointer py-1 px-2 hover:bg-gray-100 duration-300'>
                                                                <PlaceOutlined className='!text-lg' /> Sharjha
                                                            </li>
                                                            <li className='w-full flex items-center gap-2 cursor-pointer py-1 px-2 hover:bg-gray-100 duration-300'>
                                                                <PlaceOutlined className='!text-lg' /> Sharjha
                                                            </li>
                                                            <li className='w-full flex items-center gap-2 cursor-pointer py-1 px-2 hover:bg-gray-100 duration-300'>
                                                                <PlaceOutlined className='!text-lg' /> Sharjha
                                                            </li>
                                                            <li className='w-full flex items-center gap-2 cursor-pointer py-1 px-2 hover:bg-gray-100 duration-300'>
                                                                <PlaceOutlined className='!text-lg' /> Sharjha
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <label htmlFor="check-in" className="font-medium text-text1">
                                        Check-In - Check-Out
                                    </label>
                                    <Flatpickr
                                        options={{
                                            mode: "range",
                                            dateFormat: "Y-m-d",
                                            showMonths: showMonths ?? 1,
                                            allowInput: true,
                                            minDate: "today",
                                            disable: []
                                        }}
                                        className="px-0 py-1 placeholder:text-text1 text-text1 border-none w-full focus:ring-0 text-start bg-transparent"
                                        placeholder="Check-in - Check-out"
                                    />
                                </div>
                                <div className="flex items-start flex-col gap-1">
                                    <label htmlFor="who" className="font-medium text-text1">Who</label>
                                    <div className='relative' ref={guestDropdownRef}>
                                        <button className='text-nowrap' onClick={handleGuestDropdown}>Add Guest</button>
                                        {showGuest &&
                                            <div
                                                id="dropdown-menu"
                                                className="absolute z-30 top-[100%] right-0 w-max pt-5 duration-300 left-1/2 -translate-x-1/2"
                                            >
                                                <div className="flex flex-col gap-2 bg-white rounded-xl shadow-[0px_4px_20px_0px_#151F2533] py-4 px-3 w-[300px]">
                                                    <div className='flex items-center justify-between gap-6'>
                                                        <div>
                                                            <span className='font-medium'>Adult</span>
                                                        </div>
                                                        <div className='flex items-start gap-2'>
                                                            <button className='text-primary'>
                                                                <Remove className='!text-lg' />
                                                            </button>
                                                            <span className='font-medium text-nowrap'>0</span>
                                                            <button className='text-primary' >
                                                                <Add className='!text-lg' />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-start justify-between gap-6'>
                                                        <div>
                                                            <span className='font-medium'>Children</span>
                                                            <p className='text-xs text-text3'>Ages 0 to 17</p>
                                                        </div>
                                                        <div className='flex items-center gap-2'>
                                                            <button className='text-primary'>
                                                                <Remove className='!text-lg' />
                                                            </button>
                                                            <span className='font-medium text-nowrap'>0</span>
                                                            <button className='text-primary' >
                                                                <Add className='!text-lg' />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className='text-end'>
                                                        <button className='py-2 !text-sm bg-primary px-4 rounded text-white hover:bg-[#1c7379] duration-300' onClick={handleGuestDropdown}>Done</button>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <Link to="/property-list" className="!w-14 !h-14 btn1 !rounded-md bg-primary flex items-center justify-center text-white"><SearchRounded className="!text-3xl" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Banner