/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pt6gjw6c1isfqr4")

  collection.name = "contacts"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_8pfSCqd` ON `contacts` (`key`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pt6gjw6c1isfqr4")

  collection.name = "contact"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_8pfSCqd` ON `contact` (`key`)"
  ]

  return dao.saveCollection(collection)
})
