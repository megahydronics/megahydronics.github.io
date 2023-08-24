/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hogvmt5xhwswiy0")

  collection.name = "actions"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_0a7SRP9` ON `actions` (`key`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hogvmt5xhwswiy0")

  collection.name = "action"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_0a7SRP9` ON `action` (`key`)"
  ]

  return dao.saveCollection(collection)
})
