import { FavoriteBorderOutlined, FavoriteOutlined, StarRateRounded } from '@mui/icons-material'
import cate1 from "../../assets/images/cate1.png"
import Bath from "../../assets/icons/Bath.png"
import Bed from "../../assets/icons/Bed.png"
import { Link } from 'react-router-dom'

const PropertyCard = () => {
    return (
        <>
            <div className="">
                <div className="rounded-[20px] overflow-hidden h-[250px] relative border border-border1">
                    <Link to="/property-details/1" className="w-full h-full">
                        <img src={cate1} className="w-full h-full object-cover" />
                    </Link>
                    <button className="w-10 h-10 flex items-center justify-center border border-border1 absolute top-[-1px] right-[-1px] bg-white rounded-bl-[20px] text-[#EF272A]">
                        <FavoriteOutlined />
                    </button>
                    <span className="w-max px-2.5 h-10 flex items-center justify-center border border-border1 absolute top-[-1px] left-[-1px] bg-white rounded-br-[20px] text-text1 text-sm font-medium">
                        Superhost
                    </span>
                </div>

                <div className='pt-3'>
                    <div className="flex items-start justify-between">
                        <h4 className="text-xl font-medium text-text1 "><Link to="/property-details/1">Lorem ipsum dolor sit amet</Link></h4>
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
        </>
    )
}

export default PropertyCard