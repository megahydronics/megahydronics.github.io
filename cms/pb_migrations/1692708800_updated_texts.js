/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0xuxt4pab89edaa")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_NRWEcNN` ON `texts` (`key`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0xuxt4pab89edaa")

  collection.indexes = []

  return dao.saveCollection(collection)
})
