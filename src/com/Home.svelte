<script>
    import { pages, stats, pageIndexSetter, actions, tiles, texts } from '../lib/state'
    import Icon from './Icon.svelte'

    let showArrow
    let scrollPosition
    let contentElement

    function scrollToContent() {
        contentElement.scrollIntoView({
            behavior: 'smooth'
        })
    }

    $: showArrow = scrollPosition < 160
</script>

<svelte:window bind:scrollY={scrollPosition} />
<main class="isolate mb-20">
    <div class="relative isolate -z-10">
        <svg class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
            <defs>
                <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                    <path d="M.5 200V.5H200" fill="none" />
                </pattern>
            </defs>
            <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
                <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
            </svg>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
        </svg>
        <div class="left-1/2 absolute right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
            <div
                class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" />
        </div>
        <div class="overflow-hidden">
            <div class="mx-auto max-w-7xl px-6 pb-24 pt-36 sm:pt-60 lg:px-8 lg:pt-20">
                <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                    <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                        <h1 data-label="pages.0.heading" class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            {pages[0].heading}
                        </h1>
                        <p data-label="pages.0.subheading" class="relative mt-8 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                            {pages[0].subheading}
                        </p>
                        <div class="mt-8 flex items-center gap-x-4">
                            <div data-label="actions.0">
                                <button
                                    on:click={pageIndexSetter(actions[0].page)}
                                    class="rounded-md whitespace-pre bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >{actions[0].title}</button>
                            </div>
                            <button data-label="actions.1" on:click={pageIndexSetter(actions[1].page)} class="text-sm whitespace-pre px-2 py-1 font-semibold leading-6 text-gray-900"
                                >{actions[1].title}</button>
                        </div>
                    </div>

                    <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                        <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                            <div class="relative" data-label="tiles.0">
                                <img src={tiles[0].image} alt={tiles[0].description} class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                        </div>
                        <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                            <div class="relative" data-label="tiles.1">
                                <img src={tiles[1].image} alt={tiles[1].description} class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            <div class="relative" data-label="tiles.2">
                                <img src={tiles[2].image} alt={tiles[2].description} class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                        </div>
                        <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                            <div class="relative" data-label="tiles.3">
                                <img src={tiles[3].image} alt={tiles[3].description} class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            <div class="relative" data-label="tiles.4">
                                <img src={tiles[4].image} alt={tiles[4].description} class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {#if showArrow}
        <button
            on:click={scrollToContent}
            class="mx-auto left-0 right-0 z-20 fixed bottom-12 w-12 h-12 rounded-full ring-1 hover:text-gray-900 text-gray-600 ring-black ring-opacity-5 shadow-lg bg-white grid place-content-center">
            <Icon index={5} size={7} />
        </button>
    {/if}

    <div bind:this={contentElement} class="mx-auto pt-8 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 data-label="texts.0.title" class="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {texts[0].title}
            </h2>
            <div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
                    <p data-label="texts.0.first" class="text-xl leading-8 text-gray-600">
                        {texts[0].first}
                    </p>
                    {#if texts[0].second}
                        <div class="mt-10 max-w-xl text-base leading-7 text-gray-700">
                            <p data-label="texts.0.second">
                                {texts[0].second}
                            </p>
                            {#if texts[0].third}
                                <p data-label="texts.0.third" class="mt-10">
                                    {texts[0].third}
                                </p>
                            {/if}
                        </div>
                    {/if}
                </div>
                <div class="lg:flex lg:flex-auto lg:justify-center">
                    <dl class="w-64 space-y-8 xl:w-80">
                        {#each stats as stat, index}
                            <div data-label="stats.{index}" class="flex flex-col gap-y-2">
                                <dd class="text-5xl font-semibold tracking-tight text-gray-900">
                                    {stat.value}
                                </dd>
                                <dt class="text-base leading-7 text-gray-600">
                                    {stat.description}
                                </dt>
                            </div>
                        {/each}
                    </dl>
                </div>
            </div>
        </div>
    </div>
</main>
