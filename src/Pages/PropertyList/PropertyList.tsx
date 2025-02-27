import Category from '../../Components/Home/Category'
import { FavoriteBorderOutlined, ListOutlined, MapOutlined, StarRateRounded, TuneOutlined } from '@mui/icons-material'
import cate1 from "../../assets/images/cate1.png"
import mapBg from "../../assets/images/mapBg.png"
import Bath from "../../assets/icons/Bath.png"
import Bed from "../../assets/icons/Bed.png"
import FilterModal from '../../Components/Modals/FilterModal'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetPropertiesQuery } from '../../services/api/property'
import PropertyCard from '../../Components/PropertyCard/PropertyCard'

const PropertyList = () => {
    const [openModal, setOpenModal] = useState(false)
    const [mapView, setMapView] = useState(false)
    const { data, isLoading } = useGetPropertiesQuery({});
    console.log(data);


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
                                    {data?.map((property,index) => (
                                        <PropertyCard property={property} index={index} />
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