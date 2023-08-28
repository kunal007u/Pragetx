import * as Yup from 'yup';

const HireDevelopersFormValidation = Yup.object().shape({
    name: Yup.string()
        .required('Please enter your name.')
        .matches(/^[^0-9].*/, 'Name should not start with a number')
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name can be at most 50 characters')
        .matches(/^[A-Za-z\s'-]*$/, 'Name can only contain letters, spaces, apostrophes, and hyphens')
        .trim(),

    email: Yup.string()
        .required('Please enter your email')
        .email('Invalid email format')
        .max(100, 'Email can be at most 100 characters'),

    phone: Yup.string()
        .required('Please enter a phone number')
        .matches(/^[0-9]+$/, 'Phone number should only contain numbers')
        .min(10, 'Phone number must be at least 10 digits')
        .max(10, 'Phone number can be at most 10 digits'),

    description: Yup.string().required('Please describe project detail'),

    budget: Yup.string().required('Please select your budget'),

    skill: Yup.array().min(1, 'Please select a skill'),


});

export default HireDevelopersFormValidation;
