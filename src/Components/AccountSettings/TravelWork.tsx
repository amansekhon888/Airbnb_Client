
const TravelWork = () => {
    return (
        <div className="max-w-[500px]">
            <div>
                <label className="text-[15px] text-text1 mb-3 inline-block font-medium">Travel for work</label>
                <input type="email" name="" id="" className="focus:ring-0 focus:border-primary py-2 text-text1 placeholder:text-text3 border-border1 w-full rounded-md" placeholder="Work email address" />
            </div>
            <div className='flex items-center gap-4 mt-3'>
                <button className="btn1 disabled" disabled>Save</button>
            </div>
        </div>
    )
}

export default TravelWork