import React from 'react'
import TextArea from '../CommonField/textarea';
import { Form, FormikProvider, useFormik } from 'formik';

const AdditionalInformation = () => {
    const formik = useFormik({
        //+ 
        initialValues: {}, //+
        onSubmit: async (values) => {
            console.log(values)
        },
    });
    return (
        <div>
            <h2 className='text-text1 text-2xl font-medium'>Additional Information</h2>
            <p className='text-text3 mt-1'>Any extra details to further customize the listing.</p>
            <div className='mt-6'>
                <FormikProvider value={formik}>
                    <Form onSubmit={formik.handleSubmit}>
                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                            <div className="col-span-2">
                                <label htmlFor="pet_policy" className="text-[15px] text-text1 inline-block font-medium">
                                    Pet Policy
                                </label>
                                <div className="flex items-center gap-8 mt-2">
                                    <div className='flex items-center gap-2'>
                                        <input type="radio" name="pet_policy" id="pet_policy_yes" className="" />
                                        <label htmlFor="pet_policy_yes" className="text-text1">Pets Allowed</label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <input type="radio" name="pet_policy" id="pet_policy_no" className="" />
                                        <label htmlFor="pet_policy_no" className="text-text1">No Pets</label>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-2'>
                                <TextArea name='notes_for_guests' placeholder='Ex. Key pickup available at the front desk. Contact me for late check-in.' label='Notes for Guests' rows={4} inputClass="resize-none" />
                            </div>
                            <div className='col-span-2'>
                                <TextArea name='nearby_attractions' placeholder='Ex. 5 minutes from Central Park, 10 minutes from Times Square.' label='Nearby Attractions' rows={4} inputClass="resize-none" />
                            </div>
                        </div>
                    </Form>
                </FormikProvider>
            </div>
        </div>
    )
}

export default AdditionalInformation