<script>
    import Icon from '$lib/com/Icon.svelte'
    import { data, showLabels } from '$lib/state'
    import { page } from '$app/stores';

    let menuOpen = false

    function toggleMenu() {
        menuOpen = !menuOpen
    }

    function toggleLabels() {
        showLabels.update(s => !s)
    }
</script>

<nav class={menuOpen ? 'shadow-md' : ''}>
    <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div class="flex h-16 justify-between">
            <div class="flex">
                <button on:click={toggleLabels} class="flex flex-shrink-0 items-center">
                    <img class="h-8 w-auto" src="images/logo.png" alt="MegaHydronics logo" />
                </button>
                <div class="hidden md:ml-10 md:flex md:space-x-5 md:items-center">
                    {#each data.pages as page_, index}
                        <a data-label="pages.{index}" href={page_.path} class="px-2 py-1 text-sm font-medium transition {page_.path == $page.url.pathname ? 'text-gray-900' : 'text-gray-400  hover:text-gray-500'}"
                            >{page_.name}</a>
                    {/each}
                </div>
            </div>
            <div class="hidden gap-x-4 gap-y-2 text-sm justify-center md:flex md:flex-row md:items-center">
                {#each data.contacts as contact, index}
                    <a data-label="contacts.{index}" href={contact.link} class="flex items-center gap-x-2 transition text-gray-400 hover:text-gray-500 p-1">
                        <Icon index={contact.icon} size={5} />
                        <span class="whitespace-nowrap hidden lg:block">{contact.text}</span>
                    </a>
                {/each}
            </div>

            <div class="-mr-2 flex items-center md:hidden">
                <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-md p-2 transition text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                    on:click|preventDefault={toggleMenu}>
                    <Icon index={menuOpen ? 6 : 7} size={6} />
                </button>
            </div>
        </div>
    </div>

    <div class="md:hidden {menuOpen ? 'block' : 'hidden'}" id="mobile-menu">
        <div class="space-y-1 pb-3 pt-2">
            {#each data.pages as page_}
                <a
                    href={page_.path}
                    class="block w-full py-2 pl-3 pr-4 text-base font-medium transition {page_.path == $page.url.pathname ? 'bg-indigo-50 text-indigo-700' : 'text-gray-400 hover:bg-gray-50  hover:text-gray-500'}"
                    >{page_.name}</a>
            {/each}
        </div>
        <div class="border-t border-gray-200 pb-3 pt-3">
            <div class="space-y-1">
                {#each data.contacts as contact}
                    <a href={contact.link} class="flex whitespace-nowrap justify-center h-10 items-center gap-x-3 transition text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                        <Icon index={contact.icon} size={5} />
                        <span>{contact.text}</span>
                    </a>
                {/each}
            </div>
        </div>
    </div>
</nav>
