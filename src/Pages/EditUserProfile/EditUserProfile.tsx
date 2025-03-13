import { CameraAltOutlined } from "@mui/icons-material"

const EditUserProfile = () => {
    return (
        <div className='pb-14 md:pb-16'>
            <div className="container mx-auto">
                <div>
                    <div className="mb-10">
                        <h2 className="text-3xl font-semibold mb-1">Edit Profile</h2>
                        <p className="text-text3">The information you share will be used across Airbnb to help other guests and Hosts get to know you.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 border border-border1 rounded-xl p-6">
                        <div className="rounded-full min-w-32 w-32 relative overflow-hidden">
                            <img src="https://a0.muscache.com/im/pictures/user/34656693-9731-424b-8018-e7faf0d91968.jpg?im_w=240&im_format=avif" className="w-full h-full object-cover" />
                            <label htmlFor="file" className="cursor-pointer w-full h-9 absolute bottom-0 bg-text1 opacity-80 flex items-center justify-center text-white">
                                <span><CameraAltOutlined className="!text-xl" /></span>
                                <input type="file" name="" id="file" hidden />
                            </label>
                        </div>
                        <div className="w-full">
                            <div>
                                <h5 className="text-xl font-semibold">About You</h5>
                                <p className="text-text3">Tell us a little bit about yourself so your future Hosts or guests can get to know you</p>
                                <textarea name="" id="" rows={4} placeholder="Write something fun and punchy." className="focus:ring-0 focus:border-primary py-2 px-3 text-text1 placeholder:text-text3 border-border1 w-full rounded-md resize-none mt-4"></textarea>
                                <p className="text-end text-sm"><b>500</b> characters available</p>
                            </div>
                            <div className="mt-5">
                                <h5 className="text-xl font-semibold">Languages you speak</h5>
                                <p className="text-text3">List the languages you speak to help others communicate with you easily.</p>
                                <div className="mt-4">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-4">
                                            <input type="text" className="focus:ring-0 focus:border-primary py-2 text-text1 placeholder:text-text3 border-border1 w-full max-w-[200px] rounded-md" value="English" />
                                            <button className="font-medium underline text-red-600 text-sm">Remove</button>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <select className="focus:ring-0 focus:border-primary py-2 px-3 text-text1 placeholder:text-text3 border-border1 w-full max-w-[200px] rounded-md">
                                                <option value="English">English</option>
                                                <option value="Hindi">Hindi</option>
                                            </select>
                                            <button className="font-medium underline text-text1 text-sm">Add More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-8 flex justify-end gap-3'>
                                <button type='submit' className='btn1'>Save</button>
                                <button type='submit' className='btn1 border border-text1 !bg-transparent !text-text1 hover:!text-primary hover:border-primary'>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EditUserProfile