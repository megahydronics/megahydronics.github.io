/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("de6537i8zrw3xpk")

  collection.indexes = []

  // remove
  collection.schema.removeField("oerhxngh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uuycj4zb",
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
  const collection = dao.findCollectionByNameOrId("de6537i8zrw3xpk")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_cmLyNo8` ON `icons` (`key`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oerhxngh",
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
  collection.schema.removeField("uuycj4zb")

  return dao.saveCollection(collection)
})
