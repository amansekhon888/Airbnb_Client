
const ForgotPassword = () => {
    return (
        <div>
            <div className="">
                <p className="text-text1 mb-3">
                    Enter the email address associated with your account, and we’ll email you a link to reset your password.
                </p>
                <form action="">
                    <div>
                        <label htmlFor="phone" className="text-text3">
                            Email
                        </label>
                        <div className="mt-1">
                            <input
                                type="email"
                                id="phone"
                                className="py-2 px-2 rounded border-text3 w-full"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="mt-5">
                        <button className="btn1 w-full"> Send reset link</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword