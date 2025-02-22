import Category from '../../Components/Home/Category'
import { FavoriteBorderOutlined, ListOutlined, MapOutlined, StarRateRounded, TuneOutlined } from '@mui/icons-material'
import cate1 from "../../assets/images/cate1.png"
import mapBg from "../../assets/images/mapBg.png"
import Bath from "../../assets/icons/Bath.png"
import Bed from "../../assets/icons/Bed.png"
import FilterModal from '../../Components/Modals/FilterModal'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const PropertyList = () => {
    const [openModal, setOpenModal] = useState(false)
    const [mapView, setMapView] = useState(false)

    const handleToggleMap = () => {
        setMapView(!mapView)
    }
    return (
        <div>

            <Category />
            <div className="py-10 sm:py-14 md:py-16">
                <div className="container mx-auto">
                    <div className='flex items-center justify-between'>
                        <div>
                            <h4 className='text-2xl sm:text-3xl font-bold text-text1'>Property list</h4>
                            <p className='text-sm sm:text-base text-text3 mt-1'>Over 1,000 places in Dubai</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <button className='flex border border-border1 rounded-md py-2 px-3 hover:text-white hover:bg-primary hover:border-primary duration-300 items-center gap-2' onClick={() => setOpenModal(true)}><span><TuneOutlined /></span> <span className='hidden sm:inline-block'>Filter</span></button>
                            <button className='flex border border-border1 rounded-md py-2 px-3 hover:text-white hover:bg-primary hover:border-primary duration-300 items-center gap-2' onClick={handleToggleMap}>{mapView ? <><span><ListOutlined /></span> <span className='hidden sm:inline-block'>List View</span></> : <><span><MapOutlined /></span> <span className='hidden sm:inline-block'>Map View</span></>}</button>
                        </div>
                    </div>
                    <div className='mt-8'>
                        {mapView ?
                            <div>
                                <img src={mapBg} alt="" />
                            </div>
                            :
                            <>
                                <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-7'>
                                    {Array(8).fill(0).map(() => (
                                        <div className="">
                                            <div className="rounded-[20px] overflow-hidden h-[250px] relative border border-border1">
                                                <Link to="/property-details/1" className="w-full h-full block">
                                                    <img src={cate1} className="w-full h-full object-cover" />
                                                </Link>
                                                <button className="w-10 h-10 flex items-center justify-center border border-border1 absolute top-[-1px] right-[-1px] bg-white rounded-bl-[20px] text-[#717171]">
                                                    <FavoriteBorderOutlined />
                                                </button>
                                                <span className="w-max px-2.5 h-10 flex items-center justify-center border border-border1 absolute top-[-1px] left-[-1px] bg-white rounded-br-[20px] text-text1 text-sm font-medium">
                                                    Superhost
                                                </span>
                                            </div>

                                            <div className='pt-3'>
                                                <div className="flex items-start justify-between">
                                                    <h4 className="text-xl font-medium text-text1 "><Link to="/property-details/1">Lorem ipsum dolor sit amet
                                                    </Link></h4>
                                                    <div className="flex items-center gap-1.5 text-text1">
                                                        <span><StarRateRounded /></span>
                                                        <span className="font-medium text-sm">4.5</span>
                                                    </div>
                                                </div>
                                                <div className='flex items-center gap-2 mt-1'>
                                                    <div className="flex items-center gap-2">
                                                        <img src={Bed} className='w-5' />
                                                        <span className='text-text1'>2 BHK</span>
                                                    </div>
                                                    <span className='block h-full w-0.5 bg-border1'></span>
                                                    <div className="flex items-center gap-2">
                                                        <img src={Bath} className='w-5' />
                                                        <span className='text-text1'>2 Bath</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-end gap-2 mt-1">
                                                    <span className="line-through font-normal text-text3">₹3,624</span> <p className="font-medium text-text1">₹2,899 night</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='flex justify-center mt-10'>
                                    <button className='flex border text-primary rounded-md py-2.5 px-6 hover:text-white hover:bg-primary border-primary duration-300 items-center gap-2'>Load More</button>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
            <FilterModal openModal={openModal} setOpenModal={setOpenModal} />
        </div>
    )
}

export default PropertyList