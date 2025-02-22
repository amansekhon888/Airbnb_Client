import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@mui/icons-material'
import React, { useRef } from 'react'
import Slider from 'react-slick'
import cate3 from "../../assets/images/cate3.png"

const PopularStays = () => {
    const [isActive, setIsActive] = React.useState("Beach")
    const sliderRef = useRef<Slider | null>(null);

    const Prev = () => {
        sliderRef.current?.slickPrev();
    }
    const Next = () => {
        sliderRef.current?.slickNext();
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false
    }

    const CateList = [
        "Beach",
        "Mountain",
        "City",
        "Ski",
        "Family",
        "Wellness and Relaxation"
    ]

    return (
        <div className="mt-14 md:mt-16 lg:mt-20">
            <div className="container mx-auto">
                <div>
                    <h2 className="h2">Explore stays in popular destinations</h2>
                </div>
                <div className='mt-4'>
                    <ul className='flex items-center gap-4 border-b border-border1'>
                        {CateList.map(cate => (
                            <li key={cate} className={`cursor-pointer first-letter:capitalize p-3 px-2 md:text-lg relative after:absolute after:w-full after:h-[4px] after:bottom-[-2.5px] after:left-0 after:rounded-xl ${isActive === cate ? "text-primary text-shadow-custom after:bg-primary" : "text-text1 after:bg-transparent"}`} onClick={() => setIsActive(cate)}>
                                {cate}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-9">
                        <div className="relative">
                            <button className="bg-white text-primary p-1 rounded absolute -left-4 top-1/2 -translate-y-1/2 z-10 " onClick={Prev}><span className="w-9 h-9 flex items-center justify-center rounded hover:bg-primary hover:text-white duration-300">
                                <KeyboardArrowLeftOutlined className="!text-3xl" /></span></button>
                            <button className="bg-white text-primary p-1 rounded absolute -right-4 top-1/2 -translate-y-1/2 z-10 " onClick={Next}><span className="w-9 h-9 flex items-center justify-center rounded hover:bg-primary hover:text-white duration-300">
                                <KeyboardArrowRightOutlined className="!text-3xl" /></span></button>
                            <Slider {...settings} ref={sliderRef}>
                                {Array(5).fill(0).map((i) => (
                                    <div key={i} className="px-2">
                                        <div className="rounded-[20px] overflow-hidden h-[290px] relative border border-border1">
                                            <div className="w-full h-full">
                                                <img src={cate3} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 w-full p-3 bg-white z-10">
                                                <h4 className="text-lg font-medium text-text1 text-nowrap overflow-hidden text-ellipsis w-full">Mumbai</h4>
                                                <p className='text-text3 text-nowrap overflow-hidden text-ellipsis w-full'>Maharashtra, India</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularStays