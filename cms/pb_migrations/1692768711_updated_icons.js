/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("de6537i8zrw3xpk")

  collection.name = "icon"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_cmLyNo8` ON `icon` (`key`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("de6537i8zrw3xpk")

  collection.name = "icons"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_cmLyNo8` ON `icons` (`key`)"
  ]

  return dao.saveCollection(collection)
})
