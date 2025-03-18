import { CancelOutlined, CheckCircleOutlined, KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined, LanguageOutlined, StarRateRounded } from "@mui/icons-material"
import { Rating } from "@mui/material"
import { Link, useParams } from "react-router-dom"
import Slider from "react-slick"
import { useRef } from "react"
import Bath from "../../assets/icons/Bath.png"
import Bed from "../../assets/icons/Bed.png"
import { useGetUsersDetailsQuery } from "../../services/api/user"
import Loading from "../../Components/Loader/Loading"
import { getHostingDuration } from "../../utils/getHostingDuration"

const HostDetails = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetUsersDetailsQuery(id)

    const reviewSliderRef = useRef<Slider | null>(null);
    const listingSliderRef = useRef<Slider | null>(null);

    const prevReview = () => reviewSliderRef.current?.slickPrev();
    const nextReview = () => reviewSliderRef.current?.slickNext();

    const prevListing = () => listingSliderRef.current?.slickPrev();
    const nextListing = () => listingSliderRef.current?.slickNext();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    }
    const settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    }
    if (isLoading) return <Loading />

    return (
        <div className='pb-14 md:pb-16'>
            <div className="container mx-auto">
                <div>
                    <div className="host_info flex flex-col gap-4 sm:flex-row items-center sm:items-start justify-between">
                        <div className="">
                            <div className="flex flex-col md:flex-row sm:items-center justify-start gap-4 sm:gap-6 text-center sm:text-left ">
                                <div className="md:w-min sm:w-full self-center md:self-start">
                                    <img src="https://a0.muscache.com/im/pictures/user/34656693-9731-424b-8018-e7faf0d91968.jpg?im_w=240&im_format=avif" className="rounded-full min-w-32 w-32" />
                                </div>
                                <div>
                                    <div>
                                        <span className="text-sm font-medium bg-primary bg-opacity-10 text-primary px-2 py-1 rounded">Host</span>
                                        <h4 className="text-2xl font-semibold mt-1 capitalize">{data.user.first_name} {data.user.last_name}</h4>
                                        <div className="mt-1 text-text1 font-medium flex items-center justify-center sm:justify-start gap-2">
                                            <div className="flex items-center gap-2">
                                                <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
                                                <span className="text-sm">4.5</span>
                                            </div>
                                            <button className="underline underline-offset-4 text-sm">(2.8k reviews)</button>
                                        </div>
                                    </div>
                                    <div className="mt-3 font-medium">
                                        <p className="text-text1 text-[17px]">Paul's confirmed information</p>
                                        <ul className="flex flex-wrap justify-center sm:justify-start items-center gap-3 mt-1 text-sm">
                                            <li className="flex items-center gap-1">
                                                <CheckCircleOutlined className="!text-lg text-green-500" /> {getHostingDuration(data.user.createdAt)}
                                            </li>
                                            <li className="flex items-center gap-1">
                                                {data.user.isEmailVerified ?
                                                    <CheckCircleOutlined className="!text-lg text-green-500" />
                                                    :
                                                    <CancelOutlined className="!text-lg text-red-500" />
                                                } Email address
                                            </li>
                                            <li className="flex items-center gap-1">
                                                {data.user.isNumberVerified ?
                                                    <CheckCircleOutlined className="!text-lg text-green-500" />
                                                    :
                                                    <CancelOutlined className="!text-lg text-red-500" />
                                                } Phone number
                                            </li>
                                            {data.user.languages.length ?
                                                <li className="flex items-center gap-1">
                                                    <LanguageOutlined className="!text-lg text-green-500" /> Speaks English and Hindi
                                                </li> : ""
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {data.isSelfDetails &&
                            <div className="">
                                <button className="btn1 text-nowrap">Edit Profile</button>
                            </div>
                        }
                    </div>
                    <div className="about mt-10">
                        <h4 className="text-2xl font-semibold">About Paul</h4>
                        <p className="mt-3 text-text1 text-sm md:text-base">Hey, lorem ipsum dolor sit amet consectetur. Placerat eu eu egestas id tellus. Nec orci ultrices felis sit tellus commodo at. Eu sit ante aliquam adipiscing euismod orci lacus. Nisl cras praesent proin sed sed. Volutpat adipiscing at gravida cursus faucibus interdum lorem volutpat ac. Viverra dictumst amet bibendum tortor. Massa massa mattis purus sit vestibulum suspendisse convallis risus.</p>
                        <p className="mt-3 text-text1 text-sm md:text-base">Hey, lorem ipsum dolor sit amet consectetur. Placerat eu eu egestas id tellus. Nec orci ultrices felis sit tellus commodo at. Eu sit ante aliquam adipiscing euismod orci lacus. Nisl cras praesent proin sed sed. Volutpat adipiscing at gravida cursus faucibus interdum lorem volutpat ac. Viverra dictumst amet bibendum tortor. Massa massa mattis purus sit vestibulum suspendisse convallis risus.</p>
                    </div>
                    <hr className="border-border1 my-8" />
                    <div className="reviews">
                        <div className="flex items-center justify-between">
                            <h4 className="text-2xl font-semibold">Paul’s reviews</h4>
                            <div className="flex items-center gap-2">
                                <button className="w-8 h-8 flex items-center justify-center rounded-md text-primary bg-transparent hover:text-white hover:bg-primary duration-300" onClick={prevReview}><KeyboardArrowLeftOutlined className="!text-3xl" /></button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-md text-primary bg-transparent hover:text-white hover:bg-primary duration-300" onClick={nextReview}><KeyboardArrowRightOutlined className="!text-3xl" /></button>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="">
                                <Slider {...settings} ref={reviewSliderRef}>
                                    {Array(5).fill(0).map((_, i) => (
                                        <div className="px-1 sm:px-2.5" key={i}>
                                            <div className="border border-border1 rounded-xl p-3">
                                                <div className="flex gap-1 flex-col md:flex-row md:items-start justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <div>
                                                            <img src="https://a0.muscache.com/im/pictures/user/ac714061-d8d1-46df-8007-5866f6a83512.jpg?im_w=240&im_format=avif" className="min-w-12 w-12 h-12 object-cover rounded-md" />
                                                        </div>
                                                        <div>
                                                            <h6 className="text- font-semibold">Lora Smith</h6>
                                                            <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="text-text3 text-sm">26/09/2024</span>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <p className="line-clamp-3 text-sm md:text-base">“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.”</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                            <div className="mt-5">
                                <button className="border border-text1 text-text1 px-4 py-2 hover:text-white hover:bg-primary hover:border-primary duration-300 rounded-md text-sm sm:text-base">View all 15 reviews</button>
                            </div>
                        </div>
                    </div>
                    <hr className="border-border1 my-8" />
                    <div className="listing">
                        <div className="flex items-center justify-between">
                            <h4 className="text-2xl font-semibold">Paul’s listings</h4>
                            {data.properties.length > 4 &&
                                <div className="flex items-center gap-2">
                                    <button className="w-8 h-8 flex items-center justify-center rounded-md text-primary bg-transparent hover:text-white hover:bg-primary duration-300" onClick={prevListing}><KeyboardArrowLeftOutlined className="!text-3xl" /></button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded-md text-primary bg-transparent hover:text-white hover:bg-primary duration-300" onClick={nextListing}><KeyboardArrowRightOutlined className="!text-3xl" /></button>
                                </div>
                            }
                        </div>
                        <div className="mt-5">
                            <div className="">
                                {data.properties.length > 4 ? (
                                    <Slider {...settings2} ref={listingSliderRef}>
                                        {data.properties.map((property: Property, i: number) => (
                                            <div className="px-1 sm:px-2.5" key={i}>
                                                <PropertyCard property={property} />
                                            </div>
                                        ))}
                                    </Slider>
                                ) : (
                                    // Grid layout only when properties are 4 or fewer & screen is lg or larger
                                    <div className="grid xs:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 gap-3">
                                        {data.properties.map((property: Property, i: number) => (
                                            <PropertyCard property={property} key={i} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
interface Property {
    _id: string;
    title: string;
    gallery: { url: string }[];
    bedrooms: number;
    bathrooms: number;
}

const PropertyCard = ({ property }: { property: Property }) => {
    return (
        <div>
            <div className="rounded-[20px] overflow-hidden h-[200px] xl:h-[250px] relative border border-border1">
                <Link to={`/property-details/${property._id}`} className="w-full h-full block">
                    <img src={property.gallery[0]?.url} className="w-full h-full object-cover" alt="property" />
                </Link>
            </div>

            <div className='pt-3'>
                <div className="flex items-start justify-between gap-4">
                    <h4 className="font-medium text-text1 leading-5">
                        <Link to={`/property-details/${property._id}`}>{property.title}</Link>
                    </h4>
                    <div className="flex items-center gap-1 text-text1">
                        <StarRateRounded className="!text-lg" />
                        <span className="font-medium text-sm">4.5</span>
                    </div>
                </div>
                <div className='flex items-center gap-2 mt-2 text-sm font-medium'>
                    <div className="flex items-center gap-1">
                        <img src={Bed} className='w-4' />
                        <span className='text-text1'>{property.bedrooms} Bedrooms</span>
                    </div>
                    <span className='block h-full w-0.5 bg-border1'></span>
                    <div className="flex items-center gap-1">
                        <img src={Bath} className='w-4' />
                        <span className='text-text1'>{property.bathrooms} Bathrooms</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HostDetails