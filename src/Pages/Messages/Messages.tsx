import { ArrowBack, SearchOutlined, TuneOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import userImg2 from '../../assets/images/userImg2.png'
const Messages = () => {
    return (
        <div className='pb-10'>
            <div className="container mx-auto">
                <div className="md:flex border border-border1 rounded-lg ">
                    <div className='w-full md:w-[40%] lg:w-[30%]'>
                        <div className='flex items-center justify-between text-text1 px-4 h-16'>
                            <h4 className='text-2xl font-medium'>Messages</h4>
                            <div className='flex items-center gap-3'>
                                <button><SearchOutlined /></button>
                                <button><TuneOutlined /></button>
                            </div>
                        </div>
                        <div className='border-t border-border1 py-3'>
                            <ul className="flex flex-col gap-2 px-4 h-[calc(100vh-274px)] min-h-[234px] overflow-auto">
                                <li className='flex items-center gap-3 p-3 cursor-pointer rounded-lg bg-[#F0F0F0]'>
                                    <img
                                        src={userImg2}
                                        className="border-2 border-border1 rounded-full min-w-11 w-11 h-11 object-cover"
                                        alt=""
                                    />
                                    <div className='text-text1 w-full'>
                                        <div className='flex items-center justify-between mb-1'>
                                            <p className='font-medium'>Herman Turner</p>
                                            <span className='text-xs text-text3'>11:58 AM</span>
                                        </div>
                                        <p className='text-sm line-clamp-1'>Hi, Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                    </div>
                                </li>
                                <li className='flex items-center gap-3 p-3 cursor-pointer rounded-lg '>
                                    <img
                                        src={userImg2}
                                        className="border-2 border-border1 rounded-full w-11 h-11 object-cover"
                                        alt=""
                                    />
                                    <div className='text-text3'>
                                        <div className='flex items-center justify-between mb-1'>
                                            <p className='font-medium'>Michael Gregory</p>
                                            <span className='text-xs text-text3'>Tuesday</span>
                                        </div>
                                        <p className='text-sm line-clamp-1'>Hi, Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white w-full md:w-[60%] lg:w-[70%] rounded-lg md:rounded-l-none   md:rounded-r-lg md:border-l border-border1">
                        <div className="flex items-center justify-between px-4 py-3">
                            <div className="flex items-center gap-3">
                                <button className='text-text3 md:hidden'><ArrowBack/></button>
                                <img
                                    src={userImg2}
                                    className="border-2 border-border1 rounded-full w-10 h-10 object-cover"
                                    alt=""
                                />
                                <div>
                                    <p className="text-lg text-text1 font-medium capitalize">
                                        <Link to={`/admin/user/679213726d1fcbe702f0b168`} className=" hover:text-primary duration-300" >inder</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr className="border-border1" />
                        <div className="px-4 py-4 h-[calc(100vh-306px)] min-h-[200px]  overflow-auto">
                            <div className="flex flex-col gap-4">
                                <p className='text-text1 font-medium text-center text-sm'>Yesterday</p>
                                <div className="max-w-[85%] xs:max-w-[70%] lg:max-w-[55%] mr-auto">
                                    <div className="rounded-md rounded-bl-none bg-[#F0F0F0] p-3">
                                        <p className="text-sm text-text1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        </p>
                                        <p className='text-end text-[11px] text-text3'>11:54 AM</p>
                                    </div>
                                </div>
                                <p className='text-text1 font-medium text-center text-sm'>Today</p>
                                <div className="max-w-[85%] xs:max-w-[70%] lg:max-w-[55%] ml-auto">
                                    <div className="rounded-md rounded-br-none bg-text1 p-3">
                                        <p className="text-sm text-white">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        </p>
                                        <p className='text-end text-[11px] text-white'>11:54 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" border-t border-border1 py-3 px-4">
                            <div className="flex items-center gap-2">
                                <input type="text" className="p-0 border-none focus:ring-0 w-full" placeholder="Write a message..." />
                                <div className="flex items-center gap-2">
                                    <button className="bg-primary text-white py-1 px-3 rounded ">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages