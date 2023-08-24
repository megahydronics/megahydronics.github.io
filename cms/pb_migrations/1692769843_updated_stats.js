/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tbr30dxqfgb62cb")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_n4vYyt5` ON `stats` (`key`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tbr30dxqfgb62cb")

  collection.indexes = []

  return dao.saveCollection(collection)
})
