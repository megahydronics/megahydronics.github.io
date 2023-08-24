/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0xuxt4pab89edaa")

  // remove
  collection.schema.removeField("jmerpkvf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o1it5teh",
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
}, (db) => {
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

  // remove
  collection.schema.removeField("o1it5teh")

  return dao.saveCollection(collection)
})
