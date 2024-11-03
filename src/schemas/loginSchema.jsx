import * as yup from 'yup'

export const logInSchema = yup.object({
    name: yup.string().min(2).max(25).required("Please enter your name"),
    email: yup.string().email().required("Please enter your email"),
    pass: yup.string().min(6).required("Please enter your password"),
    cpass: yup.string().required("Please enter confirm password").oneOf([yup.ref('pass'),null], "Password must match"),

})
