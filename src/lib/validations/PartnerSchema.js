import * as Yup from  'yup'
export const onBoardingSchema = Yup.object().shape({
  businessName: Yup.string().required("Business name is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid Email address").required("Emailis required"),
  city: Yup.string().required("City is required"),
  mobileNumber: Yup.string()
    .required("Mobile number is required!")
    .matches(/^\+?[0-9]+$/, "Invalid mobile number format")
    .min(8, "Mobile number is too short")
    .max(15, "Mobile number is too long"),
  capVal: Yup.string().required("This field is required"),
});

export const AdditionalOnBoardingDataSchema = Yup.object().shape({
  staffCount: Yup.string().required("Staff count is required!"),
  partnerAddress: Yup.object().shape({
    addressLine1: Yup.string().required("Address line 1 is required!"),
    postalCode: Yup.string()
      .required("Postal code is required!")
      .matches(/^[A-Za-z0-9\s-]*$/, "Invalid characters in postal code")
      .min(5, "Postal code is too short")
      .max(10, "Postal code is too long"),
  }),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long!")
    .matches(/(?=.*[0-9])/, "Password must contain at least one number!")
    .matches(/(?=.*[A-Z])/, "Password must contain at least one uppercase letter!")
    .matches(/(?=.*[a-z])/, "Password must contain at least one lowercase letter!")
    .matches(/(?=.*[!@#$%^&*])/, "Password must contain at least one special character!")
    .required("Password is required"),
  capVal: Yup.string().required("This field is required"),
});