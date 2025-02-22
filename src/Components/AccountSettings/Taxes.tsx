import { Form, FormikProvider, useFormik } from 'formik'
import Input from '../CommonField/Input';
import Select from '../CommonField/Select';

const Taxes = () => {
  const formik = useFormik({
    //+ 
    initialValues: {}, //+
    onSubmit: async (values) => {
      console.log(values)
    },
  });
  return (
    <>
      <div>
        <FormikProvider value={formik}>
          <Form onSubmit={formik.handleSubmit}>
            <div>
              <div>
                <label htmlFor="address" className='text-lg text-text1 inline-block font-medium mb-3'>Taxpayer information</label>
                <p className='mb-1 text-text3'>Country/region</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className='sm:col-span-2 grid sm:grid-cols-2 gap-3'>
                    <Select name='first_name' placeholder='Country/region' options={[]} />
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-4 mt-5'>
                <button className="btn1">Continue</button>
              </div>
            </div>
          </Form>
        </FormikProvider>
      </div >
      <hr className='border-border1 my-8' />
      <div>
        <FormikProvider value={formik}>
          <Form onSubmit={formik.handleSubmit}>
            <div>
              <div>
                <label htmlFor="address" className='text-lg text-text1 inline-block font-medium mb-3'>Value Added Tax (VAT)</label>
                <p className='mb-1 text-text3'>Country/region</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className='sm:col-span-2 grid sm:grid-cols-2 gap-3'>
                    <Select name='first_name' placeholder='Country/region' options={[]} />
                  </div>
                  <div className='sm:col-span-2'>
                    <Input name='first_name' placeholder='Add VAT ID Number' />
                  </div>
                  <div className='sm:col-span-2'>
                    <Input name='first_name' placeholder='Value Added Tax (VAT)' />
                  </div>
                  <Input name='first_name' placeholder='Address line 1' />
                  <Input name='first_name' placeholder='Address line 2 (Optional)' />
                  <Input name='first_name' placeholder='City' />
                  <Input name='first_name' placeholder='Province or region' />
                  <Input name='first_name' placeholder='Postcode' />
                </div>
              </div>
              <div className='flex items-center gap-4 mt-5'>
                <button className="btn2 cancel">Cancel</button>
                <button className="btn1">Add</button>
              </div>
            </div>
          </Form>
        </FormikProvider >
      </div>
    </>
  )
}

export default Taxes