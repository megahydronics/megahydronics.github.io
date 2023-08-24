/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bfeftbr2b8krmdi")

  collection.indexes = []

  // remove
  collection.schema.removeField("hlj3fp6b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9hzusfyq",
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
  const collection = dao.findCollectionByNameOrId("bfeftbr2b8krmdi")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_MPryso0` ON `projects` (`key`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hlj3fp6b",
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
  collection.schema.removeField("9hzusfyq")

  return dao.saveCollection(collection)
})
