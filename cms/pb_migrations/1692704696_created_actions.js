/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hogvmt5xhwswiy0",
    "created": "2023-08-22 11:44:56.333Z",
    "updated": "2023-08-22 11:44:56.333Z",
    "name": "actions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jvywab92",
        "name": "title",
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
      },
      {
        "system": false,
        "id": "0iuuxkgn",
        "name": "primary",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("hogvmt5xhwswiy0");

  return dao.deleteCollection(collection);
})
