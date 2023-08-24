/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c399snvy057byo4")

  collection.name = "tiles"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c399snvy057byo4")

  collection.name = "homePageTiles"

  return dao.saveCollection(collection)
})
