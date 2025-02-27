import { Link } from "react-router-dom"
import cate1 from "../../assets/images/cate1.png"

const MyProperties = () => {
    return (
        <div className='pb-10 sm:pb-14 md:pb-16'>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <h2 className='text-3xl font-semibold'>Your listing</h2>
                    <div className="flex items-center gap-3">
                        <Link to="/add-property" className="py-2 px-6 bg-primary hover:bg-primaryHover text-white rounded-md">Add Property</Link>
                        <Link to="/my-drafts" className="py-2 px-6 bg-primary hover:bg-primaryHover text-white rounded-md">Drafts</Link>
                    </div>
                </div>
                <div className='mt-8'>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-7'>
                        {Array(5).fill(0).map(() => (
                            <div>
                                <div className="rounded-[20px] overflow-hidden h-[220px] relative border border-border1">
                                    <Link to="/property-details/1" className="w-full h-full">
                                        <img src={cate1} className="w-full h-full object-cover" />
                                    </Link>
                                </div>
                                <div className="pt-3">
                                    <h4 className="text-xl font-medium text-text1 line-clamp-2"><Link to="/property-details/1">Lorem ipsum dolor sit amet</Link></h4>
                                    <p className="mt-1 text-text3 text-sm">Sahibzada Ajit Singh Nagar, Punjab</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProperties