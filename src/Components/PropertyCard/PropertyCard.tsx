import { FavoriteBorderOutlined, FavoriteOutlined, StarRateRounded } from '@mui/icons-material'
import Bath from "../../assets/icons/Bath.png"
import Bed from "../../assets/icons/Bed.png"
import { Link } from 'react-router-dom'
import useWishlist from '../../hooks/useWishlist'

interface PropertyCardProps {
    property: {
        isWishlisted: boolean;
        _id: string;
        gallery: { url: string }[];
        tags: string;
        title: string;
        rating?: number;
        bedrooms: number;
        bathrooms: number;
        price_per_night: string;
    };
}

const PropertyCard = ({ property }: PropertyCardProps) => {
    const { isWishlisted, toggleWishlist } = useWishlist(property.isWishlisted, property._id);

    return (
        <>
            <div className="">
                <div className="rounded-[20px] overflow-hidden h-[250px] relative border border-border1">
                    <Link to={`/property-details/${property._id}`} target='_blank' className="w-full h-full">
                        <img src={property.gallery.find((image) => image.isPrimary).url} className="w-full h-full object-cover" />
                    </Link>
                    <button className="w-10 h-10 flex items-center justify-center border border-border1 absolute top-[-1px] right-[-1px] bg-white rounded-bl-[20px] text-[#EF272A]" onClick={toggleWishlist}>
                        {isWishlisted ?
                            <FavoriteOutlined />
                            :
                            <FavoriteBorderOutlined />
                        }
                    </button>
                    <span className="w-max px-2.5 h-10 flex items-center justify-center border border-border1 absolute top-[-1px] left-[-1px] bg-white rounded-br-[20px] text-text1 text-sm font-medium capitalize min-w-14">
                        {property.tags}
                    </span>
                </div>

                <div className='pt-3'>
                    <div className="flex items-start justify-between">
                        <h4 className="text-xl font-medium text-text1 "><Link to={`/property-details/${property._id}`} target='_blank'>{property.title}</Link></h4>
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