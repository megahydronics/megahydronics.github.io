<script>
    import Footer from './Footer.svelte';
    import Head from './Head.svelte';
    import Navbar from './Navbar.svelte';
</script>

<Head />
<div class="min-h-screen flex flex-col">
    <Navbar />
    <slot />
    <Footer />
</div>
