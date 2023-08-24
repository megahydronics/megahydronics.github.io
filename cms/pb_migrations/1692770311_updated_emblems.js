/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o4515aicyscypl1")

  collection.indexes = []

  // remove
  collection.schema.removeField("zxdard5r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y11ripdo",
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
  const collection = dao.findCollectionByNameOrId("o4515aicyscypl1")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_hJPZYLb` ON `emblems` (`key`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zxdard5r",
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
  collection.schema.removeField("y11ripdo")

  return dao.saveCollection(collection)
})
