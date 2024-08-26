<script>
    import { data } from '$lib/state'
    import Footer from '$lib/com/Footer.svelte'
    import Navbar from '$lib/com/Navbar.svelte'
</script>

<svelte:head>
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
    <title>{data.site.title}</title>
    <meta name="description" content={data.site.description} />
    <link rel="canonical" href={data.site.url} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={data.site.title} />
    <meta property="og:url" content={data.site.url} />
    <meta property="og:description" content={data.site.description} />
    <meta property="og:site_name" content={data.site.title} />
</svelte:head>
<div class="min-h-screen flex flex-col">
    <Navbar />
    <slot />
    <Footer />
</div>
