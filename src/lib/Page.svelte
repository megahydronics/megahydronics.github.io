<script>
  import { pages, contacts, site, socials } from '$lib/index.js';
  export let pageId;

  const page = pages[pageId];
  const pageUrl = `${site.url}${page.path}`;
  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
    console.log(menuOpen);
  }
</script>

<svelte:head>
  <meta
    name="robots"
    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
  />
  <title>{site.title}</title>
  <meta name="description" content={site.description} />
  <link rel="canonical" href={pageUrl} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={site.title} />
  <meta property="og:url" content={pageUrl} />
  <meta property="og:description" content={site.description} />
  <meta property="og:site_name" content={site.title} />
</svelte:head>

<div class="min-h-screen flex flex-col">
  <nav class={menuOpen ? "shadow-md" : ""}>
    <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="logo.png" alt="MegaHydronics Inc." />
          </div>
          <div class="hidden md:ml-10 md:flex md:space-x-8">
            {#each Object.values(pages) as info}
              <a
                href={info.path}
                class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium {info.id ==
                pageId
                  ? 'border-indigo-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}"
                >{info.title}</a
              >
            {/each}
          </div>
        </div>
        <div
          class="hidden gap-x-6 gap-y-2 text-sm justify-center md:ml-6 md:flex md:flex-col lg:flex-row lg:items-center"
        >
          {#each Object.values(contacts) as contact}
            <div
              class="flex items-center gap-x-2 text-gray-400 hover:text-gray-500 hover:cursor-pointer"
            >
              <span class="sr-only">{contact.title}</span>
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={contact.svgPath} />
              </svg>
              <a class="hover:text-gray-900" href={contact.href}>{contact.value}</a>
            </div>
          {/each}
        </div>

        <div class="-mr-2 flex items-center md:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-controls="mobile-menu"
            aria-expanded="false"
            on:click={toggleMenu}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6 {menuOpen ? 'hidden' : 'block'}"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              class="h-6 w-6 {menuOpen ? 'block' : 'hidden'}"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="md:hidden {menuOpen ? 'block' : 'hidden'}" id="mobile-menu">
      <div class="space-y-1 pb-3 pt-2">
        {#each Object.values(pages) as page}
          <a
            href={page.path}
            class="block border-l-4 py-2 pl-3 pr-4 text-base font-medium {page.id == pageId
              ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
              : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'}"
            >{page.title}</a
          >
        {/each}
      </div>
      <div class="border-t border-gray-200 pb-3 pt-3">
        <div class="space-y-1">
          {#each Object.values(contacts) as contact}
            <div
              class="flex whitespace-nowrap px-4 py-2 items-center gap-x-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer"
            >
              <span class="sr-only">{contact.title}</span>
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={contact.svgPath} />
              </svg>
              <a class="hover:text-gray-900" href={contact.href}>{contact.value}</a>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </nav>
  <slot />
  <footer class="mt-auto">
    <div class="mx-auto max-w-7xl px-6 py-8 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center space-x-8 md:order-2">
        {#each Object.values(socials) as social}
          <a
            href={social.url}
            class="text-gray-400 hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="sr-only">{social.title}</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d={social.svgPath} clip-rule="evenodd" />
            </svg>
          </a>
        {/each}
      </div>
      <div class="mt-6 md:order-1 md:mt-0">
        <p class="text-center text-xs leading-5 text-gray-400">
          © 2023 MegaHydronics Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</div>
