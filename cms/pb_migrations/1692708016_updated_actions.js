/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hogvmt5xhwswiy0")

  // remove
  collection.schema.removeField("0iuuxkgn")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hogvmt5xhwswiy0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0iuuxkgn",
    "name": "primary",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
