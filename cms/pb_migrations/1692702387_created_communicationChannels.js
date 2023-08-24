/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "pt6gjw6c1isfqr4",
    "created": "2023-08-22 11:06:27.565Z",
    "updated": "2023-08-22 11:06:27.565Z",
    "name": "communicationChannels",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "lkyeaeyj",
        "name": "value",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "34wrn1bv",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pt6gjw6c1isfqr4");

  return dao.deleteCollection(collection);
})
