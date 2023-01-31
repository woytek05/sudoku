<script lang="ts">
    import { onMount } from "svelte";
    import { get, writable } from "svelte/store";
    import {
        puzzle,
        initializeGame,
        moveDown,
        moveUp,
        moveLeft,
        moveRight,
    } from "../stores/store";
    import Square from "./Square.svelte";

    onMount(initializeGame());

    const handleKeydown = (event) => {
        switch (event.key) {
            case "ArrowDown":
                moveDown();
                break;
            case "ArrowUp":
                moveUp();
                break;
            case "ArrowLeft":
                moveLeft();
                break;
            case "ArrowRight":
                moveRight();
                break;
            case "Backspace":
                console.log("Backspace");
                break;
            case "Enter":
                console.log("Enter");
                moveDown();
                break;
            case "0":
                console.log("0");
                break;
            case "1":
                console.log("1");
                break;
            case "2":
                console.log("2");
                break;
            case "3":
                console.log("3");
                break;
            case "4":
                console.log("4");
                break;
            case "5":
                console.log("5");
                break;
            case "6":
                console.log("6");
                break;
            default:
                console.log(event.key);
                return;
        }
    };
</script>

<svelte:window on:keydown={handleKeydown} />
<div class="mainContainer">
    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Sudoku
    </h1>
    <div class="board">
        {#each get(puzzle) as el}
            <Square
                number={el.number}
                editable={el.editable}
                rowIndex={el.rowIndex}
                columnIndex={el.columnIndex}
            />
        {/each}
    </div>
</div>

<style>
    .mainContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100vh;
    }
    .board {
        display: grid;
        grid-template-rows: repeat(9, 1fr);
        grid-template-columns: repeat(9, 1fr);
    }
</style>
