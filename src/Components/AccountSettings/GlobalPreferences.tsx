import { Form, FormikProvider, useFormik } from 'formik';
import React from 'react'
import Select from '../CommonField/Select';

const GlobalPreferences = () => {
    const formik = useFormik({
        //+ 
        initialValues: {}, //+
        onSubmit: async (values) => {
            console.log(values)
        },
    });
    const language = [
        { label: 'English', value: 'En' },
        { label: 'Spanish', value: 'Es' },
        { label: 'French', value: 'Fr' },
        { label: 'German', value: 'De' },
        { label: 'Italian', value: 'It' },
        { label: 'Japanese', value: 'Ja' },
    ]
    const currency = [
        { label: 'USD', value: 'USD' },
        { label: 'EUR', value: 'EUR' },
        { label: 'GBP', value: 'GBP' },
        { label: 'JPY', value: 'JPY' },
        { label: 'CHF', value: 'CHF' },
    ]
    const time_zone = [
        { label: '(GMT) Greenwich Mean Time', value: 'GMT' },
        { label: '(GMT+01:00) Central European Time', value: 'GMT+01:00' },
        { label: '(GMT+02:00) Central European Summer Time', value: 'GMT+02:00' },
    ]
    return (
        <>
            <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit}>
                    <div className='flex flex-col gap-4'>
                        <h6 className='text-text1 font-medium mb-3 text-lg'>Global preferences</h6>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Select label='Preferred language' name='counrty' placeholder='Counrty' options={language} />
                            <Select label='Preferred currency' name='currency' placeholder='Currency' options={currency} />
                            <Select label='Time zone' name='time_zone' placeholder='Time zone' options={time_zone} />
                        </div>
                        <div className='flex items-center gap-4 mt-3'>
                            <button className="btn2 cancel">Cancel</button>
                            <button className="btn1">Save</button>
                        </div>
                    </div>
                </Form>
            </FormikProvider>
        </ >
    )
}

export default GlobalPreferences