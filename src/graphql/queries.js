/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAcceptedVendorsByBuildingId = `query GetAcceptedVendorsByBuildingId($id: ID!) {
  getAcceptedVendorsByBuildingId(id: $id) {
    id
    logoFileName
    name
    serviceCategoryId
    serviceCategoryName
  }
}
`;
export const getBidRequestDetailByBidRequestId = `query GetBidRequestDetailByBidRequestId($id: ID!) {
  getBidRequestDetailByBidRequestId(id: $id) {
    buildingId
    needs
    requestId
    requestImages
    serviceCategoryId
    serviceCategoryName
    serviceSubCategoryId
    serviceSubCategoryName
    serviceSubCategoryServiceId
    serviceSubCategoryServiceName
    urgency
    vendorInfo {
      bidInfo {
        cost
        fileUrl
        summary
      }
      id
      isAccepted
      isFixItNow
      isSelected
      logoFileName
      name
      phoneNumber
    }
  }
}
`;
export const getBidRequestsByBuildingId = `query GetBidRequestsByBuildingId($id: ID!) {
  getBidRequestsByBuildingId(id: $id) {
    building {
      buildingId
      country
      extendedAddress
      fileName
      id
      isPrologisBuilding
      lat
      lng
      locality
      postalCode
      region
      step
      streetAddress
    }
    id
    serviceCategoryName
    status
    submittedOn
    vendorId
    vendorLogo
    vendorName
  }
}
`;
export const getBidRequestsByUserClaim = `query GetBidRequestsByUserClaim {
  getBidRequestsByUserClaim {
    building {
      buildingId
      country
      extendedAddress
      fileName
      id
      isPrologisBuilding
      lat
      lng
      locality
      postalCode
      region
      step
      streetAddress
    }
    id
    serviceCategoryName
    status
    submittedOn
    vendorId
    vendorLogo
    vendorName
  }
}
`;
export const getBuildingByEmailClaim = `query GetBuildingByEmailClaim($id: ID!) {
  getBuildingByEmailClaim(id: $id) {
    buildingId
    country
    extendedAddress
    fileName
    id
    isPrologisBuilding
    lat
    lng
    locality
    postalCode
    region
    step
    streetAddress
  }
}
`;
export const getBuildingsByEmailClaim = `query GetBuildingsByEmailClaim {
  getBuildingsByEmailClaim {
    buildingId
    country
    extendedAddress
    fileName
    id
    isPrologisBuilding
    lat
    lng
    locality
    postalCode
    region
    step
    streetAddress
  }
}
`;
export const getCustomer = `query GetCustomer($id: ID!) {
  getCustomer(id: $id) {
    billingAddresses {
      addressAlias
      addressEmail
      country
      extendedAddress
      locality
      postalCode
      region
      streetAddress
    }
    company
    createdDateTime
    customerId
    customerName
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
    shippingAddresses {
      addressAlias
      addressEmail
      country
      extendedAddress
      locality
      postalCode
      region
      streetAddress
    }
    timeZonePreference
  }
}
`;
export const getPrologisContactsByBuildingId = `query GetPrologisContactsByBuildingId($id: ID!) {
  getPrologisContactsByBuildingId(id: $id) {
    email
    name
    phone
    title
  }
}
`;
export const getSecretManagerMelissaKey = `query GetSecretManagerMelissaKey {
  getSecretManagerMelissaKey {
    ARN
    CreatedDate
    Name
    SecretString
    VersionId
    VersionStages
  }
}
`;
export const getTermsOfUse = `query GetTermsOfUse {
  getTermsOfUse {
    termsOfUse
  }
}
`;
export const getUtilitiesByPostalCode = `query GetUtilitiesByPostalCode($country: String!, $postalCode: String!) {
  getUtilitiesByPostalCode(country: $country, postalCode: $postalCode) {
    category
    country
    locality
    name
    phone
    region
  }
}
`;
export const getVendorDetailsByVendorId = `query GetVendorDetailsByVendorId($id: ID!) {
  getVendorDetailsByVendorId(id: $id) {
    adminEmail
    businessHours {
      day
      endTime
      startTime
    }
    contactEmail
    id
    logo {
      content
      fileName
      fileSize
      fileType
    }
    phoneNumber
    premium
    primaryName
    termsAndConditions {
      content
      fileName
      fileSize
      fileType
    }
    timeZone
  }
}
`;
