/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7iur6bqw27wvkhw")

  collection.indexes = []

  // remove
  collection.schema.removeField("9kfheukm")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7iur6bqw27wvkhw")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_Id1Igay` ON `services` (`key`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9kfheukm",
    "name": "key",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("u66zbuzl")

  return dao.saveCollection(collection)
})
