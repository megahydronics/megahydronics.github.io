/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kzgs94hhwafmlgc")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kzgs94hhwafmlgc")

  // remove
  collection.schema.removeField("ljnaba4p")

  return dao.saveCollection(collection)
})
