import { writable } from 'svelte/store'

import { loadData } from './cms'
export const data = await loadData()
// import { default_ } from './data'
// export const data = default_

export const site = {
    title: 'MegaHydronics Inc.',
    url: 'https://megahydronics.com',
    description: 'Top tier service to our residential, commercial, and industrial clients to address their heating, plumbing, HVAC, gas, and facility maintenance needs.',
    copyright: '© 2023 MegaHydronics Inc. All rights reserved.'
}

export const showLabels = writable()
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
