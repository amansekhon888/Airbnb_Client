import { Form, FormikProvider, useFormik } from 'formik'
import Input from '../CommonField/Input';
import visa from "../../assets/icons/visa.png"
import paypal from "../../assets/icons/paypal.png"
import mastercard from "../../assets/icons/mastercard.png"
import { MoreHorizOutlined } from '@mui/icons-material';

const PaymentsAndPayouts = () => {
  const formik = useFormik({
    //+ 
    initialValues: {}, //+
    onSubmit: async (values) => {
      // console.log(values)
    },
  });
  return (
    <>
      <div>
        <FormikProvider value={formik}>
          <Form onSubmit={formik.handleSubmit}>
            <div>
              <div>
                <label htmlFor="address" className='text-lg text-text1 inline-block font-medium mb-3'>Payment methods</label>
                <p className='mb-1 text-text3'>Card number</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className='sm:col-span-2 grid sm:grid-cols-2 gap-3'>
                    <Input name='first_name' placeholder='Card number' />
                  </div>
                  <Input name='first_name' placeholder='Expiration' />
                  <Input name='first_name' placeholder='CVV' />
                  <Input name='first_name' placeholder='Postcode' />
                </div>
              </div>
              <div className='flex items-center gap-4 mt-5'>
                <button className="btn2 cancel">Cancel</button>
                <button className="btn1">Done</button>
              </div>
            </div>
          </Form>
        </FormikProvider >
      </div>
      <div className='my-8 border-y border-border1 py-4'>
        <ul className='flex flex-col gap-4'>
          <li className='flex items-center justify-between border-b last:border-b-0 pb-4 last:pb-0'>
            <div className='flex items-start gap-3'>
              <img src={mastercard} alt="" className='w-9 min-w-9 mt-1.5' />
              <div>
                <p className='font-medium'>VISA *****6001</p>
                <p className='text-sm text-text3'>Expiration: 04/2026</p>
              </div>
            </div>
            <div className='relative group'>
              <button><MoreHorizOutlined className='!text-3xl' /></button>
              <div className='absolute top-full right-0 w-max pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50'>
                <ul className='bg-white shadow-lg rounded-md py-2 min-w-[130px] border'>
                  <li className='py-2 text-sm hover:bg-gray-100 px-3 duration-300 cursor-pointer font-medium text-text1'>Set Default </li>
                  <li className='px-3 '><hr /></li>
                  <li className='py-2 text-sm hover:bg-gray-100 px-3 duration-300 cursor-pointer font-medium text-text1'>Remove</li>
                </ul>
              </div>
            </div>
          </li>
          <li className='flex items-center justify-between border-b last:border-b-0 pb-3 last:pb-0'>
            <div className='flex items-start gap-3'>
              <img src={visa} alt="" className='w-9 min-w-9 mt-1.5' />
              <div>
                <p className='font-medium'>VISA *****6001</p>
                <p className='text-sm text-text3'>Expiration: 04/2026</p>
              </div>
            </div>
            <div className='relative group'>
              <button><MoreHorizOutlined className='!text-3xl' /></button>
              <div className='absolute top-full right-0 w-max pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50'>
                <ul className='bg-white shadow-lg rounded-md py-2 min-w-[130px] border'>
                  <li className='py-2 text-sm hover:bg-gray-100 px-3 duration-300 cursor-pointer font-medium text-text1'>Set Default </li>
                  <li className='px-3 '><hr /></li>
                  <li className='py-2 text-sm hover:bg-gray-100 px-3 duration-300 cursor-pointer font-medium text-text1'>Remove</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <FormikProvider value={formik}>
          <Form onSubmit={formik.handleSubmit}>
            <div>
              <div>
                <label htmlFor="address" className='text-lg text-text1 inline-block font-medium mb-3'>Coupons</label>
                <div className='mb-1 flex items-center justify-between'>
                  <p className='text-text3'>Your coupons</p>
                  <span className='text-text1'>0</span>
                </div>
                <div className="">
                  <Input name='first_name' placeholder='Enter a coupon code' />
                </div>
              </div>
              <div className='flex items-center gap-4 mt-5'>
                <button className="btn2 cancel">Cancel</button>
                <button className="btn1">Redeem coupon</button>
              </div>
            </div>
          </Form>
        </FormikProvider >
      </div>
    </>
  )
}

export default PaymentsAndPayouts