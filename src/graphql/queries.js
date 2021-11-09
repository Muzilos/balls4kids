/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPOST = /* GraphQL */ `
  query GetPOST($id: ID!) {
    getPOST(id: $id) {
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
export const listPOSTs = /* GraphQL */ `
  query ListPOSTs(
    $filter: ModelPOSTFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPOSTs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPOSTS = /* GraphQL */ `
  query SyncPOSTS(
    $filter: ModelPOSTFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPOSTS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getAbout = /* GraphQL */ `
  query GetAbout($id: ID!) {
    getAbout(id: $id) {
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
export const listAbouts = /* GraphQL */ `
  query ListAbouts(
    $filter: ModelAboutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAbouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        text
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAbouts = /* GraphQL */ `
  query SyncAbouts(
    $filter: ModelAboutFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAbouts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        text
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
