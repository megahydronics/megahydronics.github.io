<script>
    import Page from '$lib/Page.svelte';
    import { imageInfos } from '$lib/index.js';
</script>

<Page pageId="gallery">
    <div class="lg:mx-auto min-w-4xl px-4 py-12 md:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-4xl font-bold tracking-tight text-gray-900">Featured projects</h2>
        <div
            class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-8"
        >
            {#each Object.values(imageInfos) as info}
                <div
                    class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80"
                >
                    <img
                        src={info.src}
                        alt={info.alt}
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
            {/each}
        </div>
    </div>
</Page>
