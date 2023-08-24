/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0xuxt4pab89edaa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jmerpkvf",
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
  const collection = dao.findCollectionByNameOrId("0xuxt4pab89edaa")

  // remove
  collection.schema.removeField("jmerpkvf")

  return dao.saveCollection(collection)
})
