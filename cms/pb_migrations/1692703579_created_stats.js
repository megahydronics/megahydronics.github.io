/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "tbr30dxqfgb62cb",
    "created": "2023-08-22 11:26:19.039Z",
    "updated": "2023-08-22 11:26:19.039Z",
    "name": "stats",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "oquiwmsi",
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
        "id": "qfmvqoxu",
        "name": "description",
        "type": "text",
        "required": true,
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
  const collection = dao.findCollectionByNameOrId("tbr30dxqfgb62cb");

  return dao.deleteCollection(collection);
})
