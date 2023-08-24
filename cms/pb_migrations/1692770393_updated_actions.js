/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hogvmt5xhwswiy0")

  collection.indexes = []

  // remove
  collection.schema.removeField("hdue6uug")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7aj2gtmq",
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
  const collection = dao.findCollectionByNameOrId("hogvmt5xhwswiy0")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_0a7SRP9` ON `actions` (`key`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hdue6uug",
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
  collection.schema.removeField("7aj2gtmq")

  return dao.saveCollection(collection)
})
