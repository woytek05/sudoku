<script lang="ts">
    import { Router, Link, Route } from "svelte-routing";
    import Home from "./components/Home.svelte";
    import Board from "./components/Board.svelte";

    export let url = "";
</script>

<Router {url}>
    <Route path="board" component={Board} />
    <Route path="/" component={Home} />
</Router>
