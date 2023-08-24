<script>
    import { site } from '../lib/state'
</script>

<svelte:head>
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
    <title>{site.title}</title>
    <meta name="description" content={site.description} />
    <link rel="canonical" href={site.url} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={site.title} />
    <meta property="og:url" content={site.url} />
    <meta property="og:description" content={site.description} />
    <meta property="og:site_name" content={site.title} />
</svelte:head>
