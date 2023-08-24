/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bfeftbr2b8krmdi")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bfeftbr2b8krmdi")

  // remove
  collection.schema.removeField("hlj3fp6b")

  return dao.saveCollection(collection)
})
