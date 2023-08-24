/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7iur6bqw27wvkhw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u66zbuzl",
    "name": "index",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7iur6bqw27wvkhw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u66zbuzl",
    "name": "index",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
