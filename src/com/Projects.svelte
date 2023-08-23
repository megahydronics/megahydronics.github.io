<script>
    import { projects } from '../lib/state'
</script>

<div class="lg:mx-auto min-w-4xl px-4 py-12 md:py-20 sm:px-6 lg:max-w-7xl lg:px-8 space-y-40">
    {#each projects as project, index}
        <div data-label="projects.{index}">
            <h2 class="text-base font-semibold leading-7 text-indigo-600">
                {project.service}
            </h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {project.location}
            </p>
            <p class="mt-6 leading-8 text-gray-600">
                {project.description}
            </p>
            <div class="space-x-4 mt-10 flex max-w-3xl mx-auto">
                <div class="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
                    <img src={project.before} alt="{project.location} before" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div class="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
                    <img src={project.after} alt="{project.location} after" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                    <!-- <div class="absolute z-20 px-2 py-1 -top-10 bg-white rounded-md bg-opacity-70 text-gray-900 font-semibold">After</div> -->
                </div>
            </div>
        </div>
    {/each}
</div>
