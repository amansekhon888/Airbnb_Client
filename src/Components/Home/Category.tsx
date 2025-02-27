import Slider from "react-slick";
import cate1 from "../../assets/images/cate1.png";
import cate2 from "../../assets/images/cate2.png";
import cate3 from "../../assets/images/cate3.png";
import cate4 from "../../assets/images/cate4.png";
import cate5 from "../../assets/images/cate5.png";
import { useRef } from "react";
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material";
const Category = () => {
    const sliderRef = useRef<Slider | null>(null);

    const Prev = () => {
        sliderRef.current?.slickPrev();
    }
    const Next = () => {
        sliderRef.current?.slickNext();
    }
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
        ]
    }

    const CateList = [
        {
            name: 'Farms',
            img: cate1
        },
        {
            name: 'Beachfront',
            img: cate2
        },
        {
            name: 'Lakefront',
            img: cate3
        },
        {
            name: 'Rooms',
            img: cate4
        },
        {
            name: 'Amazing pools',
            img: cate5
        },
    ]
    return (
        <div>
            <div className="container mx-auto">
                <div>
                    <div className="px-3 relative">
                        <button className="bg-white text-primary p-1 rounded absolute left-0 top-1/2 -translate-y-1/2 z-10 " onClick={Prev}><span className="w-7 sm:w-9 h-7 sm:h-9 flex items-center justify-center rounded hover:bg-primary hover:text-white duration-300">
                            <KeyboardArrowLeftOutlined className="!text-3xl" /></span></button>
                        <button className="bg-white text-primary p-1 rounded absolute right-0 top-1/2 -translate-y-1/2 z-10 " onClick={Next}><span className="w-7 sm:w-9 h-7 sm:h-9 flex items-center justify-center rounded hover:bg-primary hover:text-white duration-300">
                            <KeyboardArrowRightOutlined className="!text-3xl" /></span></button>
                        <Slider {...settings} ref={sliderRef}>
                            {CateList.map((cate, index) => (
                                <div key={index} className="px-2 lg:px-3">
                                    <div className="h-[200px] xs:h-[250px] lg:h-[320px] overflow-hidden rounded-xl sm:rounded-[20px] relative group cateCard cursor-pointer">
                                        <img src={cate.img} className="h-full w-full object-cover rounded-xl sm:rounded-[20px]" />
                                        {/* Gradient 1: Default state */}
                                        <div className="absolute top-0 left-0 w-full h-full bg-black-gradient to-black opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-[20px] group-hover:opacity-0"></div>
                                        {/* Gradient 2: Hover state */}
                                        <div className="absolute top-0 left-0 w-full h-full bg-bg-gradient to-[#1bb1bb] opacity-0 transition-opacity duration-300 rounded-xl sm:rounded-[20px] group-hover:opacity-100"></div>
                                        <h3 className="text-sm absolute bottom-4 left-6 sm:text-base md:text-xl font-medium text-white">{cate.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category