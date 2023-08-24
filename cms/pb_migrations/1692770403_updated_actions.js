/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hogvmt5xhwswiy0")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_1gkJdzY` ON `actions` (`index`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hogvmt5xhwswiy0")

  collection.indexes = []

  return dao.saveCollection(collection)
})
