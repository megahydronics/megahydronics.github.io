/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kzgs94hhwafmlgc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x5i9ny9g",
    "name": "subheading",
    "type": "text",
    "required": false,
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x5i9ny9g",
    "name": "subHeading",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
