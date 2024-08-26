<script>
    import { data } from '$lib/state'
    export let index
</script>

<div class="relative" data-label="tiles.{index}">
    <img src={data.tiles[index].image} alt={data.tiles[index].description} class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
</div>
