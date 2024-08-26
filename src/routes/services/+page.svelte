<script>
    import { data } from '$lib/state'
</script>

<div class="mx-auto max-w-7xl py-12 md:py-20 px-4 lg:px-8">
    <div class="flex flex-col gap-32 max-w-5xl mx-auto">
        {#each data.services as service, index}
            <div data-label="services.{index}" class="flex gap-10 flex-col items-center lg:items-start {index % 2 == 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}">
                <div>
                    <h2 class="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {service.title}
                    </h2>
                    <p class="leading-8 text-gray-600">
                        {service.description}
                    </p>
                </div>
                <div class=" flex-shrink-0 overflow-hidden rounded-md h-80 w-full md:w-[30rem]">
                    <img src={service.image} alt={service.title} class="h-full w-full object-cover object-center" />
                </div>
            </div>
        {/each}
    </div>
    <h2 class="text-center text-3xl mt-32 font-bold tracking-tight text-gray-900 sm:text-4xl">Our accreditations</h2>
    <div class="bg-white mt-12 sm:mt-14">
        <div class="max-w-7xl px-6 lg:px-8">
            <div class="flex flex-wrap max-w-lg items-center justify-center gap-x-8 gap-y-12 sm:max-w-xl sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none">
                {#each data.emblems as emblem, index}
                    <div data-label="emblems.{index}">
                        <img class="max-h-20 object-contain" src={emblem.logo} alt={emblem.name} />
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
