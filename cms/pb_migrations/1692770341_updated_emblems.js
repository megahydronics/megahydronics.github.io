/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o4515aicyscypl1")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_Au5FpLO` ON `emblems` (`index`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o4515aicyscypl1")

  collection.indexes = []

  return dao.saveCollection(collection)
})
