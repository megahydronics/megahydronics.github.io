<script>
    import Icon from '$lib/com/Icon.svelte'
    import { data } from '$lib/state'
</script>

<footer class="mt-auto">
    <div class="mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div class="flex justify-center space-x-4 md:order-2">
            {#each data.socials as social, index}
                <a data-label="socials.{index}" href={social.link} class="text-gray-400 hover:text-gray-500 transition p-2" target="_blank" rel="noopener noreferrer">
                    <Icon index={social.icon} />
                </a>
            {/each}
        </div>
        <div class="mt-6 md:order-1 md:mt-0">
            <p class="text-center text-xs leading-5 text-gray-400" data-label="site.copyright">
                {data.site.copyright}
            </p>
        </div>
    </div>
</footer>
