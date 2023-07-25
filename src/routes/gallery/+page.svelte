<script>
    import Page from '$lib/Page.svelte';
    import { imageInfos, iconInfos } from '$lib/index.js';

    let imageId = null;

    function showImage(event) {
        imageId = event.currentTarget.id;
    }

    function hideImage() {
        imageId = null;
    }
</script>

<Page pageId="gallery">
    <div class="mx-auto min-w-4xl px-4 py-14 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-4xl font-bold tracking-tight text-gray-900">Recent projects showcase</h2>
        <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
            {#each Object.values(imageInfos) as info}
                <button
                    id={info.id}
                    on:click={showImage}
                    class="aspect-h-1 aspect-w-1 w-full overflow-hidden hover:opacity-75 rounded-md lg:aspect-none lg:h-80"
                >
                    <img
                        src={info.src}
                        alt={info.alt}
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </button>
            {/each}
        </div>
    </div>
    {#if imageId}
        <button
            class="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
            on:click={hideImage}
        >
            <div class="relative overflow-hidden rounded-md max-h-screen max-w-screen-sm w-full p-8">
                <img
                    src={imageInfos[imageId].src}
                    alt={imageInfos[imageId].alt}
                    class="h-full w-full object-cover object-center"
                />
            </div>
        </button>
    {/if}
</Page>
