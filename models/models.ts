import * as yup from "yup"
export const loginSchema = yup.object({
    email: yup.string().email("Email must be valid").required("Email is required"),
    password: yup.string().required("Password is required")
})

export const signupSchema = yup.object({
    name: yup.string().required("First name is required"),
    email: yup.string().email("Email must be valid").required("Email is required"),
    password: yup.string().required("Password is required").min(8, 'Password must be at least 8 characters long')
        .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
        .matches(/\d/, 'Password must contain at least one number')
        .matches(/[@$!%*?&#]/, 'Password must contain at least one special character')
        .required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match")
})