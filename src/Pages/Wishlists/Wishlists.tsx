import PropertyCard from '../../Components/PropertyCard/PropertyCard'
import wishlistImg from "../../assets/images/wishlist.png"

const Wishlists = () => {
    return (
        <div className='pb-10 sm:pb-14 md:pb-16'>
            <div className="container mx-auto">
                <h2 className='text-3xl font-semibold'>Wishlists</h2>
                <div className='mt-8'>

                    {/* If Wishlist Empty */}

                    {/* <div className='flex flex-col gap-3 items-center justify-center'>
                        <div>
                            <img src={wishlistImg} className='w-[200px]' />
                        </div>
                        <div className='text-center'>
                            <p className='text-xl text-text1 font-medium'>Your wishlist is currently empty.</p>
                            <p className='text-text1 mt-1'>Explore and save your favorite properties with ease on your wishlist.</p>
                        </div>
                    </div> */}

                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-7'>
                        {Array(3).fill(0).map(() => (
                            <PropertyCard />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Wishlists