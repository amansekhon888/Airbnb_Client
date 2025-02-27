import { Form, FormikProvider, useFormik } from 'formik';
import Input from '../CommonField/Input';

const LoginAndSecurity = () => {
  const formik = useFormik({
    //+ 
    initialValues: {}, //+
    onSubmit: async (values) => {
      console.log(values)
    },
  });
  return (
    <>
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit}>
          <div className='flex flex-col gap-7'>
            <div>
              <h6 className='text-lg text-text1 inline-block font-medium mb-3'>Password</h6>
              <div className='flex flex-col gap-4'>
                <div>
                  <label htmlFor="address" className='text-[15px] text-text3 inline-block mb-1'>Current Password</label>
                  <Input name='password' type='password' placeholder='Current password' />
                </div>
                <div>
                  <label htmlFor="address" className='text-[15px] text-text3 inline-block mb-1'>New Password</label>
                  <Input name='new_password' type='password' placeholder='New password' />
                </div>
                <div>
                  <label htmlFor="address" className='text-[15px] text-text3 inline-block mb-1'>Confirm Password</label>
                  <Input name='confirm_password' type='password' placeholder='Confirm password' />
                </div>
              </div>
            </div>
            <div>
              <h6 className='text-lg text-text1 inline-block font-medium mb-3'>Account</h6>
              <div>
                <p className='text-[15px] text-text3'>Deactivate your account</p>
                <button className='text-red-600 font-medium'>Deactivate</button>
              </div>
            </div>
          </div>
        </Form>
      </FormikProvider>

    </>
  )
}

export default LoginAndSecurity