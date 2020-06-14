import { openDB } from 'idb'

import { DB_NAME, DB_VERSION, OBJECT_STORE, TRANSACTION_MODE } from '@/shared/constants/db.constant'

const createDatabase = () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade (db) {
      if (db.objectStoreNames.contains(OBJECT_STORE.team)) return

      const teamOs = db.createObjectStore(OBJECT_STORE.team, { keyPath: 'id' })
      teamOs.createIndex('name', 'name', { unique: false })
    }
  })
}

const saveTeam = async (team) => {
  const db = await createDatabase()

  const tx = db.transaction(OBJECT_STORE.team, TRANSACTION_MODE.ReadWrite)
  const store = tx.objectStore(OBJECT_STORE.team)

  return store.add(team)
}

const deleteTeam = async (id) => {
  const db = await createDatabase()

  const tx = db.transaction(OBJECT_STORE.team, TRANSACTION_MODE.ReadWrite)
  const store = tx.objectStore(OBJECT_STORE.team)

  return store.delete(id)
}

const getTeam = async (id) => {
  const db = await createDatabase()

  const tx = db.transaction(OBJECT_STORE.team, TRANSACTION_MODE.ReadOnly)
  const store = tx.objectStore(OBJECT_STORE.team)

  return store.get(id)
}

const getAllTeam = async () => {
  const db = await createDatabase()

  const tx = db.transaction(OBJECT_STORE.team, TRANSACTION_MODE.ReadOnly)
  const store = tx.objectStore(OBJECT_STORE.team)

  return store.getAll()
}

export { deleteTeam, getAllTeam, getTeam, saveTeam }
