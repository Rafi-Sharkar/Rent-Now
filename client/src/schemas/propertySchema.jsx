import * as yup from 'yup'

export const propertySchema = yup.object().shape({
    location: yup.string().min(8).max(50).required("Please enter your name"),
    farea: yup.number().required().positive().integer(),
    price: yup.number().required().positive().integer(),
    details: yup.string().min(20).max(75).required("Enter property details")
})