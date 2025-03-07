import { FavoriteBorderOutlined, FavoriteOutlined, StarRateRounded } from '@mui/icons-material'
import cate1 from "../../assets/images/cate1.png"
import Bath from "../../assets/icons/Bath.png"
import Bed from "../../assets/icons/Bed.png"
import { Link } from 'react-router-dom'

const PropertyCard = ({ property, index }) => {
    return (
        <>
            <div key={index} className="">
                <div className="rounded-[20px] overflow-hidden h-[250px] relative border border-border1">
                    <Link to={`/property-details/${property._id}`} className="w-full h-full">
                        <img src={property?.gallery[0]?.url} className="w-full h-full object-cover" />
                    </Link>
                    <button className="w-10 h-10 flex items-center justify-center border border-border1 absolute top-[-1px] right-[-1px] bg-white rounded-bl-[20px] text-[#EF272A]">
                        <FavoriteBorderOutlined />
                    </button>
                    <span className="w-max px-2.5 h-10 flex items-center justify-center border border-border1 absolute top-[-1px] left-[-1px] bg-white rounded-br-[20px] text-text1 text-sm font-medium capitalize min-w-14">
                        {property.tags}
                    </span>
                </div>

                <div className='pt-3'>
                    <div className="flex items-start justify-between">
                        <h4 className="text-xl font-medium text-text1 "><Link to={`/property-details/${property._id}`}>{property.title}</Link></h4>
                        {property.rating &&
                            <div className="flex items-center gap-1.5 text-text1">
                                <span><StarRateRounded /></span>
                                <span className="font-medium text-sm">4.5</span>
                            </div>
                        }
                    </div>
                    <div className='flex items-center gap-2 mt-1'>
                        <div className="flex items-center gap-2">
                            <img src={Bed} className='w-5' />
                            <span className='text-text1'>{property.bedrooms} Bed</span>
                        </div>
                        <span className='block h-full w-0.5 bg-border1'></span>
                        <div className="flex items-center gap-2">
                            <img src={Bath} className='w-5' />
                            <span className='text-text1'>{property.bathrooms} Bath</span>
                        </div>
                    </div>
                    <div className="flex items-end gap-2 mt-1">
                        {/* <span className="line-through font-normal text-text3">₹3,624</span>  */}
                        <p className="font-medium text-text1">{property.price_per_night} night</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyCard