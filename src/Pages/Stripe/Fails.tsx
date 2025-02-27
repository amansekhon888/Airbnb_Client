// import { useEffect, useState } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import axiosInstance from "../../services/axiosInstance";
// import { addBookDetails } from "../../services/apiServices";
// import verify from "../../assets/images/verify.png"
// import locationPin from "../../assets/icons/locationPin.png";
// import img10 from "../../assets/images/img10.png";
// import { ShareRounded } from "@mui/icons-material";

// const PaymentSuccess = () => {
//     const [searchParams] = useSearchParams();
//     const sessionId = searchParams.get("session_id");
//     const [status, setStatus] = useState("Verifying Payment...");

//     useEffect(() => {
//         const verifyPayment = async () => {
//             if (!sessionId) {
//                 setStatus("Invalid session. Please try again.");
//                 return;
//             }

//             try {
//                 const { data } = await axiosInstance.get(`/verify-payment/${sessionId}`);

//                 if (data.payment_status === "paid") {
//                     const storedValues = sessionStorage.getItem("bookingDetails");

//                     if (!storedValues) {
//                         setStatus("Session Expired");
//                         return;
//                     }

//                     let parsedValues = storedValues ? JSON.parse(storedValues) : {};
//                     delete parsedValues.calculatedValues;

//                     const response = await addBookDetails({ ...parsedValues });

//                     if (response) {
//                         setStatus("Booking confirmed! 🎉");
//                         sessionStorage.removeItem("bookingDetails");
//                     }
//                 } else {
//                     setStatus("Payment failed or not confirmed.");
//                 }
//             } catch (error) {
//                 console.error("Error verifying payment:", error);
//                 setStatus("Error verifying payment.");
//             }
//         };

//         verifyPayment();
//     }, [sessionId]);

//     return (
//         <div className="payment-success mt-10">
//             <div className="container mx-auto">
//                 <div className="border border-border1 rounded-2xl p-5">
//                     <div className="">
//                         <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
//                             <div className=''>
//                                 <img src={img10} className='min-w-20 sm:w-20 sm:h-20 rounded object-cover' alt="Property" />
//                             </div>
//                             <div className="text-[#1F1607]">
//                                 <h4 className="text-lg md:text-xl lg:text-2xl font-medium leading-6 mb-2 hover:text-primary duration-300"><Link to="/property/67694a111f8046525ea6143c">Lavish 3BR at the Address JBR w/ Dubai Eye Views!</Link></h4>
//                                 <p className="flex items-start gap-2 mt-1">
//                                     <img src={locationPin} className="w-2.5 md:w-3 mt-1 md:mt-1.5" alt="Location Pin" />
//                                     <span className="text-sm md:text-base text-[#717171] w-full">
//                                         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
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
//                                 <span className='text-text2 text-sm'>Date</span>
//                                 <p className='text-text1 font-medium'>Apr 19, 2025 to Apr 24, 2025</p>
//                             </div>
//                             <div>
//                                 <span className='text-text2 text-sm'>Guest Name</span>
//                                 <p className='text-text1 font-medium capitalize'>bhupinder singh</p>
//                             </div>
//                             <div>
//                                 <span className='text-text2 text-sm'>Guest E-mail</span>
//                                 <p className='text-text1 font-medium'>bhupinder.mexxiss@gmail.com</p>
//                             </div>
//                         </div>
//                     </div>
//                     <hr className='border-border1 my-5' />
//                     <div>
//                         <h5 className='text-lg font-medium text-text1'>Payment details</h5>
//                         <ul className='flex flex-col gap-1 mt-2 max-w-[600px]'>
//                             <li className='flex items-center justify-between'>
//                                 <span className='text-text2'>Accommodation</span>
//                                 <p className='text-text1 font-medium'>7,070.00 AED AED</p>
//                             </li>
//                             <li className='flex items-center justify-between'>
//                                 <span className='text-text2'>Cleaning</span>
//                                 <p className='text-text1 font-medium'>580.00 AED</p>
//                             </li>
//                             <li className='flex items-center justify-between'>
//                                 <span className='text-text2'>Tourism tax</span>
//                                 <p className='text-text1 font-medium'>150.00 AED</p>
//                             </li>
//                             <li className='flex items-center justify-between'>
//                                 <span className='text-text2'>VAT Taxes</span>
//                                 <p className='text-text1 font-medium'>382.50 AED</p>
//                             </li>
//                             <li className='flex items-center justify-between mt-2'>
//                                 <span className='text-text2'>Total balance</span>
//                                 <p className='text-text1 text-lg font-medium'>8,182.50 AED</p>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             {/* <h2>{status}</h2> */}
//         </div>

//     );
// };

// export default PaymentSuccess;
