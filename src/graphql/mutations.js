/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addBidRequest = `mutation AddBidRequest($bidRequestInput: BidRequestInput!) {
  addBidRequest(bidRequestInput: $bidRequestInput) {
    id
    needs
    serviceCategoryName
    serviceSubCategoryName
    serviceSubCategoryServiceName
    vendorNames
  }
}
`;
export const addBidRequests = `mutation AddBidRequests($bidRequestsInput: BidRequestsInput!) {
  addBidRequests(bidRequestsInput: $bidRequestsInput) {
    code
  }
}
`;
export const addBuildingByEmailClaim = `mutation AddBuildingByEmailClaim($buildingInput: BuildingInput!) {
  addBuildingByEmailClaim(buildingInput: $buildingInput) {
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
export const addFixItNowRequest = `mutation AddFixItNowRequest($fixItNowRequestInput: FixItNowRequestInput!) {
  addFixItNowRequest(fixItNowRequestInput: $fixItNowRequestInput) {
    id
  }
}
`;
export const deleteBuildingByEmailClaim = `mutation DeleteBuildingByEmailClaim($id: ID!) {
  deleteBuildingByEmailClaim(id: $id) {
    code
  }
}
`;
export const updateBuildingByEmailClaim = `mutation UpdateBuildingByEmailClaim(
  $buildingUpdateInput: BuildingUpdateInput!
) {
  updateBuildingByEmailClaim(buildingUpdateInput: $buildingUpdateInput) {
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
export const updateBuildingMoveInStateByBuildingId = `mutation UpdateBuildingMoveInStateByBuildingId(
  $buildingMoveInStateInput: BuildingMoveInStateInput
) {
  updateBuildingMoveInStateByBuildingId(
    buildingMoveInStateInput: $buildingMoveInStateInput
  ) {
    id
  }
}
`;
export const updateCustomer = `mutation UpdateCustomer($customerInput: CustomerInput!) {
  updateCustomer(customerInput: $customerInput) {
    code
  }
}
`;
export const updateSelectedVendorForBid = `mutation UpdateSelectedVendorForBid(
  $selectBidVendorInput: SelectBidVendorInput!
) {
  updateSelectedVendorForBid(selectBidVendorInput: $selectBidVendorInput) {
    code
  }
}
`;
