import * as Yup from 'yup';
import phones from '../Helper/PhoneRegx';

export const ReferralProgramsValidation = Yup.object().shape({
    name: Yup.string()
        .required('Please enter your name.')
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name can be at most 50 characters'),

    userCountry: Yup.string().required('Please select a country'),
    userContactNo: Yup.string().required('Please enter your phone number')
        .test(
            'valid-phone',
            'Invalid phone number',
            function (value) {
                const selectedCountryCode = this.parent.userCountry;
                if (phones.hasOwnProperty(selectedCountryCode)) {
                    const regex = phones[selectedCountryCode];
                    return regex.test(value);
                }

                return false; // Country code not found in mapping
            }
        ),


    email: Yup.string()
        .required('Please enter your email.')
        .email('Invalid email format'),

    companyName: Yup.string()
        .required('Please enter your company name.'),

    clientReferralName: Yup.string()
        .required('Please enter your client name.'),

    clientCountry: Yup.string().required('Please select a country'),
    clientContactNo: Yup.string().required('Please enter your phone number')
        .test(
            'valid-phone',
            'Invalid phone number',
            function (value) {
                const selectedCountryCode = this.parent.clientCountry;
                if (phones.hasOwnProperty(selectedCountryCode)) {
                    const regex = phones[selectedCountryCode];
                    return regex.test(value);
                }

                return false; // Country code not found in mapping
            }
        ),

    clientEmailId: Yup.string()
        .required('Please enter your client email.')
        .email('Invalid email format'),

    describeYouClient: Yup.string()
        .required('Please describe your client referral needs'),
    terms: Yup.bool()
        .required('Please accept the terms and conditions')
        .oneOf([true], 'Please accept the terms and conditions'),
});






