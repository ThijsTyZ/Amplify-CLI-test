/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomer = `query GetCustomer($id: ID!) {
  getCustomer(id: $id) {
    email
    firstName
    isActive
    isAgreedTermsOfUse
    isVerifiedCustomer
    lastLogin
    lastName
    localeCodePreference
    modifiedDateTime
    phoneNumber
    preferredContactMethod
  }
}
`;
