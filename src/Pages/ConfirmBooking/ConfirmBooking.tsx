import { KeyboardArrowLeftOutlined, StarRateRounded } from "@mui/icons-material";
import cate1 from "../../assets/images/cate1.png";
import { Tooltip } from "flowbite-react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import PayWith from "../../Components/PayWith/PayWith";
import { useEffect, useState } from "react";
import { useGetCalculateBookingPriceQuery, useGetPropertyByIdQuery } from "../../services/api/property";

const ConfirmBooking = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { data, isLoading } = useGetPropertyByIdQuery(id);

    const guestCount = searchParams.get("guests") || 0;
    const selectedDate = {
        startDate: searchParams.get("start_date"),
        endDate: searchParams.get("end_date"),
    };

    if (guestCount > data?.max_guests) {
        navigate(`/property-details/${id}`)
    }
    // Get stored price details from sessionStorage
    const [priceData, setPriceData] = useState(null);
    const bookingDetails = sessionStorage.getItem("bookingDetails");

    useEffect(() => {
        if (bookingDetails) {
            setPriceData(JSON.parse(bookingDetails));
        }
    }, []);

    // Fetch price only if sessionStorage is empty
    const { data: fetchedPriceData, error } = useGetCalculateBookingPriceQuery(
        bookingDetails
            ? null // Skip API call if bookingDetails exist
            : { propertyId: data?._id, checkIn: selectedDate.startDate, checkOut: selectedDate.endDate },
        { skip: !!bookingDetails || !data?._id }
    );

    useEffect(() => {
        if (!bookingDetails && fetchedPriceData) {
            setPriceData(fetchedPriceData);
            sessionStorage.setItem("bookingDetails", JSON.stringify(fetchedPriceData));
        } else if (error) {
            navigate(`/property-details/${id}`);
        }
    }, [fetchedPriceData, error]);

    if (!priceData) return <p>Loading price details...</p>;
    return (
        <div className="pb-10 sm:pb-14 md:pb-16">
            <div className="container mx-auto">
                <div className="flex items-center gap-3">
                    <Link to={`/property-details/${id}`}>
                        <KeyboardArrowLeftOutlined className="!text-3xl" />
                    </Link>
                    <h4 className="text-3xl font-medium">Confirm and pay</h4>
                </div>
                <div className="grid lg:grid-cols-2 gap-8 2xl:gap-20 mt-10">
                    <div>
                        <div className="flex items-center gap-3 lg:hidden">
                            <div className="min-w-24 w-24 h-24 rounded-md overflow-hidden">
                                <img src={data?.gallery[0].url} className="w-full h-full object-cover" />
                            </div>
                            <div className="text-text1">
                                <h5 className="text-lg font-medium leading-6 mb-1 line-clamp-2">
                                    {data?.title}
                                </h5>
                                <p className="text-sm text-text3">{data?.address
                                    && `${data.address.address}, ${data.address.city}${data.address.state ? `, ${data.address.state}` : ""}, ${data.address.country}, ${data.address.zip_code}`}</p>
                                <div className="flex items-end gap-1.5 text-text1">
                                    <StarRateRounded className="!text-lg" />
                                    <span className="font-medium text-sm">4.5</span>
                                    <span className="font-medium text-sm border-b border-text1">(8 Reviews)</span>
                                </div>
                            </div>
                        </div>
                        <hr className="my-5 border-border1 lg:hidden" />

                        <h6 className="text-xl text-text1 font-medium">Your trip</h6>
                        <div className="mt-2 flex flex-wrap gap-4 justify-between text-text1">
                            <div className="flex gap-4">
                                <div>
                                    <span className="font-medium">Check-in</span>
                                    <p>{selectedDate.startDate}</p>
                                </div>
                                <div>
                                    <span className="font-medium">Check-out</span>
                                    <p>{selectedDate.endDate}</p>
                                </div>
                            </div>
                            <div>
                                <span className="font-medium">Guests</span>
                                <p>{guestCount} guests</p>
                            </div>
                        </div>
                        <hr className="my-5 border-border1" />

                        <div className="lg:hidden">
                            <h6 className="text-xl text-text1 font-medium">Price details</h6>
                            <ul className="flex flex-col gap-2 mt-3">
                                <li className="flex items-center justify-between gap-1 text-text1">
                                    <span>₹2,899 x {priceData.numberOfNights} nights</span>
                                    <span className="font-medium">₹14,495</span>
                                </li>
                                {priceData.discount > 0 && (
                                    <li className="flex items-center justify-between gap-1 text-text1">
                                        <span>Discount</span>
                                        <span className="font-medium">-₹{priceData.discount}</span>
                                    </li>
                                )}
                                {priceData.dicleaningFeescount > 0 &&
                                    <li className="flex items-center justify-between gap-1 text-text1">
                                        <span>Cleaning fee</span>
                                        <span className="font-medium">₹{priceData.cleaningFee}</span>
                                    </li>
                                }
                                {priceData.serviceFee > 0 &&
                                    <li className="flex items-center justify-between gap-1 text-text1">
                                        <span>Service fee</span>
                                        <span className="font-medium">₹{priceData.serviceFee}</span>
                                    </li>
                                }
                                {/* {["Service fee", "Taxes"].map((label, index) => (
                                    <li key={index} className="flex items-center justify-between gap-1 text-text1">
                                        <Tooltip content={label === "Service fee"
                                            ? "This helps us run our platform and offer services like 24/7 support on your trip."
                                            : "Taxes on accommodation such as VAT or GST."}
                                            className="max-w-[300px]">
                                            <span className="underline">{label}</span>
                                        </Tooltip>
                                        <span className="font-medium">₹1,000</span>
                                    </li>
                                ))} */}
                            </ul>
                            <div className="mt-5 flex items-center justify-between gap-1 text-text1 font-medium text-xl">
                                <span>Total (INR)</span>
                                <span>₹{priceData.totalPrice}</span>
                            </div>
                        </div>
                        <hr className="my-5 border-border1 lg:hidden" />

                        <h6 className="text-xl text-text1 font-medium">Pay with</h6>
                        <div className="mt-3"><PayWith /></div>
                        <hr className="my-5 border-border1" />

                        <h6 className="text-xl text-text1 font-medium">Cancellation policy</h6>
                        <p className="text-text1 mt-2">
                            This reservation is non-refundable.
                            <Link to="/" className="underline font-medium"> Learn more</Link>
                        </p>
                        <hr className="my-5 border-border1" />

                        <h6 className="text-xl text-text1 font-medium">Ground rules</h6>
                        <p className="text-text1 mt-2">We ask every guest to remember a few simple things:</p>
                        <ul className="mt-2 list-disc pl-6">
                            <li>Follow the house rules</li>
                            <li>Treat your Host’s home like your own</li>
                        </ul>
                        <hr className="my-5 border-border1" />

                        <p className="text-text1">
                            By selecting the button below, I agree to the Host's House Rules, Ground rules for guests,
                            Airbnb's Rebooking and Refund Policy, and that Airbnb can charge my payment method if I’m
                            responsible for damage.
                        </p>
                        <div className="mt-6">
                            <Link to="/my-trips" className="btn1 flex items-center justify-center">Confirm and pay</Link>
                        </div>
                    </div>

                    {/* Desktop Summary */}
                    <div className="hidden lg:block">
                        <div className="border border-border1 p-4 rounded-xl sticky top-28">
                            <div className="flex items-center gap-3">
                                <div className="min-w-24 w-24 h-24 rounded-md overflow-hidden">
                                    <img src={data?.gallery[0].url} className="w-full h-full object-cover" />
                                </div>
                                <div className="text-text1">
                                    <h5 className="text-lg font-medium leading-6 line-clamp-2">
                                        {data?.title}
                                    </h5>
                                    <p className="text-sm text-text3 mb-2">{data?.address
                                        && `${data.address.address}, ${data.address.city}${data.address.state ? `, ${data.address.state}` : ""}, ${data.address.country}, ${data.address.zip_code}`}</p>
                                    <div className="flex items-end gap-1.5 text-text1">
                                        <StarRateRounded className="!text-lg" />
                                        <span className="font-medium text-sm">4.5</span>
                                        <span className="font-medium text-sm border-b border-text1">(8 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-5 border-border1" />

                            <h6 className="text-xl text-text1 font-medium">Price details</h6>
                            <ul className="flex flex-col gap-2 mt-3">
                                <li className="flex items-center justify-between gap-1 text-text1">
                                    <span>₹2,899 x {priceData.numberOfNights} nights</span>
                                    <span className="font-medium">₹{priceData.basePrice}</span>
                                </li>
                                {priceData.discount > 0 && (
                                    <li className="flex items-center justify-between gap-1 text-text1">
                                        <span>Discount</span>
                                        <span className="font-medium">-₹{priceData.discount}</span>
                                    </li>
                                )}
                                {priceData.dicleaningFeescount > 0 &&
                                    <li className="flex items-center justify-between gap-1 text-text1">
                                        <span>Cleaning fee</span>
                                        <span className="font-medium">₹{priceData.cleaningFee}</span>
                                    </li>
                                }
                                {priceData.serviceFee > 0 &&
                                    <li className="flex items-center justify-between gap-1 text-text1">
                                        <span>Service fee</span>
                                        <span className="font-medium">₹{priceData.serviceFee}</span>
                                    </li>
                                }
                                {/* {["Service fee", "Taxes"].map((label, index) => (
                                    <li key={index} className="flex items-center justify-between gap-1 text-text1">
                                        <Tooltip content={label === "Service fee"
                                            ? "This helps us run our platform and offer services like 24/7 support on your trip."
                                            : "Taxes on accommodation such as VAT or GST."}
                                            className="max-w-[300px]">
                                            <span className="underline">{label}</span>
                                        </Tooltip>
                                        <span className="font-medium">₹1,000</span>
                                    </li>
                                ))} */}
                            </ul>
                            <hr className="my-4 border-border1" />
                            <div className="flex items-center justify-between gap-1 text-text1 font-medium text-lg">
                                <span>Total (INR)</span>
                                <span>₹{priceData.totalPrice}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmBooking;
