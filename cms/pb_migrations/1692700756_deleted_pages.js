/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("h4yyr2wq36biwku");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "h4yyr2wq36biwku",
    "created": "2023-08-22 10:22:50.442Z",
    "updated": "2023-08-22 10:22:50.442Z",
    "name": "pages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4deyfbp3",
        "name": "name",
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
})
