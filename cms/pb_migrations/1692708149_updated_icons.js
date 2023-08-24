/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("de6537i8zrw3xpk")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("de6537i8zrw3xpk")

  // remove
  collection.schema.removeField("oerhxngh")

  return dao.saveCollection(collection)
})
