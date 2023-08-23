<script>
    import { siteInfo } from '../lib/config'
</script>

<svelte:head>
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
    <title>{siteInfo.title}</title>
    <meta name="description" content={siteInfo.description} />
    <link rel="canonical" href={siteInfo.url} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={siteInfo.title} />
    <meta property="og:url" content={siteInfo.url} />
    <meta property="og:description" content={siteInfo.description} />
    <meta property="og:site_name" content={siteInfo.title} />
</svelte:head>
