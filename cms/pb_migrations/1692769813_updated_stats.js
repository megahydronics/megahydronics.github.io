/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tbr30dxqfgb62cb")

  collection.indexes = []

  // remove
  collection.schema.removeField("7km0dwiv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g0f5o6k9",
    "name": "key",
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
  const collection = dao.findCollectionByNameOrId("tbr30dxqfgb62cb")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_nWE1nXC` ON `stats` (`key`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7km0dwiv",
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
  collection.schema.removeField("g0f5o6k9")

  return dao.saveCollection(collection)
})
