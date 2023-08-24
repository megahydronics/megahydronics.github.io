/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pt6gjw6c1isfqr4")

  collection.name = "contacts"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pt6gjw6c1isfqr4")

  collection.name = "channels"

  return dao.saveCollection(collection)
})
