/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0xuxt4pab89edaa")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_NRWEcNN` ON `texts` (`index`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o1it5teh",
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
  const collection = dao.findCollectionByNameOrId("0xuxt4pab89edaa")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_NRWEcNN` ON `texts` (`key`)"
  ]

  // update
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
})
