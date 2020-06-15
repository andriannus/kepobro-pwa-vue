const MATCH_STATUS = {
  Finished: 'FINISHED',
  Scheduled: 'SCHEDULED'
}

const MUTATION = {
  SetIsOffline: 'SetIsOffline'
}

const TRANSACTION_MODE = {
  ReadOnly: 'readonly',
  ReadWrite: 'readwrite',
  VersionChange: 'versionchange'
}

export { MATCH_STATUS, MUTATION, TRANSACTION_MODE }
