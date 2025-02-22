
// import { Link } from "react-router-dom";
// import verify from "../../assets/images/verify.png"
// import locationPin from "../../assets/icons/locationPin.png";
// import img10 from "../../assets/images/img10.png";

// const PaymentSuccess = () => {

//     return (
//         <div className="payment-success mt-10">
//             <div className="container mx-auto">
//                 <div className="border border-border1 rounded-2xl p-5">
//                     <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//                         <div className="flex items-center gap-5">
//                             <img src={verify} className="w-12 sm:w-16 min-w-12 sm:min-w-16" />
//                             <div>
//                                 <h4 className="text-xl md:text-2xl text-[#008000] font-medium">Your Booking is Complete</h4>
//                                 <p className="text-text1">Thank you for booking with us!</p>
//                                 <p className="text-sm text-text2">Date Booked: {formatDate(data?.createdAt, "MMMM DD, YYYY")}</p>
//                             </div>
//                             {/* {data.status === "confirmed" ?
//                                 <div>
//                                     <h4 className="text-xl md:text-2xl text-[#008000] font-medium">Your Booking is Complete</h4>
//                                     <p className="text-text1">Thank you for booking with us!</p>
//                                     <p className="text-sm text-text2">Date Booked: {formatDate(data?.createdAt, "MMMM DD, YYYY")}</p>
//                                 </div> :
//                                 <div>
//                                     <h4 className="text-xl md:text-2xl text-[#008000] font-medium">Your Booking has been cancelled</h4>
//                                     <p className="text-text1">Thank you for booking with us!</p>
//                                     <p className="text-sm text-text2">Date Booked: {formatDate(data?.createdAt, "MMMM DD, YYYY")}</p>
//                                 </div>
//                             } */}
//                         </div>
//                         <div className="flex items-center gap-3">
//                             <button className="text-primary hover:text-primaryDark duration-300"><ShareRounded /></button>
//                             {/* <button className="text-primary hover:text-primaryDark duration-300"><LocalPrintshopOutlined /></button> */}
//                             {/* <button className="text-sm text-primary border border-primary hover:bg-primary hover:text-white rounded-full py-2.5 px-6 duration-300 text-nowrap">View Details</button> */}
//                         </div>
//                     </div>
//                     <hr className="my-6" />
//                     <div className="">
//                         <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
//                             <div className=''>
//                                 <img src={property?.property_images[0].img_url || img10} className='min-w-20 sm:w-20 sm:h-20 rounded object-cover' alt="Property" />
//                             </div>
//                             <div className="text-[#1F1607]">
//                                 <h4 className="text-lg md:text-xl lg:text-2xl font-medium leading-6 mb-2 hover:text-primary duration-300"><Link to="/property/67694a111f8046525ea6143c">{property?.title}</Link></h4>
//                                 <p className="flex items-start gap-2 mt-1">
//                                     <img src={locationPin} className="w-2.5 md:w-3 mt-1 md:mt-1.5" alt="Location Pin" />
//                                     <span className="text-sm md:text-base text-[#717171] w-full">
//                                         {[
//                                             property?.address?.building_no,
//                                             property?.address?.street,
//                                             property?.address?.city,
//                                             property?.address?.country,
//                                             property?.address?.pincode
//                                         ]
//                                             .filter(Boolean)
//                                             .join(", ")
//                                         }
//                                     </span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <hr className='border-border1 my-6' />
//                     <div>
//                         <h5 className='text-lg font-medium text-text1'>Reservation details</h5>
//                         <div className='grid grid-cols-1 md:grid-cols-3 mt-2 gap-4'>
//                             <div>
//                                 <span className='text-text2 text-sm'>Reservation Code</span>
//                                 <p className='text-text1 font-medium'>{data.reservationCode}</p>
//                             </div>
//                             <div>
//                                 <span className='text-text2 text-sm'>Guest Name</span>
//                                 <p className='text-text1 font-medium capitalize'>{data.book_details.first_name} {data.book_details.last_name}</p>
//                             </div>
//                             <div>
//                                 <span className='text-text2 text-sm'>Guest E-mail</span>
//                                 <p className='text-text1 font-medium'>{data.book_details.email}</p>
//                             </div>
//                             <div>
//                                 <span className='text-text2 text-sm'>Phone Number</span>
//                                 <p className='text-text1 font-medium'>{data.book_details.phone_number}</p>
//                             </div>
//                             <div>
//                                 <span className='text-text2 text-sm'>Your Message</span>
//                                 <p className='text-text1 font-medium'>{data.book_details.message}</p>
//                             </div>
//                             {
//                                 data.book_details?.promo_code &&
//                                 <div>
//                                     <span className='text-text2 text-sm'>Promo Code</span>
//                                     <p className='text-text1 font-medium'>{data.book_details?.promo_code}</p>
//                                 </div>
//                             }
//                             <div>
//                                 <span className='text-text2 text-sm'>Guests</span>
//                                 <p className='text-text1 font-medium'>{data.book_details.guests}</p>
//                             </div>
//                             <div>
//                                 <span className='text-text2 text-sm'>Nights</span>
//                                 <p className='text-text1 font-medium'>{data.nights_count}</p>
//                             </div>
//                             <div>
//                                 <span className='text-text2 text-sm'>Date</span>
//                                 <p className='text-text1 font-medium'>{formatDate(data?.checkin_date, "MMM DD, YYYY")} to {formatDate(data?.checkout_date, "MMM DD, YYYY")}</p>
//                             </div>
//                         </div>
//                     </div>
//                     <hr className='border-border1 my-6' />
//                     <div>
//                         <h5 className='text-lg font-medium text-text1'>Billing Information</h5>
//                         <div className='grid grid-cols-1 md:grid-cols-3 mt-2 gap-4'>
//                             <div>
//                                 <span className='text-text2 text-sm'>Date</span>
//                                 <p className='text-text1 font-medium'>{formatDate(data?.transaction?.createdAt, "MMM DD, YYYY")}</p>
//                             </div>
//                             <div>
//                                 <span className='text-text2 text-sm'>Customer Name</span>
//                                 <p className='text-text1 font-medium capitalize'>{data.transaction.customer_name}</p>
//                             </div>
//                             <div>
//                                 <span className='text-text2 text-sm'>Customer E-mail</span>
//                                 <p className='text-text1 font-medium'>{data.transaction.customer_email}</p>
//                             </div>
//                         </div>
//                     </div>
//                     <hr className='border-border1 my-6' />
//                     <div>
//                         <h5 className='text-lg font-medium text-text1'>Payment Details</h5>
//                         <div className='grid grid-cols-1 md:grid-cols-2 mt-2 gap-y-1 gap-x-8'>
//                             <div className='flex items-center justify-between'>
//                                 <span className='text-text2 text-sm'>Accommodation</span>
//                                 <p className='text-text1 font-medium'>{data.cost_details?.stay_charges.toFixed(2)} AED</p>
//                             </div>
//                             <div className='flex items-center justify-between'>
//                                 <span className='text-text2 text-sm'>Cleaning</span>
//                                 <p className='text-text1 font-medium'>{data.cost_details?.cleaning_fee.toFixed(2)} AED</p>
//                             </div>
//                             <div className='flex items-center justify-between'>
//                                 <span className='text-text2 text-sm'>Tourism tax</span>
//                                 <p className='text-text1 font-medium'>{data.cost_details?.tourism_tax.toFixed(2)} AED</p>
//                             </div>
//                             <div className='flex items-center justify-between'>
//                                 <span className='text-text2 text-sm'>VAT Taxes</span>
//                                 <p className='text-text1 font-medium'>{data.cost_details?.vat_tax.toFixed(2)} AED</p>
//                             </div>
//                             <div className='flex items-center justify-between'>
//                                 <span className='text-text2 text-sm'>Discount</span>
//                                 <p className='text-text1 font-medium'>{data.cost_details?.discount.toFixed(2)} AED</p>
//                             </div>
//                             <div className='flex items-center justify-between'>
//                                 <span className='text-text2 text-sm'>Total balance</span>
//                                 <p className='text-text1 text-lg font-medium'>{data.cost_details?.net_charges.toFixed(2)} AED</p>
//                             </div>
//                         </div>
//                     </div>
//                     <hr className='border-border1 my-6' />
//                     <div>
//                         <h5 className='text-lg font-medium text-text1'>Additional Information</h5>
//                         <p className='text-text2 mt-2'>{property?.costs?.security_details}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default PaymentSuccess;
