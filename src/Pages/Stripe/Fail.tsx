import error from "../../assets/images/error.png"
const Fail = () => {
  return (

    <div className="payment-fail mt-12">
      <div className="container mx-auto">
        <div>
          <img src={error} className="max-w-[300px] mx-auto" />
          <p className="text-center text-[#CE3B3B] font-semibold text-2xl mt-6">PAYMENT ERROR</p>
          <p className="text-text1 text-center mt-1">Try again! Payment in not complete</p>
        </div>
      </div>
    </div>
  )
}

export default Fail