/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kzgs94hhwafmlgc")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_nEHgrVk` ON `pages` (`key`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kzgs94hhwafmlgc")

  collection.indexes = []

  return dao.saveCollection(collection)
})
