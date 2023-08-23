<script>
    import { services, pages, emblems } from '../lib/state'
</script>

<div class="mx-auto max-w-7xl py-12 md:py-20 px-4 lg:px-8">
    <h2 data-label="pages.1.heading" class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {pages[1].heading}
    </h2>
    <dl class="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {#each services as service, index}
            <div data-label="services.{index}">
                <dt class="font-semibold text-lg text-gray-900">{service.name}</dt>
                <dd class="mt-1 text-gray-600">{service.description}</dd>
            </div>
        {/each}
    </dl>
    <h2 class="text-center text-3xl mt-20 font-bold tracking-tight text-gray-900 sm:text-4xl">Our accreditations</h2>
    <div class="bg-white mt-12 sm:mt-14">
        <div class="max-w-7xl px-6 lg:px-8">
            <div class="flex flex-wrap max-w-lg items-center justify-center gap-x-8 gap-y-12 sm:max-w-xl sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none">
                {#each emblems as emblem, index}
                    <div data-label="emblems.{index}">
                        <img class="max-h-20 object-contain" src={emblem.icon} alt={emblem.name} />
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
