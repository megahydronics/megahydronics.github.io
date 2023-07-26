<script>
    import { icons } from './content';
    export let id;
    export let size = 6;
</script>

<span class='sr-only'>{icons[id].name}</span>
<svg class='w-{size} h-{size}' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
    <path d={icons[id].svgPath} fill-rule='evenodd'/>
</svg>
