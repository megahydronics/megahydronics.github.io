/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c399snvy057byo4")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_ZvmtLSV` ON `tiles` (`index`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cboi26xd",
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
  const collection = dao.findCollectionByNameOrId("c399snvy057byo4")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_ZvmtLSV` ON `tiles` (`key`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cboi26xd",
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
})
