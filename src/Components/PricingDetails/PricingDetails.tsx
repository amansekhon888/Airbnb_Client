import { Add, Remove } from "@mui/icons-material";
import Flatpickr from "react-flatpickr";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetCalculateBookingPriceQuery } from "../../services/api/property";

const PricingDetails = ({ data }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [guestCount, setGuestCount] = useState(Number(searchParams.get("guests")) || 1);
    const [selectedDate, setSelectedDate] = useState<Date[] | null>(
        searchParams.get("start_date") && searchParams.get("end_date")
            ? [new Date(searchParams.get("start_date")!), new Date(searchParams.get("end_date")!)]
            : null
    );
    const [priceData, setPriceData] = useState(null);
    const navigate = useNavigate()

    if (guestCount > data.max_guests) {
        setGuestCount(1)
    }

    useEffect(() => setPriceData(null), [selectedDate]); // Reset price on date change

    const { data: fetchedPriceData, isLoading } = useGetCalculateBookingPriceQuery(
        selectedDate?.length === 2
            ? { propertyId: data?._id, checkIn: selectedDate[0].toISOString().split("T")[0], checkOut: selectedDate[1].toISOString().split("T")[0] }
            : null,
        { skip: !selectedDate || selectedDate.length < 2 }
    );

    useEffect(() => {
        if (fetchedPriceData) setPriceData(fetchedPriceData);
    }, [fetchedPriceData]);

    useEffect(() => {
        if (selectedDate?.length === 2) {
            setSearchParams({
                start_date: selectedDate[0].toISOString().split("T")[0],
                end_date: selectedDate[1].toISOString().split("T")[0],
                guests: guestCount.toString(),
            });
        }
    }, [selectedDate, guestCount]);

    const handleBook = () => {
        if (!selectedDate || selectedDate.length < 2 || !priceData || priceData.totalPrice <= 0 || guestCount > data.max_guests) {
            toast.error("Please select valid booking details.");
            return;
        } else {
            sessionStorage.setItem("bookingDetails", JSON.stringify(priceData));
            navigate(`/confirm-booking/${data?._id}?start_date=${selectedDate[0].toISOString().split("T")[0]}&end_date=${selectedDate[1].toISOString().split("T")[0]}&guests=${guestCount}`);
        }
    };

    return (
        <div className="border-primary bg-primary lg:bg-transparent bg-opacity-5 rounded-xl border lg:border-[#C3C3C3] lg:rounded-2xl p-3">
            <PriceHeader price={data?.price_per_night} />
            <DateSelector data={data} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <GuestSelector guestCount={guestCount} setGuestCount={setGuestCount} maxGuests={data.max_guests} />
            <BookingButton isLoading={isLoading} priceData={priceData} selectedDate={selectedDate} guestCount={guestCount} maxGuests={data.max_guests} handleBook={handleBook} />
            {priceData && <PriceBreakdown priceData={priceData} pricePerNight={data?.price_per_night} />}
        </div>
    );
};

const PriceHeader = ({ price }) => (
    <div className="flex items-end text-text1 gap-2">
        <span className="text-xl font-medium">{price}</span>
        <span className="opacity-50">/night</span>
    </div>
);

const DateSelector = ({ data, selectedDate, setSelectedDate }) => (
    <div className="rounded-xl border border-[#c3c3c3] mt-4">
        <div className="p-2">
            <Flatpickr
                options={{
                    mode: "range",
                    dateFormat: "Y-m-d",
                    showMonths: window.innerWidth <= 768 ? 1 : 2,
                    allowInput: true,
                    minDate: data.availability_dates?.start_date,
                    maxDate: data.availability_dates?.end_date,
                    disable: data.not_availability_dates?.map(([from, to]) => ({ from, to })),
                }}
                value={selectedDate || null}
                onChange={setSelectedDate}
                className="px-0 xl:px-3 py-1 placeholder:text-text1 text-text1 border-none w-full focus:ring-0 text-center bg-transparent"
                placeholder="Check-in - Check-out"
            />
        </div>
    </div>
);

const GuestSelector = ({ guestCount, setGuestCount, maxGuests }) => (
    <div className="p-2 flex justify-between items-center">
        <span>Guests:</span>
        <div className="flex items-center gap-2">
            <button onClick={() => setGuestCount(prev => Math.max(1, prev - 1))} disabled={guestCount === 1}>
                <Remove className="text-lg text-primary" />
            </button>
            <span className="font-medium">{guestCount}</span>
            <button onClick={() => setGuestCount(prev => Math.min(maxGuests, prev + 1))} disabled={guestCount === maxGuests}>
                <Add className="text-lg text-primary" />
            </button>
        </div>
    </div>
);

const BookingButton = ({ isLoading, priceData, selectedDate, guestCount, maxGuests, handleBook }) => (
    <div className="mt-4">
        <button
            className={`btn1 w-full flex items-center justify-center ${isLoading || !priceData || !selectedDate || selectedDate.length < 2 || guestCount > maxGuests ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handleBook}
            disabled={isLoading || !priceData || !selectedDate || selectedDate.length < 2 || guestCount > maxGuests}
        >
            {isLoading ? "Calculating..." : "Book Now"}
        </button>
        <p className="text-center mt-2 text-text3 text-sm">You won’t be charged yet</p>
    </div>
);

const PriceBreakdown = ({ priceData, pricePerNight }) => (
    <div className="mt-4">
        <ul className="flex flex-col gap-1">
            <li className="flex justify-between text-text3">
                <span>{pricePerNight} x {priceData.numberOfNights} nights</span>
                <span>₹{priceData.basePrice}</span>
            </li>
            {priceData.discount > 0 && (
                <li className="flex justify-between text-text3">
                    <span>Discount</span>
                    <span>-₹{priceData.discount}</span>
                </li>
            )}
            <li className="flex justify-between text-text3">
                <span>Cleaning fee</span>
                <span>₹{priceData.cleaningFee}</span>
            </li>
            <li className="flex justify-between text-text3">
                <span>Service fee</span>
                <span>₹{priceData.serviceFee}</span>
            </li>
            <li className="mt-2 flex justify-between text-text1 font-medium">
                <span>Total before taxes</span>
                <span>₹{priceData.totalPrice}</span>
            </li>
        </ul>
    </div>
);

export default PricingDetails;
