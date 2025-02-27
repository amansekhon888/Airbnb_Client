import cate1 from "../../assets/images/cate1.png"
import weekendBg from "../../assets/images/weekendBg.png"
import whiteStar from "../../assets/icons/whiteStar.png"
import { FavoriteBorderOutlined, KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material"
import { useRef } from "react";
import Slider from "react-slick";
const WeekendDeals = () => {
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
    return (

        <div className="my-14 md:my-16 lg:my-20">
            <div className="container mx-auto">
                <div className="relative p-10 rounded-3xl bg-cover" style={{ backgroundImage: `url(${weekendBg}` }} >
                    <div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="h2 !text-text2">Last-minute weekend deals</h2>
                                <p className="text-lg mt-2 text-text2">Showing deals for: <span><b>20 Dec - 22 Dec</b></span></p>
                            </div>
                            <button className="btn1">View All</button>
                        </div>
                        <div className="mt-10">
                            <div className="relative">
                                <button className="bg-white text-primary p-1 rounded absolute -left-11 top-1/2 -translate-y-1/2 z-10 " onClick={Prev}><span className="w-7 h-7 flex items-center justify-center rounded hover:bg-primary hover:text-white duration-300">
                                    <KeyboardArrowLeftOutlined className="!text-xl" /></span></button>
                                <button className="bg-white text-primary p-1 rounded absolute -right-11 top-1/2 -translate-y-1/2 z-10 " onClick={Next}><span className="w-7 h-7 flex items-center justify-center rounded hover:bg-primary hover:text-white duration-300">
                                    <KeyboardArrowRightOutlined className="!text-xl" /></span></button>
                                <Slider {...settings} ref={sliderRef}>
                                    {Array(5).fill(0).map((i) => (
                                        <div key={i} className="px-2">
                                            <div className="">
                                                <div className="relative h-[250px] rounded-[20px] overflow-hidden">
                                                    <div className="w-full h-full">
                                                        <img src={cate1} className="w-full h-full object-cover" />
                                                    </div>
                                                    <button className="w-10 h-10 flex items-center justify-center border border-border1 absolute top-0 right-0 bg-white rounded-bl-[20px] text-[#717171]">
                                                        <FavoriteBorderOutlined />
                                                    </button>
                                                </div>
                                                <div className="w-full py-3">
                                                    <div className="flex items-center justify-between">
                                                        <h4 className="text-sm text-text2 text-nowrap overflow-hidden text-ellipsis w-[calc(100%_-_70px)]">Shimla</h4>
                                                        <div className="flex items-center gap-1.5 text-text2 bg-[#34C759] px-2 py-1 rounded">
                                                            <img src={whiteStar} className="w-4" />
                                                            <span className="font-medium text-sm">4.5</span>
                                                        </div>
                                                    </div>
                                                    <h4 className="line-clamp-1 text-lg font-medium text-text2 mt-1">Armani Hotel Dubai, Burj Khalifa</h4>
                                                    <div className="mt-2 text-text2">
                                                        <div className="flex items-end gap-1.5 ">
                                                            <p className="text-xl font-medium">₹15,699</p><span className="line-through font-medium">₹19,624</span>
                                                        </div>
                                                        <p className="text-sm mt-1">per night ₹37,050 total includes taxes & fees</p>
                                                        <div className="rounded w-max mt-2 py-1 px-2 bg-text2 text-primary text-sm font-medium">20% Off</div>
                                                    </div>
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
        </div >
    )
}

export default WeekendDeals