/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zs3qkbk8wo7au6o")

  collection.indexes = []

  // remove
  collection.schema.removeField("nrsayre4")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zs3qkbk8wo7au6o")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_IL2QwPF` ON `socials` (`key`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nrsayre4",
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
  collection.schema.removeField("lxowlosw")

  return dao.saveCollection(collection)
})
