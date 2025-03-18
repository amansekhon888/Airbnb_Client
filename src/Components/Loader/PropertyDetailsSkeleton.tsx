import Skeleton from 'react-loading-skeleton'

const PropertyDetailsSkeleton = () => {
    return (
        <div>
            <div>
                <Skeleton height={24} width={250} />
            </div>
            <div className="mt-4">
                <div className='grid lg:grid-cols-2 h-[350px] xl:h-[400px] gap-3 xl:gap-5'>
                    <div className="h-[350px] xl:h-[400px]">
                        <Skeleton className='w-full h-full' />
                    </div>
                    <div className="lg:grid grid-cols-2 gap-3 xl:gap-5 h-[350px] xl:h-[400px] hidden">
                        <Skeleton className='w-full h-full' />
                        <Skeleton className='w-full h-full' />
                        <Skeleton className='w-full h-full' />
                        <Skeleton className='w-full h-full' />
                    </div>
                </div>
                <div className='mt-6 flex flex-col gap-2'>
                    <Skeleton height={24} className='max-w-[500px]' />
                    <Skeleton height={24} className='max-w-[200px]' />
                    <Skeleton height={24} className='max-w-[200px]' />
                </div>
            </div>

        </div>
    )
}

export default PropertyDetailsSkeleton