<script lang="ts">
    import Router from '@/router/index.svelte';
</script>
<!-- 路由 -->
<Router />
<style lang="scss" global>
    /* 重置样式 */
    @use './assets/scss/_reset.scss';

    /* 通用类名 */
    @use './assets/scss/_common.scss';

    /* 自定义样式 */
    @use './assets/scss/component/_custom.scss';

    html,
    body,
    #root {
        background-color: #fff;
        min-height: 100vh;
        min-width: 1260px;
    }
</style>
