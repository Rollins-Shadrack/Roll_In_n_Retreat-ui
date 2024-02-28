import * as Yup from 'yup';

export const staffProfileSchema = Yup.object().shape({
  
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email address!").required("Email is required"),
  mobileNumber: Yup.string()
    .required("Mobile number is required!")
    .matches(/^\+?[0-9]+$/, "Invalid mobile number format")
    .min(8, "Mobile number is too short")
    .max(15, "Mobile number is too long"),
  staffAddress: Yup.object().shape({
    addressLine1: Yup.string().required("Address is required"),
    addressLine2: Yup.string().required("Address is required"),
    addressLine3: Yup.string().optional(),
    postalCode: Yup.string().required("Postal code is required"),
    townCity: Yup.string().required("Town/City is required"),
  }),
 
  emergency: Yup.object().shape({
    contactName: Yup.string().required("Contact Name is required"),
    contactMobileNumber: Yup.string()
      .required("Mobile number is required!")
      .matches(/^\+?[0-9]+$/, "Invalid mobile number format")
      .min(8, "Mobile number is too short")
      .max(15, "Mobile number is too long"),
  }),
});
// socialLinks: Yup.array().of(Yup.string()),
// bio: Yup.string().optional(),
//  jobtitle: Yup.string().required("Job Title is required"),

export const UserProfileSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  mobile: Yup.string()
    .required("Mobile Number is required")
    .matches(/^(07\d{8,12}|447\d{7,11})$/, "Mobile number must start with 07 or 447 and be between 8-12 digits long!"),
  gender: Yup.string().required("Gender is required"),
  dob: Yup.string().required("Date of birth is required"),
  homeAddress: Yup.object().shape({
    addressLine1: Yup.string().required("Address is required"),
    addressLine2: Yup.string().required("Address is required"),
    addressLine3: Yup.string().optional(),
    postalCode: Yup.string().required("Postal code is required"),
    townCity: Yup.string().required("Town/City is required"),
  }),
});

export const paymentCardSchema = Yup.object().shape({
  cardName: Yup.string().required("Card Name is required"),
  cardNumber: Yup.string().required("Card Number is required"),
  expiryDate: Yup.string().required("Expiry Date is required"),
  cvv: Yup.string().required("cvv is required"),
  billingAddress: Yup.object().shape({
    addressLine1: Yup.string().required("Address is required"),
    addressLine2: Yup.string().required("Address is required"),
    addressLine3: Yup.string().optional(),
    postalCode: Yup.string().required("Postal code is required"),
    townCity: Yup.string().required("Town/City is required"),
  }),
});
export const PreferencesSchema = Yup.object().shape({
  bookingEmail: Yup.boolean().default(false).optional(),
  bookingSms: Yup.boolean().default(false).optional(),
  bookingInApp: Yup.boolean().default(false).optional(),
  marketingEmail: Yup.boolean().default(false).optional(),
  marketingSms: Yup.boolean().default(false).optional(),
  marketingInApp: Yup.boolean().default(false).optional(),
  purchaseEmail: Yup.boolean().default(false).optional(),
  purchaseSms: Yup.boolean().default(false).optional(),
  purchaseInApp: Yup.boolean().default(false).optional(),
});