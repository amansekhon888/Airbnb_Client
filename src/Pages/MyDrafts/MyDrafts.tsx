import { Link } from "react-router-dom"
import cate1 from "../../assets/images/cate1.png"

const MyDrafts = () => {
    return (
        <div className='pb-10 sm:pb-14 md:pb-16'>
            <div className="container mx-auto">
                <h2 className='text-3xl font-semibold'>Drafts</h2>
                <div className='mt-8'>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-7'>
                        {Array(3).fill(0).map(() => (
                            <div>
                                <div className="rounded-[20px] overflow-hidden h-[220px] relative border border-border1">
                                    <Link to="/property-details/1" className="w-full h-full">
                                        <img src={cate1} className="w-full h-full object-cover" />
                                    </Link>
                                    <span className="w-max px-2.5 h-10 flex items-center justify-center gap-2 border border-border1 absolute top-[-1px] left-[-1px] bg-white rounded-br-[20px] text-text1 text-sm font-medium">
                                        <span className="inline-block w-2 h-2 rounded-full bg-red-600"></span>Action required
                                    </span>
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

export default MyDrafts