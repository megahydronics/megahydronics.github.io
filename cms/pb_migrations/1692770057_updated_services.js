/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7iur6bqw27wvkhw")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_lJZp9bz` ON `services` (`index`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7iur6bqw27wvkhw")

  collection.indexes = []

  return dao.saveCollection(collection)
})
