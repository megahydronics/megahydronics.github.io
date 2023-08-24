/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kzgs94hhwafmlgc")

  collection.indexes = []

  // remove
  collection.schema.removeField("ljnaba4p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "txwxl00e",
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
  const collection = dao.findCollectionByNameOrId("kzgs94hhwafmlgc")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_nEHgrVk` ON `pages` (`key`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ljnaba4p",
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
  collection.schema.removeField("txwxl00e")

  return dao.saveCollection(collection)
})
