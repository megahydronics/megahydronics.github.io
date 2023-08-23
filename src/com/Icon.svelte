<script>
    import { icons } from '../lib/state'
    export let index
    export let size = 6
</script>

<span class="sr-only">{icons[index].name}</span>
<svg class="w-{size} h-{size}" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d={icons[index].code} fill-rule="evenodd" />
</svg>
