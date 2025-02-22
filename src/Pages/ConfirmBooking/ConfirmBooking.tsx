import { KeyboardArrowLeftOutlined, StarRateRounded } from "@mui/icons-material"
import cate1 from "../../assets/images/cate1.png"
import { Tooltip } from "flowbite-react"
import { Link } from "react-router-dom"
import PayWith from "../../Components/PayWith/PayWith"

const ConfirmBooking = () => {
    return (
        <div className="pb-10 sm:pb-14 md:pb-16">
            <div className="container mx-auto">
                <div className="flex items-center gap-3">
                    <Link to="/property-details/1"><KeyboardArrowLeftOutlined className="!text-3xl" /></Link>
                    <h4 className="text-3xl font-medium">Confirm and pay</h4>
                </div>
                <div className="grid lg:grid-cols-2 gap-8 2xl:gap-20 mt-10">
                    <div>
                        <div className="flex items-center gap-3 lg:hidden">
                            <div className="min-w-24 w-24 h-24 rounded-md overflow-hidden">
                                <img src={cate1} className="w-full h-full object-cover" />
                            </div>
                            <div className="text-text1">
                                <h5 className="text-lg font-medium leading-6 mb-1 line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, culpa?</h5>
                                <p className="flex items-start gap-2"><span className="text-sm text-text3 w-full">Entire House</span></p>
                                <div className="flex items-end gap-1.5 text-text1">
                                    <span><StarRateRounded className='!text-lg' /></span>
                                    <span className="font-medium text-sm">4.5</span>
                                    <span className="font-medium text-sm border-b border-text1">(8 Reviews)</span>
                                </div>
                            </div>
                        </div>
                        <hr className="my-5 border-border1 lg:hidden" />
                        <div className="">
                            <h6 className="text-xl text-text1 font-medium">Your trip</h6>
                            <div className="mt-2 flex flex-wrap gap-4 justify-between">
                                <div className="text-text1">
                                    <span className="font-medium">Dates</span>
                                    <p>06-11 February</p>
                                </div>
                                <div className="text-text1">
                                    <span className="font-medium">Guests</span>
                                    <p>4 guests</p>
                                </div>
                                <div className="text-text1">
                                    <span className="font-medium">Children</span>
                                    <p>1 child</p>
                                </div>
                                <div className="text-text1">
                                    <span className="font-medium">Pets</span>
                                    <p>1 Pet</p>
                                </div>
                            </div>
                        </div>
                        <hr className="my-5 border-border1" />
                        <div className="lg:hidden">
                            <h6 className="text-xl text-text1 font-medium">Price details</h6>
                            <ul className="flex flex-col gap-2 mt-3">
                                <li className="flex items-center justify-between gap-1 text-text1">
                                    <span>₹2,899 x 5 nights</span>
                                    <span className="font-medium">₹14,495</span>
                                </li>
                                <li className="flex items-center justify-between gap-1 text-text1">
                                    <Tooltip content="This helps us run our platform and offer services like 24/7 support on your trip." className="max-w-[300px]">
                                        <span className="underline">Service fee</span>
                                    </Tooltip>
                                    <span className="font-medium">₹1,000</span>
                                </li>
                                <li className="flex items-center justify-between gap-1 text-text1">
                                    <Tooltip content="Taxes on accommodation such as Occupancy Tax, VAT or GST. May also include tourism fees.
Standard Rate - CGST (In - Himachal Pradesh (in-hp))
Standard Rate - SGST (In - Himachal Pradesh (in-hp))" className="max-w-[300px]">
                                        <span className="underline">Taxes</span>
                                    </Tooltip>
                                    <span className="font-medium">₹1,000</span>
                                </li>
                            </ul>
                            <div className="mt-5 flex items-center justify-between gap-1 text-text1 font-medium text-xl">
                                <span>Total (INR)</span>
                                <span className="">₹16,395</span>
                            </div>
                        </div>
                        <hr className="my-5 border-border1 lg:hidden" />
                        <div>
                            <h6 className="text-xl text-text1 font-medium">Pay with</h6>
                            <div className="mt-3">
                                <PayWith />
                            </div>
                        </div>
                        <hr className="my-5 border-border1" />
                        <div>
                            <h6 className="text-xl text-text1 font-medium">Cancellation policy</h6>
                            <p className="text-text1 mt-2">This reservation is non-refundable. <Link to="/" className="underline font-medium">Learn more</Link></p>
                        </div>
                        <hr className="my-5 border-border1" />
                        <div>
                            <h6 className="text-xl text-text1 font-medium">Ground rules</h6>
                            <p className="text-text1 mt-2">We ask every guest to remember a few simple things about what makes a great guest.</p>
                            <ul className="mt-2 list-disc pl-6">
                                <li>Follow the house rules</li>
                                <li>Treat your Host’s home like your own</li>
                            </ul>
                        </div>
                        <hr className="my-5 border-border1" />
                        <div>
                            <p className="text-text1">By selecting the button below, I agree to the Host's House Rules, Ground rules for guests, Airbnb's Rebooking and Refund Policy and that Airbnb can charge my payment method if I’m responsible for damage.</p>
                        </div>
                        <div className="mt-6">
                            <Link to="/my-trips" className="btn1 flex items-center justify-center">Confirm and pay</Link>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="border border-border1 p-4 rounded-xl sticky top-28">
                            <div className="flex items-center gap-3 ">
                                <div className="min-w-24 w-24 h-24 rounded-md overflow-hidden">
                                    <img src={cate1} className="w-full h-full object-cover" />
                                </div>
                                <div className="text-text1">
                                    <h5 className="text-lg font-medium leading-6 mb-1 line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, culpa?</h5>
                                    <p className="flex items-start gap-2"><span className="text-sm text-text3 w-full">Entire House</span></p>
                                    <div className="flex items-end gap-1.5 text-text1">
                                        <span><StarRateRounded className='!text-lg' /></span>
                                        <span className="font-medium text-sm">4.5</span>
                                        <span className="font-medium text-sm border-b border-text1">(8 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-5 border-border1" />
                            <div>
                                <h6 className="text-xl text-text1 font-medium">Price details</h6>
                                <ul className="flex flex-col gap-2 mt-3">
                                    <li className="flex items-center justify-between gap-1 text-text1">
                                        <span>₹2,899 x 5 nights</span>
                                        <span className="font-medium">₹14,495</span>
                                    </li>
                                    <li className="flex items-center justify-between gap-1 text-text1">
                                        <Tooltip content="This helps us run our platform and offer services like 24/7 support on your trip." className="max-w-[300px]">
                                            <span className="underline">Service fee</span>
                                        </Tooltip>
                                        <span className="font-medium">₹1,000</span>
                                    </li>
                                    <li className="flex items-center justify-between gap-1 text-text1">
                                        <Tooltip content="Taxes on accommodation such as Occupancy Tax, VAT or GST. May also include tourism fees.
Standard Rate - CGST (In - Himachal Pradesh (in-hp))
Standard Rate - SGST (In - Himachal Pradesh (in-hp))" className="max-w-[300px]">
                                            <span className="underline">Taxes</span>
                                        </Tooltip>
                                        <span className="font-medium">₹1,000</span>
                                    </li>
                                </ul>
                            </div>
                            <hr className="my-5 border-border1" />
                            <div className="flex items-center justify-between gap-1 text-text1 font-medium text-xl">
                                <span>Total (INR)</span>
                                <span className="">₹16,395</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmBooking