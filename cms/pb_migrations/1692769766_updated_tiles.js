/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c399snvy057byo4")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_ZvmtLSV` ON `tiles` (`key`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c399snvy057byo4")

  collection.indexes = []

  return dao.saveCollection(collection)
})
