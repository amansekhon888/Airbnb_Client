import banner1 from "../../assets/images/banner1.png"
import img2 from "../../assets/images/img2.png"
import img3 from "../../assets/images/img3.png"
import icon1 from "../../assets/icons/icon1.png"
import icon2 from "../../assets/icons/icon2.png"
import icon3 from "../../assets/icons/icon3.png"
import icon4 from "../../assets/icons/icon4.png"
import { Modal } from "flowbite-react"
import { useState } from "react"
import { CloseOutlined } from "@mui/icons-material"

const HostWelcome = () => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div>
            <div>
                <div className="container mx-auto">
                    <div className='relative h-[350px] sm:h-[380px] md:h-[440px] rounded-2xl flex items-center justify-center'>
                        <div className="absolute top-0 left-0 w-full h-full z-10 rounded-2xl overflow-hidden">
                            <img src={banner1} alt="" className="w-full h-full object-cover" />
                            <div className="w-full h-full absolute top-0 left-0 bg-[#151f25a4]"></div>
                        </div>
                        <div className="relative z-20 text-center px-4">
                            <h2 className='text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-text2 MD:leading-[56px]'>Turn Your Space into Income <br />
                                <span className="text-[#1BB1BB]">List Your House Today!</span></h2>
                            <p className='text-text2 max-w-[700px] mx-auto mt-3 md:text-lg xs:font-medium'>Join thousands of hosts earning effortlessly. Share your home with travelers and enjoy hassle-free hosting.</p>
                            <div className="flex justify-center mt-8">
                                <button onClick={() => setOpenModal(true)} className="bg-primary hover:bg-primaryHover text-white rounded-md py-3 px-8 duration-300">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-14 md:py-16 lg:py-20">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-6 items-center">
                        <div className="hidden lg:block">
                            <img src={img2} alt="" />
                        </div>
                        <div>
                            <p className="text-text1 font-medium"><span className="text-primary">Why</span> List Your House?</p>
                            <h4 className="text-2xl xl:text-3xl font-semibold text-text1 mt-1">Turn Your Space into <span className="text-primary">Extra Income</span> Hassle-Free Hosting Awaits!</h4>
                            <p className="text-text3 mt-1">Join thousands of hosts earning effortlessly while welcoming guests from around the world. Flexible, secure, and rewarding!</p>
                            <div className="grid sm:grid-cols-2 gap-4 mt-8">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center bg-[#F0F0F0] min-w-12 w-12 h-12 rounded-md justify-center">
                                        <img src={icon1} className="w-8" />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-medium">Earn Effortlessly</h5>
                                        <p className="text-text3 text-sm">Turn your extra space into a steady income stream on your terms.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center bg-[#F0F0F0] min-w-12 w-12 h-12 rounded-md justify-center">
                                        <img src={icon2} className="w-8" />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-medium">Safe & Secure</h5>
                                        <p className="text-text3 text-sm">We verify guests and ensure a hassle-free experience.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center bg-[#F0F0F0] min-w-12 w-12 h-12 rounded-md justify-center">
                                        <img src={icon3} className="w-8" />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-medium">Full Control</h5>
                                        <p className="text-text3 text-sm">You decide when to host, and how much to charge.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center bg-[#F0F0F0] min-w-12 w-12 h-12 rounded-md justify-center">
                                        <img src={icon4} className="w-8" />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-medium">24/7 Support</h5>
                                        <p className="text-text3 text-sm">Get help anytime and connect with experienced hosts worldwide.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={openModal} onClose={() => setOpenModal(false)} size='xl'>
                <Modal.Body className="p-0">
                    <div className="flex items-center justify-end px-6 pt-4">
                        <button className="text-text1" onClick={() => { setOpenModal(false) }}><CloseOutlined /></button>
                    </div>
                    <div className='px-4 py-4'>
                        <img src={img3} alt="" className="max-w-[400px] mx-auto" />
                        <div className="text-center mt-4">
                            <h3 className="text-3xl font-bold">Switch to <span className="text-primary">Host Mode?</span></h3>
                            <p className="text-text3 leading-5 mt-2">Are you sure you want to switch to Host mode? This will allow you to list your property and manage bookings.</p>
                            <hr className="my-5 border-border1" />
                            <p className="text-center"><input type="checkbox" className="mr-2 rounded" /> I don’t want to receive marketing messages from Airbnb.</p>
                            <button className="btn1 w-full mt-4">Agree and continue</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default HostWelcome