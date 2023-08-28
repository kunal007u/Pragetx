import { Field, Form, Formik } from 'formik';
import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import HireDevelopersFormValidation from '../../Validation/HireDevelopersFormValidation';

const HireDevelopersForm = () => {
    const [show, setShow] = useState();

    const handleSubmit = async (values, { resetForm }) => {
        const formData = new FormData();
        Object.keys(values).forEach(key => formData.append(key, values[key]))
        values.files.forEach(file => (formData.append('files', file)))

        formData.append('data', JSON.stringify(values.formData));

        // try {
        //     const response = await axios.post(`http://192.168.1.30:5004/api/web/hiring?subject=Business Analyst`, formData);

        // if (respoonse.status === 200) {
        //     resetForm();
        // toast.success('Your form has been submitted successfully');
        // }
        // } catch (error) {
        //     console.error(error);
        // }
    }
    const options = [
        { label: 'iOS Developers', value: 1 },
        { label: 'Android Developers', value: 2 },
        { label: 'Flutter Developers', value: 3 },
        { label: 'ReactJS Developers', value: 4 },
        { label: 'React Native Developers', value: 5 },
        { label: 'Angular Developers', value: 6 },
        { label: 'NodeJS Developers', value: 7 },
        { label: 'UI/UX Developers', value: 8 },
        { label: 'Others', value: 9 },
    ];


    const multiSelectedRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (multiSelectedRef.current && !multiSelectedRef.current.contains(event.target)) {
                setShow(false);
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === "Escape") {
                setShow(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [setShow]);






    return (
        <div>

            <div className="hire-form">
                <h4>Hire &amp; Curate Your Developers Team Today!</h4>

                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        phone: '',
                        description: '',
                        budget: '',
                        skill: [],

                    }}
                    onSubmit={handleSubmit}

                    validationSchema={HireDevelopersFormValidation}
                >
                    {({ isSubmitting, errors, values, touched, handleChange, handleBlur, setFieldValue }) => {

                        function handleSelect(options) {
                            const value = options.label;

                            if (values.skill.includes(value)) {
                                setFieldValue('skill', values.skill.filter(x => x !== value));
                            } else {
                                setFieldValue('skill', [...values.skill, value]);
                            }
                        }


                        return (
                            <Form name="applyJobFormSecond" id="applyJobFormSecond" method="post" encType="multipart/form-data" noValidate="novalidate">
                                <div className="form-row">
                                    <div className="col-lg-12 col-md-12 form-field">
                                        <label>First Name <span>*</span></label>
                                        <Field type="text" className="form-control" placeholder="First Name" name="name" id="name_2" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                                        {errors.name && touched.name && <label className="error" htmlFor="name_2">{errors.name}</label>}
                                    </div>
                                    <div className="col-lg-6 col-md-12 form-field">
                                        <label>Phone No <span>*</span></label>
                                        <Field type="text" className="form-control" placeholder="Phone No" name="phone" id="phone_2" value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                                        {errors.phone && touched.phone && <label className="error" htmlFor="phone_2">{errors.phone}</label>}
                                    </div>
                                    <div className="col-lg-6 col-md-12 form-field">
                                        <label>Email ID <span>*</span></label>
                                        <Field type="text" className="form-control" placeholder="Email ID" name="email" id="alternative_number_2" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                        {errors.email && touched.email && <label className="error" htmlFor="email_2">{errors.email}</label>}
                                    </div>
                                    <div className="col-lg-6 col-md-12 form-field select-field">
                                        <label>Other Skill Sets You Require <span>*</span></label>
                                        <div className="dropdown form-control " ref={multiSelectedRef} >
                                            <div className="multiselect btn-secondary dropdown-toggle" type="button" onClick={() => setShow(!show)} >
                                                <div className='selected-data'  >
                                                    {values.skill.length === 0
                                                        ? 'Nothing Selected'
                                                        : (
                                                            values.skill.map((option, index) => {
                                                                if (index > 0) {
                                                                    return `, ${option}`;
                                                                }
                                                                return option;
                                                            }))
                                                    }

                                                </div>

                                            </div>

                                            <ul className={` dropdown-menu ${show ? 'show' : ''} `} aria-labelledby="dropdownMenuButton1">
                                                {options.map((option) => {
                                                    return (

                                                        <li key={option.value} className={values.skill.includes(option.label) ? 'option selected' : 'option'} onClick={() => handleSelect(option)}>
                                                            <a className='dropdown-item'>{option.label}</a>
                                                        </li>

                                                    )
                                                })}
                                            </ul>

                                        </div>
                                        {errors.skill && touched.skill && <label className="error" htmlFor="skill">{errors.skill}</label>}

                                    </div>
                                    <div className="col-lg-6 col-md-12 approx-budget form-field select-field">
                                        <label>Your Approx Budget <span>*</span></label>
                                        <Field as="select" className="form-select" name="budget" aria-label="Default select example">

                                            <option value="" disabled >Your Approx Budget</option>

                                            <option value="<$500 (Month)">&lt;$500 (Month)</option>
                                            <option value="$500 - $1000 (Month)">$500 - $1000 (Month)</option>
                                            <option value="$1000 - $2000 (Month)">$1000 - $2000 (Month)</option>
                                            <option value="$2000 - $5000 (Month)">$2000 - $5000 (Month)</option>
                                            <option value=">$5000 (Month)">&gt;$5000 (Month)</option>
                                        </Field>
                                        {errors.budget && touched.budget && <label id="services-error" className="error" htmlFor="budget">{errors.budget}</label>}
                                    </div>
                                    <input type="hidden" name="applied_for" defaultValue="Hire UI-UX-Designers Developers" />
                                    <div className="col-lg-12 col-md-12 form-field">
                                        <label>A Brief Project Description <span>*</span></label>
                                        <Field as="textarea" className="form-control" name="description" placeholder="A Brief Project Description" id="description" rows={3} value={values.description} onChange={handleChange} onBlur={handleBlur} />
                                        {errors.description && touched.description && <label className="error" htmlFor="description">{errors.description}</label>}
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary" id="jobform_submit_new">Submit</button>
                                <div className="col-lg-12 col-md-12">
                                    <p><small><span>*</span>After filling this form, you’ll be getting a confirmation email, in which you’ll have to choose the Rate Card Type to download as per your requirements.</small></p>
                                </div>
                            </Form>

                        )
                    }
                    }
                </Formik>
                <div className="alert alert-success alert-dismissible success" style={{ display: 'none' }}>
                    <span id="success_new" />
                </div>
            </div>

        </div>
    )
}

export default HireDevelopersForm
