import { writable } from 'svelte/store'
import { serverAddress } from './config'
import Pocketbase from './pocketbase.es.mjs'

export const pageIndex = writable()
export const showLabels = writable()

const pb = new Pocketbase(serverAddress)
export const actions = await recordsByIndex('actions', 'page')
export const contacts = await recordsByIndex('contacts', 'icon')
export const emblems = await recordsByIndex('emblems')
export const icons = await recordsByIndex('icons')
export const pages = await recordsByIndex('pages')
export const projects = await recordsByIndex('projects')
export const services = await recordsByIndex('services')
export const socials = await recordsByIndex('socials', 'icon')
export const stats = await recordsByIndex('stats')
export const texts = await recordsByIndex('texts')
export const tiles = await recordsByIndex('tiles')

async function recordsByIndex(name, expansion) {
    let options = { sort: 'index' }
    if (expansion) options.expand = expansion
    const records = await pb.collection(name).getFullList(options)
    return records.map(normalizeRecord)
}

export function normalizeRecord(record) {
    const normalized = {}
    Object.entries(record).forEach(([key, value]) => {
        if (isDefault(key)) return
        if (isId(value)) normalized[key] = record.expand[key].index
        else if (isFileName(value)) normalized[key] = fileLink(record, key)
        else normalized[key] = value
    })
    return normalized
}

export function fileLink(record, key) {
    return `${serverAddress}/api/files/${record.collectionId}/${record.id}/${record[key]}`
}

export function isId(value) {
    return typeof value == 'string' && value.length == 15 && value.match(/^[0-9a-z]+$/)
}

export function isFileName(value) {
    return typeof value == 'string' && (value.endsWith('.jpg') || value.endsWith('.png'))
}

export function isDefault(key) {
    return ['id', 'index', 'collectionId', 'collectionName', 'created', 'updated', 'expand'].includes(key)
}

export function pageIndexSetter(index) {
    return () => {
        pageIndex.update(lastIndex => {
            if (lastIndex != index) {
                window.history.pushState(index, null, '')
            }
            return index
        })
    }
}

export function updateLabels() {
    setTimeout(() => {
        const show = localStorage.showLabels == 'true'
        const elements = document.querySelectorAll('[data-label]')
        if (show) {
            elements.forEach(element => {
                element.classList.add('ring-red-500', 'ring-1', 'relative')
                const label = document.createElement('span')
                const text = document.createTextNode(element.dataset.label)
                label.appendChild(text)
                label.classList.add('absolute', '-top-4', '-left-[1px]', 'bg-red-500', 'text-white', 'text-xs', 'px-0.5', 'font-normal', 'tracking-normal')
                label.dataset.temp = ''
                element.appendChild(label)
            })
        } else {
            elements.forEach(element => {
                element.classList.remove('ring-red-500', 'ring-1')
            })
            const labels = document.querySelectorAll('[data-temp]')
            labels.forEach(label => label.remove())
        }
    }, 0)
}
