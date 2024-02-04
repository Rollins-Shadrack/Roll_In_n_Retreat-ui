import * as Yup from "yup";

export const UserAuthLoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address!").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const EmailValidationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address!")
    .required("Email is required!"),
});

export const UserAuthRegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email address!").required("Email is required"),
  mobileNumber: Yup.string()
    .required("Mobile number is required!")
    .matches(/^\+?[0-9]+$/, "Invalid mobile number format")
    .min(8, "Mobile number is too short")
    .max(15, "Mobile number is too long"),
});

export const UserConfirmation = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long!")
    .matches(/(?=.*[0-9])/, "Password must contain at least one number!")
    .matches(/(?=.*[A-Z])/, "Password must contain at least one uppercase letter!")
    .matches(/(?=.*[a-z])/, "Password must contain at least one lowercase letter!")
    .matches(/(?=.*[!@#$%^&*])/, 'Password must contain at least one special character!')
    .required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match!')
    .required('Confirm password is required')
});
