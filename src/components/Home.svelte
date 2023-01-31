<script lang="ts">
    import { Link } from "svelte-routing";
    import { initializeGame, setUsersSudoku } from "../stores/store";

    export let files = [];

    $: handleFileChange = () => {
        const reader = new FileReader();
        reader.onload = handleFileLoad;
        reader.readAsText(files[0]);
    };

    const handleFileLoad = (event: ProgressEvent) => {
        setUsersSudoku(JSON.parse(removeAllWhitespace(event.target.result)));
    };

    const removeAllWhitespace = (string: string) => {
        return string.replace(/\s/g, "");
    };
</script>

<main>
    <div class="flex h-screen">
        <section class="text-gray-600 body-font m-auto">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <div class="p-4">
                        <div
                            class="h-full bg-gray-100 bg-opacity-75 px-16 py-16 rounded-lg overflow-hidden text-center relative"
                        >
                            <h1
                                class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
                            >
                                Sudoku
                            </h1>
                            <div
                                class="flex w-full px-4 py-4 mb-4 items-center justify-center bg-grey-lighter"
                            >
                                <label
                                    class="w-64 flex flex-col items-center px-3 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer hover:text-blue-700"
                                >
                                    <svg
                                        class="w-8 h-8"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                                        />
                                    </svg>
                                    <span class="mt-2 text-base leading-normal"
                                        >Select a file</span
                                    >
                                    <input
                                        id="sudokuFileInput"
                                        bind:files
                                        on:change={handleFileChange}
                                        type="file"
                                        class="hidden"
                                        accept="application/JSON"
                                    />
                                </label>
                            </div>
                            <Link to="board">
                                <button
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Play
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>
