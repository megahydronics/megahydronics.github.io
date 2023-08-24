<script>
    import { data } from '../lib/state'

    let swaps = data.projects.map(_ => false)

    function showBefore(index) {
        return function () {
            swaps[index] = true
        }
    }

    function showAfter(index) {
        return function () {
            swaps[index] = false
        }
    }
</script>

<div class="lg:mx-auto min-w-4xl px-4 py-12 md:py-20 sm:px-6 lg:max-w-6xl lg:px-8 flex flex-col gap-32">
    {#each data.projects as project, index}
        <div data-label="projects.{index}" class="flex gap-10 flex-col items-center lg:items-start lg:flex-row">
            <div>
                <h2 class="mb-2 text-base font-semibold leading-7 text-indigo-600">
                    {project.service}
                </h2>
                <p class="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {project.location}
                </p>
                <p class="leading-8 text-gray-600">
                    {project.description}
                </p>
            </div>
            <button on:mouseenter={showBefore(index)} on:mouseleave={showAfter(index)} on:focus={showBefore(index)} on:blur={showAfter(index)} class="mt-10 cursor-default relative">
                <div
                    class="{swaps[index]
                        ? 'brightness-75 mb-4 mr-4'
                        : 'shadow-lg shadow-black/30 z-10 absolute top-0 left-0 translate-x-4 translate-y-4'} transition duration-500 overflow-hidden rounded-md h-60 sm:h-80 aspect-[4/3]">
                    <img src={project.after} alt="{project.location} after" class="h-full w-full object-cover object-center" />
                    <div class="{swaps[index] ? 'opacity-0' : ''} transition duration-500 absolute z-20 rounded-tl-md rounded-br-md top-0 left-0 px-3 py-1 bg-black/60 text-gray-100 font-semibold">
                        After
                    </div>
                </div>
                <div
                    class="{swaps[index]
                        ? 'shadow-lg shadow-black/30 z-10 absolute top-0 left-0 translate-x-4 translate-y-4'
                        : 'brightness-75 mb-4 mr-4'} transition duration-500 overflow-hidden rounded-md h-60 sm:h-80 aspect-[4/3]">
                    <img src={project.before} alt="{project.location} before" class="h-full w-full object-cover object-center" />
                    <div class="{swaps[index] ? '' : 'opacity-0'} transition duration-500 absolute z-20 rounded-tl-md rounded-br-md top-0 left-0 px-3 py-1 bg-black/60 text-gray-100 font-semibold">
                        Before
                    </div>
                </div>
            </button>
        </div>
    {/each}
</div>
