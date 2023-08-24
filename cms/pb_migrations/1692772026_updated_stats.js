/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tbr30dxqfgb62cb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g0f5o6k9",
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
  const collection = dao.findCollectionByNameOrId("tbr30dxqfgb62cb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g0f5o6k9",
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
