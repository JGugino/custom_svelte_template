<script>
    export let currentRoute = {routeID: 0, routeName: ""};
</script>

<div id="content-holder">
    {#if currentRoute.routeName == "route_one"}
        <h1 class="temp-header">Route One</h1>
    {:else if currentRoute.routeName == "route_two"}
        <h1 class="temp-header">Route Two</h1>
    {:else if currentRoute.routeName == "route_three"}
        <h1 class="temp-header">Route Three</h1>
    {:else if currentRoute.routeName == "route_four"}
        <h1 class="temp-header">Route Four</h1>
    {/if}
</div>

<style>
    .temp-header{
        text-align: center;
        margin: 1rem 0;
    }
</style>