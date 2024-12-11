import * as yup from 'yup'



export const logInSchema = yup.object().shape({
    name: yup.string().min(4).max(25).required("Please enter your name"),
    usertype: yup.string().required("User Type can be Renter/Owner/Admin"),
    email: yup.string().email().required("Please enter your email"),
    phone: yup.string().required("Enter your phone number"),
    perloc: yup.string(),
    pass: yup.string().min(6).required("Please enter your password"),
    cpass: yup.string().required("Please enter confirm password").oneOf([yup.ref('pass'),null], "Password must match"),

})
