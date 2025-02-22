import { Form, FormikProvider, useFormik } from 'formik'
import Input from '../CommonField/Input';

const PersonalInfo = () => {
    const formik = useFormik({
        //+ 
        initialValues: {}, //+
        onSubmit: async (values) => {
            // console.log(values)
        },
    });
    return (
        <>
            <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit}>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <h6 className='text-text1 font-medium mb-3'>Legal name</h6>
                            <label htmlFor="name" className='text-[15px] text-text1 mb-1 inline-block'>First name on ID</label>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <Input name='first_name' placeholder='First Name' />
                                <Input name='last_name' placeholder='Last name' />
                            </div>
                        </div>
                        <div className='grid sm:grid-cols-2 gap-4'>
                            <Input name='email' placeholder='Enter Email address' label='Email address' />
                            <Input name='number' placeholder='Enter Phone Number' label='Phone Number' />
                        </div>
                        <div>
                            <label htmlFor="address" className='text-[15px] text-text1 inline-block font-medium mb-3'>Address</label>
                            <div className="grid sm:grid-cols-2 gap-2">
                                <Input name='first_name' placeholder='Country' />
                                <div className='sm:col-span-2'>
                                    <Input name='first_name' placeholder='Street address' />
                                </div>
                                <div className='sm:col-span-2'>
                                    <Input name='first_name' placeholder='Flat, suite. (Optional)' />
                                </div>
                                <Input name='first_name' placeholder='City' />
                                <Input name='first_name' placeholder='State / Country / Region' />
                                <Input name='first_name' placeholder='Postcode' />
                            </div>
                        </div>
                        <div className='flex items-center gap-4 mt-3'>
                            <button className="btn2 cancel">Cancel</button>
                            <button className="btn1">Save</button>
                        </div>
                    </div>
                </Form>
            </FormikProvider>
        </>
    )
}

export default PersonalInfo