import { AddOutlined, CloseOutlined, RemoveOutlined } from '@mui/icons-material';
import { Modal } from 'flowbite-react'
import React, { useState } from 'react'
import InstantBook from "../../assets/icons/InstantBook.png"
import allowedPets from "../../assets/icons/allowedPets.png"
import selfCheckIn from "../../assets/icons/selfCheckIn.png"
import home from "../../assets/icons/home.png"
import flat from "../../assets/icons/flat.png"
import Hotel from "../../assets/icons/Hotel.png"
import guesthouse from "../../assets/icons/guesthouse.png"
import guestFav from "../../assets/icons/guestFav.png"

interface FilterModalProps {
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ openModal, setOpenModal }) => {
    const [place, setPlace] = useState("Any type")
    const [amenities, setAmenities] = useState("Wifi")
    const [bookingOptions, setBookingOptions] = useState("")
    const [propertyType, setPropertyType] = useState("")
    const typePlace = [
        "Any type",
        "Room",
        "Entire home",
    ]
    const amenitiesList = [
        "Wifi",
        "Kitchen",
        "Washing machine",
    ]
    const BookingOptionsList = [
        {
            icon: InstantBook,
            name: "Instant Book"
        },
        {
            icon: selfCheckIn,
            name: "Self check-in"
        },
        {
            icon: allowedPets,
            name: "Allows pets"
        },
    ]
    const PropertyTypeList = [
        {
            icon: home,
            name: "Home"
        },
        {
            icon: flat,
            name: "Flat"
        },
        {
            icon: Hotel,
            name: "Hotel"
        },
        {
            icon: guesthouse,
            name: "Guest house"
        },
    ]
    return (
        <>
            <Modal show={openModal} onClose={() => setOpenModal(false)} size='xl'>
                <Modal.Body className="p-0">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-border1">
                        <div>
                            <h4 className="text-text1 text-lg lg:text-xl font-semibold">Filters</h4>
                        </div>
                        <button className="text-text1" onClick={() => { setOpenModal(false) }}><CloseOutlined /></button>
                    </div>
                    <div className='px-6 py-4'>
                        <div>
                            <h6 className='text-xl text-text1 font-medium'>Type of place</h6>
                            <div className='mt-3 border rounded-md border-border1 p-2'>
                                <ul className='grid grid-cols-3 gap-2'>
                                    {typePlace.map((e) => (
                                        <li key={e} className={`text-center py-2 px-3 rounded cursor-pointer ${place === e ? "bg-primary text-white" : "text-text3"}`} onClick={() => setPlace(e)}>{e}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <hr className='my-6 border-border1' />
                        <div>
                            <h6 className='text-xl text-text1 font-medium'>Price range</h6>
                            <p className='text-sm text-text1 mt-1'>Nightly prices before fees and taxes</p>
                            <div className='mt-3'>
                                {/* Use Price range here */}
                            </div>
                            <div className='mt-4 flex items-center justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <label htmlFor="Minimum" className='text-sm text-text3'>Minimum</label>
                                    <input type="text" placeholder='₹550' value={0} className='text-text1 w-[100px] rounded border-border1' />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label htmlFor="Minimum" className='text-sm text-text3'>Maximum</label>
                                    <input type="text" placeholder='₹550' value={0} className='text-text1 w-[100px] rounded border-border1' />
                                </div>
                            </div>
                        </div>
                        <hr className='my-6 border-border1' />
                        <div>
                            <h6 className='text-xl text-text1 font-medium'>Rooms and beds</h6>
                            <div className='mt-3 flex gap-3 flex-col'>
                                <div className='flex justify-between items-center'>
                                    <div>Bedrooms</div>
                                    <div className='flex items-center gap-4'>
                                        <span className='w-6 h-6 rounded border border-border1 flex items-center justify-center'>
                                            <RemoveOutlined className='!text-lg' />
                                        </span>
                                        <span>Any</span>
                                        <span className='w-6 h-6 rounded border border-border1 flex items-center justify-center'>
                                            <AddOutlined className='!text-lg' />
                                        </span>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div>Beds</div>
                                    <div className='flex items-center gap-4'>
                                        <span className='w-6 h-6 rounded border border-border1 flex items-center justify-center'>
                                            <RemoveOutlined className='!text-lg' />
                                        </span>
                                        <span>Any</span>
                                        <span className='w-6 h-6 rounded border border-border1 flex items-center justify-center'>
                                            <AddOutlined className='!text-lg' />
                                        </span>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div>Bathrooms</div>
                                    <div className='flex items-center gap-4'>
                                        <span className='w-6 h-6 rounded border border-border1 flex items-center justify-center'>
                                            <RemoveOutlined className='!text-lg' />
                                        </span>
                                        <span>Any</span>
                                        <span className='w-6 h-6 rounded border border-border1 flex items-center justify-center'>
                                            <AddOutlined className='!text-lg' />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='my-6 border-border1' />
                        <div>
                            <h6 className='text-xl text-text1 font-medium'>Amenities</h6>
                            <div className='mt-3'>
                                <ul className='flex flex-wrap gap-2'>
                                    {amenitiesList.map((e) => (
                                        <li key={e} className={`border text-center py-2 px-5 rounded cursor-pointer ${amenities === e ? "bg-primary text-white border-primary" : "text-text3 border-border1"}`} onClick={() => setAmenities(e)}>{e}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <hr className='my-6 border-border1' />
                        <div>
                            <h6 className='text-xl text-text1 font-medium'>Booking options</h6>
                            <div className='mt-3'>
                                <ul className='flex flex-wrap gap-2'>
                                    {BookingOptionsList.map((e, index) => (
                                        <li key={index} className={`border text-center py-2 px-3 rounded cursor-pointer flex items-center gap-2 ${bookingOptions === e.name ? "bg-primary text-white border-primary" : "text-text3 border-border1"}`} onClick={() => setBookingOptions(e.name)}> <img src={e.icon} className={`w-5 ${bookingOptions === e.name && "invert brightness-0"}`} /> {e.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <hr className='my-6 border-border1' />
                        <div>
                            <h6 className='text-xl text-text1 font-medium'>Standout stays</h6>
                            <div className='mt-3'>
                                <ul className='flex flex-wrap gap-2'>
                                    <li className={`border py-2 px-3 rounded cursor-pointer text-text3 border-border1 flex items-center gap-3`}> <img src={guestFav} alt="" className='w-7' /> <div><span className='font-medium text-text1'>Guest favourite</span>
                                        <p>The most loved homes</p></div></li>
                                </ul>
                            </div>
                        </div>
                        <hr className='my-6 border-border1' />
                        <div>
                            <h6 className='text-xl text-text1 font-medium'>Property type</h6>
                            <div className='mt-3'>
                                <ul className='flex flex-wrap gap-2'>
                                    {PropertyTypeList.map((e, index) => (
                                        <li key={index} className={`border text-center py-2 px-3 rounded cursor-pointer flex items-center gap-2 ${propertyType === e.name ? "bg-primary text-white border-primary" : "text-text3 border-border1"}`} onClick={() => setPropertyType(e.name)}> <img src={e.icon} className={`w-5 ${propertyType === e.name && "invert brightness-0"}`} /> {e.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <hr className='my-6 border-border1' />
                        <div>
                            <h6 className='text-xl text-text1 font-medium'>Accessibility features</h6>
                            <div className='mt-3'>
                                <div>
                                    <p className='font-medium'>Guest entrance and parking</p>
                                    <ul className='flex flex-col gap-1 mt-1'>
                                        <li className='flex items-center gap-2'>
                                            <input type="checkbox" className='rounded' />
                                            <label htmlFor="">Step-free access</label>
                                        </li>
                                        <li className='flex items-center gap-2'>
                                            <input type="checkbox" className='rounded' />
                                            <label htmlFor="">Disabled parking spot</label>
                                        </li>
                                        <li className='flex items-center gap-2'>
                                            <input type="checkbox" className='rounded' />
                                            <label htmlFor="">Guest entrance wider than 32 inches (81 centimetres)</label>
                                        </li>
                                    </ul>
                                </div>
                                <div className='mt-2'>
                                    <p className='font-medium'>Bedroom</p>
                                    <ul className='flex flex-col gap-1 mt-1'>
                                        <li className='flex items-center gap-2'>
                                            <input type="checkbox" className='rounded' />
                                            <label htmlFor="">Step-free bedroom access</label>
                                        </li>
                                        <li className='flex items-center gap-2'>
                                            <input type="checkbox" className='rounded' />
                                            <label htmlFor="">Bedroom entrance wider than 32 inches (81 centimetres)</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className='my-6 border-border1' />
                        <div>
                            <h6 className='text-xl text-text1 font-medium'>Host language</h6>
                            <div className='mt-3'>
                                <div className="grid grid-cols-3 gap-2">
                                    <div className='flex items-center gap-2'>
                                        <input type="checkbox" className='rounded' />
                                        <label htmlFor="">English</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="checkbox" className='rounded' />
                                        <label htmlFor="">French</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="checkbox" className='rounded' />
                                        <label htmlFor="">German</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="checkbox" className='rounded' />
                                        <label htmlFor="">Italian</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="checkbox" className='rounded' />
                                        <label htmlFor="">Portuguese</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="checkbox" className='rounded' />
                                        <label htmlFor="">Spanish</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='my-6 border-border1' />
                        <div>
                            <button className='btn1'>Apply</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal >
        </>
    )
}

export default FilterModal 