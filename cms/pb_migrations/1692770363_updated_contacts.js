/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pt6gjw6c1isfqr4")

  collection.indexes = []

  // remove
  collection.schema.removeField("w82rltg4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vyz0rj0u",
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
  const collection = dao.findCollectionByNameOrId("pt6gjw6c1isfqr4")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_8pfSCqd` ON `contacts` (`key`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w82rltg4",
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
  collection.schema.removeField("vyz0rj0u")

  return dao.saveCollection(collection)
})
