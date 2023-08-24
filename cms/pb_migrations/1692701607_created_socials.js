/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zs3qkbk8wo7au6o",
    "created": "2023-08-22 10:53:27.520Z",
    "updated": "2023-08-22 10:53:27.520Z",
    "name": "socials",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ypshmbhb",
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
        "id": "fydfsks4",
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
        "id": "zqdqlcwg",
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
  const collection = dao.findCollectionByNameOrId("zs3qkbk8wo7au6o");

  return dao.deleteCollection(collection);
})
