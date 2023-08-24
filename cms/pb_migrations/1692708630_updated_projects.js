/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bfeftbr2b8krmdi")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_MPryso0` ON `projects` (`key`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bfeftbr2b8krmdi")

  collection.indexes = []

  return dao.saveCollection(collection)
})
