/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hogvmt5xhwswiy0")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aue3xuil",
    "name": "destination",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "kzgs94hhwafmlgc",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hogvmt5xhwswiy0")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aue3xuil",
    "name": "page",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "kzgs94hhwafmlgc",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
