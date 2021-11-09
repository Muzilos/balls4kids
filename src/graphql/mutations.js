/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPOST = /* GraphQL */ `
  mutation CreatePOST(
    $input: CreatePOSTInput!
    $condition: ModelPOSTConditionInput
  ) {
    createPOST(input: $input, condition: $condition) {
      id
      title
      image
      description
      caption
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updatePOST = /* GraphQL */ `
  mutation UpdatePOST(
    $input: UpdatePOSTInput!
    $condition: ModelPOSTConditionInput
  ) {
    updatePOST(input: $input, condition: $condition) {
      id
      title
      image
      description
      caption
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deletePOST = /* GraphQL */ `
  mutation DeletePOST(
    $input: DeletePOSTInput!
    $condition: ModelPOSTConditionInput
  ) {
    deletePOST(input: $input, condition: $condition) {
      id
      title
      image
      description
      caption
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createAbout = /* GraphQL */ `
  mutation CreateAbout(
    $input: CreateAboutInput!
    $condition: ModelAboutConditionInput
  ) {
    createAbout(input: $input, condition: $condition) {
      id
      type
      text
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateAbout = /* GraphQL */ `
  mutation UpdateAbout(
    $input: UpdateAboutInput!
    $condition: ModelAboutConditionInput
  ) {
    updateAbout(input: $input, condition: $condition) {
      id
      type
      text
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteAbout = /* GraphQL */ `
  mutation DeleteAbout(
    $input: DeleteAboutInput!
    $condition: ModelAboutConditionInput
  ) {
    deleteAbout(input: $input, condition: $condition) {
      id
      type
      text
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
