import * as Yup from 'yup';

export const LetsTalkFormValidation = Yup.object().shape({
    name: Yup.string()
        .required('Please enter your name.')
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name can be at most 50 characters'),
    email: Yup.string()
        .required('Please enter your email.')
        .email('Invalid email format'),
    country: Yup.string()
        .required('Please select a country'),
    contactNumber: Yup.string()
        .required('Please enter a phone number')
        .matches(/^[0-9]+$/, 'Phone number should only contain numbers')
        .min(10, 'Phone number must be at least 10 digits')
        .max(10, 'Phone number can be at most 10 digits'),

    companyName: Yup.string(),
    companyWebsite: Yup.string().url('Invalid URL'),
    services: Yup.string().required('Please select a service'),
    projectRequirement: Yup.string().required('Please enter a project requirement').min(10, 'Project requirement must be at least 10 characters').max(500, 'Project requirement can be at most 500 characters'),

    files: Yup.array().of(Yup.mixed()
        .test('fileType', 'Invalid file format', (value) => {
            return value && ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type);
        })
        .test('fileSize', 'File size is too large', (value) => {
            return value && value.size <= 8 * 1024 * 1024;
        })
    ).min(1, 'At least one file is required'),

});