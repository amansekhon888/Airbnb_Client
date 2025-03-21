import { Add, PlaceOutlined, Remove, SearchRounded, CloseOutlined, Close } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import { useEffect, useRef, useState } from "react";
import { setDate } from "date-fns";
import { useSearchPropertiesQuery } from "../../services/api/property";

const CommanSearch = () => {
    // Local state for search inputs
    const [destination, setDestination] = useState<string>("");
    const [dates, setDates] = useState<{ checkIn: string; checkOut: string }>();
    const [guests, setGuests] = useState<number>(1);

    const [showMonths, setShowMonths] = useState<number>(window.innerWidth <= 768 ? 1 : 2);
    const [showGuest, setShowGuest] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const { search } = useSearchPropertiesQuery({})

    const guestDropdownRef = useRef<HTMLButtonElement>(null);
    const searchDropdownRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleResize = () => setShowMonths(window.innerWidth <= 768 ? 1 : 2);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
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

    const handleSearch = async () => {
        // const { checkIn, checkOut } = dates;
        console.log(dates);

        const queries = `location=${destination}&checkIn=${dates[0].toISOString().split("T")[0]}&checkOut=${dates[1].toISOString().split("T")[0]}&guests=${guests}`;
        console.log(queries);
        try {
            const res = await search(queries)
            console.log(res);

        } catch (error) {
            console.log(error);

        }
        // console.log(queries);
    };

    return (
        <div id="searchSec" className="max-w-[1300px] mx-auto bg-text2 relative rounded-md">
            {/* Location Search */}
            <div className="flex items-center justify-between ">
                <div className="flex items-center h-14 px-4 rounded-l-md hover:bg-gray-200 justify-between gap-2 w-1/3 border-r" ref={searchDropdownRef}>
                    <div className='w-full text-left h-full cursor-pointer flex items-center' onClick={() => setShowSearch(!showSearch)}>
                        <p
                            className="text-nowrap overflow-hidden text-ellipsis w-full block whitespace-nowrap"
                        >
                            {destination || "Anywhere"}
                        </p>
                    </div>
                    {destination &&
                        <button><Close className="!text-lg" /></button>
                    }
                    {showSearch && (
                        <div className="absolute z-40 top-[100%] right-0 w-full pt-2 duration-300 left-0">
                            <div className="flex flex-col gap-2 bg-white rounded-xl shadow-md py-4 px-3 w-full">
                                <div className='relative'>
                                    <input
                                        type="text"
                                        className='w-full rounded border-border1 pr-9'
                                        placeholder='Search destinations'
                                        value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                    />
                                    <button className='absolute top-1/2 -translate-y-1/2 right-3 flex items-center justify-center' onClick={() => setDestination("")}>
                                        <CloseOutlined className='!text-lg' />
                                    </button>
                                </div>
                                <div className='max-h-32 overflow-auto'>
                                    {["Dubai", "Abu Dhabi", "Sharjah"].map((city) => (
                                        <li key={city} className='w-full flex items-center gap-2 cursor-pointer py-1 px-2 hover:bg-gray-100 duration-300' onClick={() => { setDestination(city); setShowSearch(false); }}>
                                            <PlaceOutlined className='!text-lg' /> {city}
                                        </li>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Check-In / Check-Out */}
                <div className="flex items-start h-14 px-4 hover:bg-gray-200 flex-col overflow-hidden gap-1 w-1/3 border-r">
                    <Flatpickr
                        options={{
                            mode: "range",
                            dateFormat: "Y-m-d",
                            showMonths: showMonths ?? 1,
                            allowInput: true,
                            minDate: "today",
                        }}
                        className="px-0 py-1 h-full placeholder:text-text1 text-text1 border-none w-full focus:ring-0 text-start bg-transparent cursor-pointer"
                        placeholder="Check-in - Check-out"
                        value={dates || null}
                        onChange={setDates}
                    />
                </div>

                <div className="w-1/3 relative flex items-center justify-between pr-1.5 pl-4 rounded-r-md hover:bg-gray-200">
                    {/* Guest Selection */}
                    <div className="flex items-center h-14 gap-1 w-[calc(100%-56px)] cursor-pointer" ref={guestDropdownRef}>
                        <button className='block w-full h-full text-left' onClick={() => setShowGuest(!showGuest)}>
                            {guests} Guests
                        </button>
                        {showGuest && (
                            <div className="absolute z-30 top-[100%] right-0 w-full pt-2 duration-300">
                                <div className="flex flex-col gap-2 bg-white rounded-xl shadow-md py-4 px-3 w-full">
                                    <div className='flex items-center justify-between gap-6'>
                                        <span className='font-medium'>Guests</span>
                                        <div className='flex items-start gap-2'>
                                            <button className='text-primary' onClick={() => setGuests(Math.max(1, guests - 1))}>
                                                <Remove className='!text-lg' />
                                            </button>
                                            <span className='font-medium text-nowrap'>{guests}</span>
                                            <button className='text-primary' onClick={() => setGuests(guests + 1)}>
                                                <Add className='!text-lg' />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='text-end'>
                                        <button className='py-2 !text-sm bg-primary px-4 rounded text-white hover:bg-[#1c7379] duration-300' onClick={() => setShowGuest(false)}>Done</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Search Button with Dynamic URL */}
                    <div className="w-11">
                        <button
                            onClick={handleSearch}
                            className="!w-11 !h-11 btn1 !rounded-md bg-primary flex items-center justify-center text-white"
                        >
                            <SearchRounded className="!text-3xl" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CommanSearch;
