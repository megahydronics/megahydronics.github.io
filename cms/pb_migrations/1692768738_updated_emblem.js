/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o4515aicyscypl1")

  collection.name = "emblems"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_hJPZYLb` ON `emblems` (`key`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o4515aicyscypl1")

  collection.name = "emblem"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_hJPZYLb` ON `emblem` (`key`)"
  ]

  return dao.saveCollection(collection)
})
