import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { CameraAltOutlined, KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material";
import PersonalInfo from "../../Components/AccountSettings/PersonalInfo.tsx";
import LoginAndSecurity from "../../Components/AccountSettings/LoginAndSecurity.tsx";
import PaymentsAndPayouts from "../../Components/AccountSettings/PaymentsAndPayouts.tsx";
import Taxes from "../../Components/AccountSettings/Taxes.tsx";
import Notifications from "../../Components/AccountSettings/Notifications.tsx";
import PrivacyAndSharing from "../../Components/AccountSettings/PrivacyAndSharing.tsx";
import GlobalPreferences from "../../Components/AccountSettings/GlobalPreferences.tsx";
import TravelWork from "../../Components/AccountSettings/TravelWork.tsx";
import userImg2 from "../../assets/images/userImg2.png"

const AccountSettings = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const tabParam = searchParams.get("tab");
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 992);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const accountSettings = [
        { title: "Personal Info", Component: <PersonalInfo /> },
        { title: "Login & Security", Component: <LoginAndSecurity /> },
        { title: "Payments & Payouts", Component: <PaymentsAndPayouts /> },
        { title: "Taxes", Component: <Taxes /> },
        { title: "Notifications", Component: <Notifications /> },
        { title: "Privacy & Sharing", Component: <PrivacyAndSharing /> },
        { title: "Global Preferences", Component: <GlobalPreferences /> },
        { title: "Travel for work", Component: <TravelWork /> },
    ];

    const initialIndex = Math.max(accountSettings.findIndex(setting => setting.title.toLowerCase() === tabParam?.toLowerCase()), 0);
    const [activeIndex, setActiveIndex] = useState(initialIndex);
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        if (tabParam) {
            setShowComponent(true);
        } else {
            setShowComponent(false);
        }
    }, [tabParam]);

    const handleBack = () => {
        setShowComponent(false);
        setSearchParams({});
    };

    return (
        <div className="pb-10 sm:pb-14 md:pb-16">
            <div className="container mx-auto">
                <div className="pb-4 flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold">Account</h2>
                        <p className="text-text1 mt-1 text-sm md:text-base flex flex-col sm:flex-row">
                            <span className="capitalize font-medium">Parth Account,</span> <span>parth.mexxiss@gmail.com</span>
                        </p>
                    </div>
                    <div className="relative w-20 border rounded-full overflow-hidden">
                        <img src={userImg2} className="w-full h-full object-cover" />
                        <label htmlFor="file" className="cursor-pointer w-full h-7 absolute bottom-0 bg-text1 opacity-80 flex items-center justify-center text-white">
                            <span><CameraAltOutlined className="!text-lg" /></span>
                            <input type="file" name="" id="file" hidden />
                        </label>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex flex-col lg:flex-row gap-4 xl:gap-16">
                        {isMobileView && showComponent ? (
                            <div className="text-2xl font-medium text-primary flex items-center gap-1 cursor-pointer" onClick={handleBack}>
                                <KeyboardArrowLeftOutlined className="!text-3xl" />
                                <span>{accountSettings[activeIndex].title}</span>
                            </div>
                        ) : (
                            <div className="w-full lg:w-[30%]">
                                <div className="flex flex-col gap-4 lg:gap-6">
                                    {accountSettings.map((e, i) => (
                                        <div
                                            key={i}
                                            onClick={() => {
                                                setActiveIndex(i);
                                                setSearchParams({ tab: e.title.toLowerCase() });
                                            }}
                                            className={`pb-4 lg:pb-6 border-b-2 border-border1 cursor-pointer transition-colors ${activeIndex === i ? "text-primary" : "text-text1"}`}
                                        >
                                            <div className="flex justify-between items-center">
                                                <h4 className="text-lg md:text-xl font-medium">{e.title}</h4>
                                                <span>
                                                    {activeIndex === i ? (
                                                        <KeyboardArrowRightOutlined />
                                                    ) : (
                                                        <span className="underline font-medium text-sm md:text-base">Edit</span>
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className={`w-full lg:w-[70%] ${isMobileView && !showComponent ? "hidden" : "block"}`}>
                            <div className="border rounded-2xl py-6 px-4 md:px-6 bg-gray-50">{accountSettings[activeIndex].Component}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;
