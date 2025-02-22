
const ConfirmNumber = () => {
    return (
        <div>
            <div className="">
                <p className="text-text1 mb-3 font-medium">
                    Enter the code we've sent via SMS to +91 99899999
                </p>
                <form action="">
                    <div>
                        <label htmlFor="phone" className="text-text3">
                            Enter otp
                        </label>
                        <div className="mt-1">
                            <input
                                type="email"
                                id="phone"
                                className="py-2 px-2 rounded border-text3 w-full"
                                placeholder="- - - - - -"
                            />
                        </div>
                    </div>
                    <div className="mt-5">
                        <button className="btn1 w-full"> Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ConfirmNumber