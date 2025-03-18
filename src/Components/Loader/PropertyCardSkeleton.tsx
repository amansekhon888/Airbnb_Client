import Skeleton from "react-loading-skeleton";

const PropertyCardSkeleton = () => {
    return (
        <div className="animate-pulse">
            <div className="rounded-[20px] overflow-hidden h-[230px] relative">
                <Skeleton height={230} className="w-full" />
            </div>
            <div className="pt-1">
                <Skeleton height={24} className="w-full" />
                <div className="flex items-center gap-2 mt-1">
                    <Skeleton width={80} height={24} />
                    <Skeleton width={80} height={24} />
                </div>
                <Skeleton width={80} height={24} className="mt-2" />
            </div>
        </div >
    );
};

export default PropertyCardSkeleton;
