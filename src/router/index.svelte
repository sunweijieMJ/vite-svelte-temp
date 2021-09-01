<script>
    import { Router, Route } from 'svelte-routing';
    import Layout from '@/layout/index.svelte';
    import Login from '@/views/Login.svelte';
    import NotFound from '@/views/404.svelte';

    export const url = '';
</script>
<Router url="{url}">
    <Route path="login" component="{Login}"></Route>
    <Route path="/" component="{Layout}"></Route>
    <Route path="*" component="{NotFound}"></Route>
</Router>
