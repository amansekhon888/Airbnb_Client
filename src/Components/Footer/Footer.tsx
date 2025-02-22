import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import Facebook from '../../assets/icons/Facebook.png'
import Instagram from '../../assets/icons/Instagram.png'
import LinkedIn from '../../assets/icons/LinkedIn.png'
import Twitter from '../../assets/icons/Twitter.png'
import Youtube from '../../assets/icons/Youtube.png'
const Footer = () => {
    return (
        <div className="bg-secondary">
            <div className="container mx-auto">
                <div className="flex items-center justify-between py-10 border-b border-border1">
                    <div>
                        <img src={Logo} alt='Logo' className='w-36' />
                    </div>
                    <div>
                        <p className='text-text3 max-w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                </div>
                <div className='py-10 border-b border-border1'>
                    <div className='grid grid-cols-6'>
                        <div>
                            <h5 className='text-xl text-text1 font-medium'>Product</h5>
                            <ul className='mt-3 grid grid-cols-1 gap-3'>
                                <li><Link to="/" className='text-text3 hover:text-text1 duration-300'>Features</Link></li>
                                <li><Link to="/" className='text-text3 hover:text-text1 duration-300'>Pricing</Link></li>
                                <li><Link to="/" className='text-text3 hover:text-text1 duration-300'>Case studies</Link></li>
                                <li><Link to="/" className='text-text3 hover:text-text1 duration-300'>Reviews</Link></li>
                                <li><Link to="/" className='text-text3 hover:text-text1 duration-300'>Updates</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className='text-xl text-text1 font-medium'>Company</h5>
                            <ul className='mt-3 grid grid-cols-1 gap-3'>
                                <li><Link to="/" className='text-text3 hover:text-text1 duration-300'>About</Link></li>
                                <li><Link to="/" className='text-text3 hover:text-text1 duration-300'>Contact us</Link></li>
                                <li><Link to="/" className='text-text3 hover:text-text1 duration-300'>Careers</Link></li>
                                <li><Link to="/" className='text-text3 hover:text-text1 duration-300'>Culture</Link></li>
                                <li><Link to="/" className='text-text3 hover:text-text1 duration-300'>Blog</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className='text-xl text-text1 font-medium'>Support</h5>
                            <ul className='mt-3 grid grid-cols-1 gap-3'>
                                <li><Link to="/" className='text-text3 hover:text-text1 duration-300'>Getting started</Link></li>
                                <li><Link to="/" className='text-text3 hover:text-text1 duration-300'>Help center us</Link></li>
                                <li><Link to="/" className='text-text3 hover:text-text1 duration-300'>Server status</Link></li>
                                <li><Link to="/" className='text-text3 hover:text-text1 duration-300'>Report a bug</Link></li>
                                <li><Link to="/" className='text-text3 hover:text-text1 duration-300'>Chat support</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className='text-xl text-text1 font-medium'>Downloads</h5>
                            <ul className='mt-3 grid grid-cols-1 gap-3'>
                                <li><Link to="/" className='text-text3 hover:text-text1 duration-300'>iOS</Link></li>
                                <li><Link to="/" className='text-text3 hover:text-text1 duration-300'>Android</Link></li>
                                <li><Link to="/" className='text-text3 hover:text-text1 duration-300'>Mac</Link></li>
                                <li><Link to="/" className='text-text3 hover:text-text1 duration-300'>Windows</Link></li>
                                <li><Link to="/" className='text-text3 hover:text-text1 duration-300'>Chrome</Link></li>
                            </ul>
                        </div>
                        <div className='col-span-2'>
                            <h5 className='text-xl text-text1 font-medium'>Subscribe to our newsletter</h5>
                            <div className='mt-6'>
                                <p className='text-text3'>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>
                                <div className='mt-5'>
                                    <input type="text" className='placeholder:text-text3 border-border1 w-full rounded-lg py-3' placeholder='Enter your email' />
                                </div>
                                <button className='btn1 mt-4'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-5 flex items-center justify-between'>
                    <div>
                        <p className='text-text3'>Copyright © 2022 Airbnb | All Rights Reserved </p>
                    </div>
                    <div>
                        <ul className="flex gap-5 items-end">
                            <li className='hover:-translate-y-1 duration-300'><Link to="/" className='inline-block'><img src={Facebook} className='w-3' /></Link></li>
                            <li className='hover:-translate-y-1 duration-300'><Link to="/" className='inline-block'><img src={Instagram} className='w-5' /></Link></li>
                            <li className='hover:-translate-y-1 duration-300'><Link to="/" className='inline-block'><img src={Youtube} className='w-6' /></Link></li>
                            <li className='hover:-translate-y-1 duration-300'><Link to="/" className='inline-block'><img src={Twitter} className='w-5' /></Link></li>
                            <li className='hover:-translate-y-1 duration-300'><Link to="/" className='inline-block'><img src={LinkedIn} className='w-5' /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer