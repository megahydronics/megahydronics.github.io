/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o4515aicyscypl1")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o4515aicyscypl1")

  // remove
  collection.schema.removeField("zxdard5r")

  return dao.saveCollection(collection)
})
