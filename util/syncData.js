import Pocketbase from '../src/lib/pocketbase.es.mjs'
import http from 'http'
import fs from 'fs'

const address = 'http://192.168.1.116:12'
const pb = new Pocketbase(address)
syncDefaultData()

async function syncDefaultData() {
    await pb.admins.authWithPassword('admin@megahydronics.com', 'Admin#Mega')
    const collections = await pb.collections.getFullList()

    let data = {}
    for (const collection of collections) {
        let expandKeys = []
        for (const schema of collection.schema) if (schema.type == 'relation') expandKeys.push(schema.name)
        data[collection.name] = await recordsByIndex(collection.name, expandKeys)
    }
    writeToFile('./src/lib/data.js', `export const default_ = ${JSON.stringify(data)}`)
}

function recordsByIndex(name, expandKeys) {
    let options = { sort: 'index' }
    if (expandKeys) options.expand = expandKeys.join(',')
    const records = pb
        .collection(name)
        .getFullList(options)
        .then(rs => rs.map(normalizeRecord))
    return records
}

function normalizeRecord(record) {
    const normalized = {}
    Object.entries(record).forEach(([key, value]) => {
        if (isDefault(key)) return
        if (isId(value)) normalized[key] = record.expand[key].index
        else if (isFileName(value)) normalized[key] = filePath(record, key)
        else normalized[key] = value
    })
    return normalized
}

function filePath(record, key) {
    const extension = record[key].split('.').pop()
    const url = `${address}/api/files/${record.collectionName}/${record.id}/${record[key]}`
    const path = `images/${record.collectionName}-${record.index}-${key}.${extension}`
    downloadFile(`./static/${path}`, url)
    return path
}

function downloadFile(path, url) {
    const file = fs.createWriteStream(path)
    http.get(url, function (response) {
        response.pipe(file)
        file.on('finish', file.close)
    })
}

function writeToFile(path, data) {
    const file = fs.createWriteStream(path)
    file.write(data)
}

function isId(value) {
    return typeof value == 'string' && value.length == 15 && value.match(/^[0-9a-z]+$/)
}

function isFileName(value) {
    return typeof value == 'string' && (value.endsWith('.jpg') || value.endsWith('.png'))
}

function isDefault(key) {
    return ['id', 'index', 'collectionId', 'collectionName', 'created', 'updated', 'expand'].includes(key)
}
