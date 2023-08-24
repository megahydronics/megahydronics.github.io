/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "de6537i8zrw3xpk",
    "created": "2023-08-22 10:57:06.666Z",
    "updated": "2023-08-22 10:57:06.666Z",
    "name": "icons",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ueibznez",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ozxluacq",
        "name": "path",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("de6537i8zrw3xpk");

  return dao.deleteCollection(collection);
})
