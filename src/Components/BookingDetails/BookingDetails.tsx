
import { Add, Remove } from "@mui/icons-material";
import Flatpickr from "react-flatpickr"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BookingDetails = () => {
    const [showMonths, setShowMonths] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setShowMonths(1);
        } else {
            setShowMonths(2);
        }
    }, [])

    return (
        <>
            <div className="border-primary bg-primary lg:bg-transparent bg-opacity-5 rounded-xl border lg:border-[#C3C3C3] lg:rounded-2xl p-3">
                <div className="flex items-end text-text1 gap-2">
                    <span className="opacity-50 line-through text-lg">₹3,499</span><span className="text-xl font-medium ">₹2,899</span><span className="opacity-50">/night</span>
                </div>
                <div className=" rounded-xl border border-[#c3c3c3] mt-4">
                    <div className="p-2">
                        <Flatpickr
                            options={{
                                mode: "range",
                                dateFormat: "Y-m-d",
                                showMonths: showMonths ?? 1,
                                allowInput: true,
                                minDate: "today",
                                disable: []
                            }}
                            className="px-0 xl:px-3 py-1 placeholder:text-text1 text-text1 border-none w-full focus:ring-0 text-center bg-transparent"
                            placeholder="Check-in - Check-out"
                        />
                    </div>
                    <hr className="border-[#c3c3c3]" />
                    <div className="p-2">
                        <div className='h-10 bg-transparent px-3 xl:px-0 pr-3 flex items-center'>
                            <div className='flex justify-center w-full gap-3 text-text1'>
                                <span>Guests:</span>
                                <div className='flex items-center gap-2'>
                                    <button className='text-primary' ><Remove className='!text-lg' /></button>
                                    <span className='font-medium'>1</span>
                                    <button className='text-primary'><Add className='!text-lg' /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <Link to="/confirm-booking" className="btn1 w-full flex items-center justify-center">
                        Book Now
                    </Link>
                    <p className="text-center mt-2 text-text3 text-sm">You won’t be charged yet</p>
                </div>
                <div className="mt-4">
                    <ul className="flex flex-col gap-1">
                        <li className="flex items-center justify-between text-text3">
                            <span>500 x 5 nights</span>
                            <span>₹2,500</span>
                        </li>
                        <li className="flex items-center justify-between text-text3">
                            <span>Long stay discount</span>
                            <span>-₹300</span>
                        </li>
                        <li className="flex items-center justify-between text-text3">
                            <span>Cleaning fee</span>
                            <span>₹200</span>
                        </li>
                        <li className="flex items-center justify-between text-text3">
                            <span>Service fee</span>
                            <span>₹0</span>
                        </li>
                        <li className="mt-2 flex items-center justify-between text-text1 font-medium">
                            <span>Total before taxes</span>
                            <span>₹2,400</span>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default BookingDetails