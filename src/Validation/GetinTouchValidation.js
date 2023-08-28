import * as Yup from 'yup';

const GetinTouchValidation = Yup.object().shape({
    name: Yup.string()
        .required('Please enter your name.')
        .matches(/^[^0-9].*/, 'Name should not start with a number')
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name can be at most 50 characters')
        .matches(/^[A-Za-z\s'-]*$/, 'Please enter valid name')
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



    companyWebsite: Yup.string().url('Please enter valid URL').required('Please enter company website'),

    biggestChallenge: Yup.string().required('Please enter detail'),
    describeProject: Yup.string().required('Please describe project detail'),

    meetingDate: Yup.date()
        .required('Please select meeting date')
        .min(new Date(), 'Meeting date cannot be in the past'),
    meetingTime: Yup.string()
        .required('Please select meeting time'),

    budget: Yup.array().of(Yup.number().min(0, 'Minimum value is 0').max(500000, 'Maximum value is 500000')).required('Required'),
    files: Yup.array().of(Yup.mixed()
        .test('fileType', 'Invalid file format', (value) => {
            return value && ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type);
        })
        .test('fileSize', 'File size is too large', (value) => {
            return value && value.size <= 8 * 1024 * 1024;
        })
    )

});

export default GetinTouchValidation;
