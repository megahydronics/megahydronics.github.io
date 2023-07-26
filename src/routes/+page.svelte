<script>
    import Page from '../lib/Page.svelte';
    import { pages, currentPageId } from '../lib/content';
    import { onMount } from 'svelte';

    onMount(() => {
        window.history.replaceState($currentPageId, null, '');
    });

    function popState(event) {
        if (event.state) {
            currentPageId.set(event.state);
        }
    }
</script>

<svelte:window on:popstate={popState} />
<Page>
    <svelte:component this={pages[$currentPageId].component} />
</Page>
