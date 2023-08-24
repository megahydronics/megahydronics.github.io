/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kzgs94hhwafmlgc",
    "created": "2023-08-22 11:18:10.491Z",
    "updated": "2023-08-22 11:18:10.491Z",
    "name": "pages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "o6qlqrpp",
        "name": "title",
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
  const collection = dao.findCollectionByNameOrId("kzgs94hhwafmlgc");

  return dao.deleteCollection(collection);
})
