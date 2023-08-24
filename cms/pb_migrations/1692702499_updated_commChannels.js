/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pt6gjw6c1isfqr4")

  // remove
  collection.schema.removeField("smctsoeb")

  // remove
  collection.schema.removeField("de9k8vxn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dxzfmvse",
    "name": "link",
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
  const collection = dao.findCollectionByNameOrId("pt6gjw6c1isfqr4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "smctsoeb",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "de9k8vxn",
    "name": "link",
    "type": "url",
    "required": true,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  // remove
  collection.schema.removeField("dxzfmvse")

  return dao.saveCollection(collection)
})
