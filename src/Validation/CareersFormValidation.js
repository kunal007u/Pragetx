import * as Yup from 'yup';

export const CareersFormValidation = () => {

    return Yup.object().shape({
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
            .required('Please enter a contact number')
            .matches(/^[0-9]+$/, 'Phone number should only contain numbers')
            .min(10, 'Phone number must be at least 10 digits')
            .max(10, 'Phone number can be at most 10 digits'),

        alternative_number: Yup.string()
            .matches(/^[0-9]+$/, 'Phone number should only contain numbers')
            .min(10, 'Phone number must be at least 10 digits')
            .max(10, 'Phone number can be at most 10 digits'),

        portfolio_link: Yup.string()
            .url('Invalid URL'),

        coverLetter: Yup.string()
            .required('Please enter cover letter'),

        file: Yup.mixed()
            .test('fileSize', 'File size too large', value => {
                if (!value?.size) return true; // allows falsy values 
                return value.size <= 2000000; // 2 MB
            })
            .test('fileType', 'Unsupported file type', value => {
                if (!value?.type) return true; // allows falsy values
                return ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type);
            })

    })
}

