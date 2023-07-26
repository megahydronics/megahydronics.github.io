<script>
    import Icon from './Icon.svelte';
    import { pages, contacts, currentPageId, currentPageIdSetter, icons } from './content';

    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>

<nav class={menuOpen ? 'shadow-md' : ''}>
    <div class='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
        <div class='flex h-16 justify-between'>
            <div class='flex'>
                <div class='flex flex-shrink-0 items-center'>
                    <img class='h-8 w-auto' src='logo.png' alt='MegaHydronics logo' />
                </div>
                <div class='hidden md:ml-10 md:flex md:space-x-8'>
                    {#each Object.entries(pages) as [id, page]}
                        <button
                            on:click={currentPageIdSetter(id)}
                            class='inline-flex items-center px-1 pt-1 text-sm font-medium {id ==
                            $currentPageId
                                ? 'text-gray-900'
                                : 'text-gray-400  hover:text-gray-500'}'>{page.title}</button
                        >
                    {/each}
                </div>
            </div>
            <div
                class='hidden gap-x-6 gap-y-2 text-sm justify-center md:ml-6 md:flex md:flex-col lg:flex-row lg:items-center'
            >
                {#each Object.values(contacts) as contact}
                    <div
                        class='flex items-center gap-x-2 text-gray-400 hover:text-gray-500 hover:cursor-pointer'
                    >
                        <Icon id={contact.icon} size={4}/>
                        <a class='hover:text-gray-900 whitespace-nowrap' href={contact.href}>{contact.value}</a>
                    </div>
                {/each}
            </div>

            <div class='-mr-2 flex items-center md:hidden'>
                <button
                    type='button'
                    class='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                    aria-controls='mobile-menu'
                    aria-expanded='false'
                    on:click={toggleMenu}
                >
                    <span class='sr-only'>Open main menu</span>
                    <svg
                        class='h-6 w-6 {menuOpen ? 'hidden' : 'block'}'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        aria-hidden='true'
                    >
                        <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                        />
                    </svg>
                    <svg
                        class='h-6 w-6 {menuOpen ? 'block' : 'hidden'}'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        aria-hidden='true'
                    >
                        <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M6 18L18 6M6 6l12 12'
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <div class='md:hidden {menuOpen ? 'block' : 'hidden'}' id='mobile-menu'>
        <div class='space-y-1 pb-3 pt-2'>
            {#each Object.entries(pages) as [id, page]}
                <button
                    on:click={currentPageIdSetter(id)}
                    class='block w-full py-2 pl-3 pr-4 text-base font-medium {id == $currentPageId
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'text-gray-400 hover:bg-gray-50  hover:text-gray-500'}'
                    >{page.title}</button
                >
            {/each}
        </div>
        <div class='border-t border-gray-200 pb-3 pt-3'>
            <div class='space-y-1'>
                {#each Object.values(contacts) as contact}
                    <div
                        class='flex whitespace-nowrap px-4 py-2 items-center gap-x-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 hover:cursor-pointer'
                    >
                        <Icon id={contact.icon} size={4}/>
                        <a class='hover:text-gray-900' href={contact.href}>{contact.value}</a>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</nav>
