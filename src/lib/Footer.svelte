<script>
    import Icon from './Icon.svelte';
    import { site, socials } from './content';
</script>

<footer class='mt-auto'>
    <div class='mx-auto max-w-7xl px-6 py-8 md:flex md:items-center md:justify-between lg:px-8'>
        <div class='flex justify-center space-x-8 md:order-2'>
            {#each Object.values(socials) as social}
                <a
                    href={social.url}
                    class='text-gray-400 hover:text-gray-500'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Icon id={social.icon} />
                </a>
            {/each}
        </div>
        <div class='mt-6 md:order-1 md:mt-0'>
            <p class='text-center text-xs leading-5 text-gray-400'>
                {site.copyright}
            </p>
        </div>
    </div>
</footer>
