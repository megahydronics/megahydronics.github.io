/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zs3qkbk8wo7au6o")

  // remove
  collection.schema.removeField("zqdqlcwg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j6qsu9xt",
    "name": "icon",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "de6537i8zrw3xpk",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zs3qkbk8wo7au6o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zqdqlcwg",
    "name": "icon",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // remove
  collection.schema.removeField("j6qsu9xt")

  return dao.saveCollection(collection)
})
