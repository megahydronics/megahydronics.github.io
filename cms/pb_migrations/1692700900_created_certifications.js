/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "o4515aicyscypl1",
    "created": "2023-08-22 10:41:40.306Z",
    "updated": "2023-08-22 10:41:40.306Z",
    "name": "certifications",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "k9efejkp",
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
        "id": "abp0mlu5",
        "name": "icon",
        "type": "file",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
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
  const collection = dao.findCollectionByNameOrId("o4515aicyscypl1");

  return dao.deleteCollection(collection);
})
