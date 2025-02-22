import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import { AccountCircleRounded, Add, CloseOutlined, LanguageOutlined, MenuOutlined, PlaceOutlined, Remove, SearchRounded } from '@mui/icons-material'
import Modal from "../AuthModals"
import { useContext, useEffect, useRef, useState } from 'react'
import Flatpickr from "react-flatpickr"
import { SearchProvider } from '../../Provider/SearchContext'

const Header = () => {
    const context = useContext(SearchProvider);
    // console.log("Header: ", context);
    const location = useLocation()
    const [openModal, setOpenModal] = useState(false);
    const [showMonths, setShowMonths] = useState<number | undefined>(undefined);
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

    return (
        <>
            <header className='border-b border-border1 sticky top-0 z-50 bg-white'>
                <div className="container mx-auto">
                    <nav className='flex items-center justify-between py-5'>
                        <div>
                            <a href='/' className='text-2xl font-bold text-gray-900'>
                                <img src={Logo} alt='Logo' className='w-36' />
                            </a>
                        </div>
                        <div id="headerTab" className={`duration-300 ${location.pathname === "/" && "opacity-0"}`}>
                            <div className='border border-border1 rounded-md py-2 pl-4 pr-2 flex items-center gap-4'>
                                <div className='relative' ref={searchDropdownRef}>
                                    <button className='text-nowrap' onClick={handleSearchDropdown}>Anywhere</button>
                                    {showSearch &&
                                        <div
                                            id="dropdown-menu"
                                            className="absolute z-30 top-[100%] right-0 w-max pt-4 duration-300 left-1/2 -translate-x-1/2"
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
                                <div className='border-l border-border1 h-5'></div>
                                <Flatpickr
                                    options={{
                                        mode: "range",
                                        dateFormat: "Y-m-d",
                                        showMonths: showMonths ?? 1,
                                        allowInput: true,
                                        minDate: "today",
                                        disable: []
                                    }}
                                    className="px-0 xl:px-3 py-1 placeholder:text-text1 text-text1 border-none focus:ring-0 text-center bg-transparent w-max"
                                    placeholder="Any week"
                                />
                                <div className='border-l border-border1 h-5'></div>
                                <div className='relative' ref={guestDropdownRef}>
                                    <button className='text-nowrap' onClick={handleGuestDropdown}>Add Guest</button>
                                    {showGuest &&
                                        <div
                                            id="dropdown-menu"
                                            className="absolute z-30 top-[100%] right-0 w-max pt-4 duration-300 left-1/2 -translate-x-1/2"
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
                                                    <button className='py-2 !text-sm bg-primary px-4 rounded text-white hover:bg-[#1bb1bb] duration-300' onClick={handleGuestDropdown}>Done</button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <button className="!w-10 !h-10 !rounded-md bg-primary flex items-center justify-center text-white hover:bg-[#1bb1bb] duration-300"><SearchRounded className="" /></button>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-1">
                                {/* <Link to='#' className='px-3.5 py-3 font-medium rounded-md text-text1 hover:text-primary hover:bgsecondary duration-300 flex '>Airbnb your home</Link> */}
                                <Link to='#' className='px-3.5 py-3 font-medium rounded-md text-text1 hover:text-primary hover:bg-secondary duration-300 flex '><LanguageOutlined className='!text-xl' /></Link>
                                <div className='relative group'>
                                    <button className='border border-text1 p-2 flex items-center gap-2 rounded-md ml-2' aria-expanded="false"
                                        aria-controls="dropdown-menu">
                                        <MenuOutlined className='!text-xl' />
                                        <AccountCircleRounded className='!text-2xl' />
                                    </button>
                                    <div
                                        id="dropdown-menu"
                                        className="absolute z-20 top-[99%] right-0 w-max pt-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-300"
                                    >
                                        <ul className="flex flex-col bg-white rounded-xl shadow-[0px_4px_20px_0px_#151F2533] py-2  min-w-[180px]">

                                            {/* If Login */}
                                            <li className='text-sm cursor-pointer text-text1 hover:text-primary hover:bg-gray-50 px-4 py-2 font-medium'>
                                                <Link to="/">Message</Link>
                                            </li>
                                            <li className='text-sm cursor-pointer text-text1 hover:text-primary hover:bg-gray-50 px-4 py-2 font-medium'>
                                                <Link to="/">Notifications</Link>
                                            </li>
                                            <li className='text-sm cursor-pointer text-text1 hover:text-primary hover:bg-gray-50 px-4 py-2 font-medium'>
                                                <Link to="/my-trips">Trips</Link>
                                            </li>
                                            <li className='text-sm cursor-pointer text-text1 hover:text-primary hover:bg-gray-50 px-4 py-2 font-medium'>
                                                <Link to="/wishlists">Wishlists</Link>
                                            </li>

                                            <li
                                                className="text-sm cursor-pointer text-text1 hover:text-primary hover:bg-gray-50 px-4 py-2"
                                                onClick={() => setOpenModal(true)}
                                            >
                                                Log in / Sign up
                                            </li>

                                            <hr className='my-1 border-border1' />
                                            <li className='text-sm cursor-pointer text-text1 hover:text-primary hover:bg-gray-50 px-4 py-2'>
                                                <Link to="/">Rent your home</Link>
                                            </li>
                                            <li className='text-sm cursor-pointer text-text1 hover:text-primary hover:bg-gray-50 px-4 py-2'>
                                                <Link to="/">Host an experience</Link>
                                            </li>
                                            <li className='text-sm cursor-pointer text-text1 hover:text-primary hover:bg-gray-50 px-4 py-2'>
                                                <Link to="/account-settings">Account</Link>
                                            </li>

                                            {/* If Login */}
                                            <hr className='my-1 border-border1' />
                                            <li className='text-sm cursor-pointer text-text1 hover:text-primary hover:bg-gray-50 px-4 py-2'>
                                                <Link to="/">Help center</Link>
                                            </li>
                                            <li className='text-sm cursor-pointer text-text1 hover:text-primary hover:bg-gray-50 px-4 py-2'>
                                                <Link to="/">Log out</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <Modal openModal={openModal} setOpenModal={setOpenModal} />
            </header>
        </>
    )
}

export default Header