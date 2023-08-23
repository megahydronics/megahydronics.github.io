<script>
    import Page from '../com/Page.svelte'
    import Home from '../com/Home.svelte'
    import Services from '../com/Services.svelte'
    import Projects from '../com/Projects.svelte'
    import Contact from '../com/Contact.svelte'
    import { pageIndex, showLabels, updateLabels } from '../lib/state'
    import { onMount } from 'svelte'

    let loading = true
    let cover = true

    onMount(() => {
        const show = localStorage.showLabels
        showLabels.set(['true', 'false'].includes(show) ? show == 'true' : false)
        showLabels.subscribe(s => {
            localStorage.showLabels = s
            updateLabels()
        })

        const index = localStorage.pageIndex
        pageIndex.set(['0', '1', '2', '3'].includes(index) ? index : '0')
        pageIndex.subscribe(p => {
            localStorage.pageIndex = p
            updateLabels()
        })
        window.history.replaceState($pageIndex, null, '')

        setTimeout(() => {
            loading = false
            updateLabels()
        }, 400)
        setTimeout(() => (cover = false), 500)
    })

    function popState(event) {
        if (event.state) {
            pageIndex.set(event.state)
        }
    }
</script>

<svelte:window on:popstate={popState} />
<div class="{cover ? 'opacity-100' : 'opacity-0'} duration-300 z-50 pointer-events-none bg-white absolute inset-0 transition-opacity" />
{#if !loading}
    <Page>
        {#if $pageIndex == '0'}
            <Home />
        {:else if $pageIndex == '1'}
            <Services />
        {:else if $pageIndex == '2'}
            <Projects />
        {:else if $pageIndex == '3'}
            <Contact />
        {/if}
    </Page>
{/if}
