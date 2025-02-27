import { Link } from 'react-router-dom'
import tripsImg from '../../assets/images/trips.png'
import cate1 from '../../assets/images/cate1.png'
import Recommended from '../../Components/Home/Recommended'

const MyTrips = () => {
    return (
        <div className='pb-10 sm:pb-14 md:pb-16'>
            <div>
                <div className="container mx-auto">
                    <h2 className='text-3xl font-semibold'>Trips</h2>
                    <div className='mt-8'>

                        {/* If Trips Empty */}
                        {/* <div className='flex flex-col gap-3 items-center justify-center'>
                        <div>
                            <img src={tripsImg} className='w-[200px]' />
                        </div>
                        <div className='text-center'>
                            <p className='text-xl text-text1 font-medium'>No trips booked ... yet!</p>
                            <p className='text-text1 mt-1'>Time to dust off your bags and start planning your next adventure.</p>
                            <div className='text-center mt-8'>
                                <button className='py-2.5 px-6 border border-primary text-primary rounded-md hover:bg-primary hover:text-white duration-300'>Start searching</button>
                            </div>
                            <p className='text-text1 mt-4'>Can’t find your reservation here? <Link to="/" className='underline underline-offset-4 font-medium'>Visit the Help Centre</Link></p>
                        </div>
                    </div> */}

                        <div>
                            <h4 className='text-lg font-medium text-text1'>Upcoming reservations</h4>
                            <div className='flex flex-col gap-8 mt-3'>
                                <div className='rounded-2xl shadow-lg flex flex-col xs:flex-row md:h-[200px] border'>
                                    <div className='xs:w-3/5 order-2 xs:order-1'>
                                        <div className='p-3 xs:py-4 xs:pl-4 xs:pr-4 sm:pr-6 md:pr-10'>
                                            <h6 className='md:text-lg font-medium text-text1'>1022 Al Wasl, The Palm Tower, Ocean View Residence.</h6>
                                            <p className='text-sm md:text-base text-text3 mt-1'>Jan 1-6, 2025</p>
                                            <div className='mt-5'>
                                                <p className='text-sm md:text-base text-text1 font-medium'>Hosted by</p>
                                                <p className='text-sm md:text-base text-text3'>Luca Hayes</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='xs:w-[40%] overflow-hidden rounded-t-2xl xs:rounded-t-none xs:!rounded-r-2xl order-1 xs:order-2' >
                                        <img src={cate1} className='h-[200px] xs:h-full w-full object-cover' />
                                    </div>
                                </div>
                                <div className='rounded-2xl shadow-lg flex flex-col xs:flex-row md:h-[200px] border'>
                                    <div className='xs:w-3/5 order-2 xs:order-1'>
                                        <div className='p-3 xs:py-4 xs:pl-4 xs:pr-4 sm:pr-6 md:pr-10'>
                                            <h6 className='md:text-lg font-medium text-text1'>1022 Al Wasl, The Palm Tower, Ocean View Residence.</h6>
                                            <p className='text-sm md:text-base text-text3 mt-1'>Jan 1-6, 2025</p>
                                            <div className='mt-5'>
                                                <p className='text-sm md:text-base text-text1 font-medium'>Hosted by</p>
                                                <p className='text-sm md:text-base text-text3'>Luca Hayes</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='xs:w-[40%] overflow-hidden rounded-t-2xl xs:rounded-t-none xs:!rounded-r-2xl order-1 xs:order-2' >
                                        <img src={cate1} className='h-[200px] xs:h-full w-full object-cover' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Recommended />
        </div>
    )
}

export default MyTrips