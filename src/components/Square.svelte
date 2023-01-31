<script lang="ts">
    import { currentColumnIndex, currentRowIndex } from "../stores/store";
    export let number;
    export let editable;
    export let rowIndex;
    export let columnIndex;
    // export let hints = [];

    const getNumber = (number: number) => {
        if (number === null) {
            return " ";
        } else {
            return number;
        }
    };

    $: borderClass = () => {
        if (
            $currentColumnIndex === columnIndex &&
            $currentRowIndex === rowIndex
        ) {
            return "border-red-600";
        } else {
            return "border-2";
        }
    };

    $: backgroundClass = () => {
        if (
            ([0, 1, 2].includes(rowIndex) && [3, 4, 5].includes(columnIndex)) ||
            ([3, 4, 5].includes(rowIndex) &&
                [0, 1, 2, 6, 7, 8].includes(columnIndex)) ||
            ([6, 7, 8].includes(rowIndex) && [3, 4, 5].includes(columnIndex))
        ) {
            return "bg-gray-300";
        } else {
            return "bg-transparent";
        }
    };
</script>

<div
    class={`w-12 h-12 flex items-center justify-center border-2 m-1 ${backgroundClass()} ${borderClass()}`}
>
    {#if editable}
        <span class="text-4xl font-bold">{getNumber(number)}</span>
    {:else}
        <span class="text-4xl font-bold">{getNumber(number)}</span>
    {/if}
</div>
