import Pocketbase from './pocketbase.es.mjs'

const address = 'http://216.180.72.120:12'
const pb = new Pocketbase(address)

export async function loadData() {
    return {
        actions: await recordsByIndex('actions', 'page'),
        contacts: await recordsByIndex('contacts', 'icon'),
        emblems: await recordsByIndex('emblems'),
        icons: await recordsByIndex('icons'),
        pages: await recordsByIndex('pages'),
        projects: await recordsByIndex('projects'),
        services: await recordsByIndex('services'),
        socials: await recordsByIndex('socials', 'icon'),
        stats: await recordsByIndex('stats'),
        texts: await recordsByIndex('texts'),
        tiles: await recordsByIndex('tiles')
    }
}

function recordsByIndex(name, expansion) {
    let options = { sort: 'index' }
    if (expansion) options.expand = expansion
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
        else if (isFileName(value)) normalized[key] = fileLink(record, key)
        else normalized[key] = value
    })
    return normalized
}

function fileLink(record, key) {
    return `${address}/api/files/${record.collectionName}/${record.id}/${record[key]}`
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
