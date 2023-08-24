/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zs3qkbk8wo7au6o")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_svOdEpi` ON `socials` (`index`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lxowlosw",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zs3qkbk8wo7au6o")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_svOdEpi` ON `socials` (`key`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lxowlosw",
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
})
