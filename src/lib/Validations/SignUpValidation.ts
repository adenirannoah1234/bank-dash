import * as yup from 'yup' 
 
 export const userSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Email must be a valid email ').required('Email address is required'),
    userName: yup.string().required('User name is required'),
    address: yup.string().required('Adress is required'),
    presentAddress: yup.string().required('Present Address is required'),
    dateOfBirth: yup.string().required('Date of birth is required'),
    city: yup.string().required('City is required'),
    postalCode: yup.number().required('Postal Code is required'),
    country: yup.string().required('Country is required'),
    phoneNumber: yup.number().required('Phone number is required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Passwords must match')
  })
