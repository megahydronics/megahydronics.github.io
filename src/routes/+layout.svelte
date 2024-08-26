<script>
    import '../app.css'
    import Page from '$lib/com/Page.svelte'
    import { showLabels, updateLabels } from '$lib/state'
    import { onMount } from 'svelte'
    import { page } from '$app/stores'

    onMount(async () => {
        const show = localStorage.showLabels
        showLabels.set(['true', 'false'].includes(show) ? show == 'true' : false)
        showLabels.subscribe(s => {
            localStorage.showLabels = s
            updateLabels()
        })
        page.subscribe(updateLabels)
    })
</script>

<!-- <div class="{loading ? 'opacity-100' : 'opacity-0'} duration-300 z-50 pointer-events-none bg-white absolute inset-0 transition-opacity" /> -->
<Page>
    <slot />
</Page>
