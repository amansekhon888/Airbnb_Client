import cate1 from "../../assets/images/cate1.png"
import Star from "../../assets/icons/Star.png"
import { FavoriteBorderOutlined, KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material"
import { useRef } from "react";
import Slider from "react-slick";
const Recommended = () => {
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
        arrows: false,
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    }
    return (
        <div className="mt-14 md:mt-16 lg:mt-20">
            <div className="container mx-auto">
                <div className="bg-secondary p-5 md:p-10 rounded-3xl">
                    <div>
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div>
                                <h2 className="h2">Recommended stays for you</h2>
                                <p className="md:text-lg mt-2">Based on your most recently viewed property</p>
                            </div>
                            <button className="btn1 hidden md:inline-block">View All Property</button>
                        </div>
                        <div className="mt-10">
                            <div className="relative">
                                <button className="bg-white text-primary p-1 rounded absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 " onClick={Prev}><span className="w-7 md:w-9 h-7 md:h-9 flex items-center justify-center rounded hover:bg-primary hover:text-white duration-300">
                                    <KeyboardArrowLeftOutlined className="!text-3xl" /></span></button>
                                <button className="bg-white text-primary p-1 rounded absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 " onClick={Next}><span className="w-7 md:w-9 h-7 md:h-9 flex items-center justify-center rounded hover:bg-primary hover:text-white duration-300">
                                    <KeyboardArrowRightOutlined className="!text-3xl" /></span></button>
                                <Slider {...settings} ref={sliderRef}>
                                    {Array(5).fill(0).map((i) => (
                                        <div key={i} className="px-2">
                                            <div className="rounded-xl md:rounded-[20px] overflow-hidden h-[250px] relative border border-border1">
                                                <div className="w-full h-full">
                                                    <img src={cate1} className="w-full h-full object-cover" />
                                                </div>
                                                <button className="w-10 h-10 flex items-center justify-center border border-border1 absolute top-0 right-0 bg-white rounded-bl-[20px] text-[#717171]">
                                                    <FavoriteBorderOutlined />
                                                </button>
                                                <div className="absolute bottom-0 left-0 right-0 w-full p-3 flex items-center justify-between bg-white z-10">
                                                    <h4 className="md:ext-lg text-text1 text-nowrap overflow-hidden text-ellipsis w-[calc(100%_-_70px)]">Ramada, Jaipur</h4>
                                                    <div className="flex items-center gap-1.5 text-[#34C759]">
                                                        <img src={Star} className="w-4 md:w-5" />
                                                        <span className="font-medium md:text-lg">4.5</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                        <div className="mt-6 text-center"
                        >
                            <button className="btn1 md:hidden">View All Property</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommended