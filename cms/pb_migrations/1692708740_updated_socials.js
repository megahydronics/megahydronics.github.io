/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zs3qkbk8wo7au6o")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_IL2QwPF` ON `socials` (`key`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zs3qkbk8wo7au6o")

  collection.indexes = []

  return dao.saveCollection(collection)
})
