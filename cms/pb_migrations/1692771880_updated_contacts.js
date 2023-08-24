/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pt6gjw6c1isfqr4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vyz0rj0u",
    "name": "index",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pt6gjw6c1isfqr4")

  // update
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
})
