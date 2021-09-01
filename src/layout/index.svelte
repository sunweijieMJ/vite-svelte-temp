<div class="layout">
    layout
</div>
<style lang="scss">
    .layout {
        display: grid;
        grid-template:
            'aside header header' 50px
            'aside nav main'
            'aside nav main' 1fr / 60px min-content 1fr;
        height: 100vh;
        min-width: 1260px;

        .layout-header {
            grid-area: header;
        }

        .layout-aside {
            grid-area: aside;
        }

        .layout-nav {
            grid-area: nav;
        }

        .micro-app {
            background-color: #f6f7fb;
            grid-area: main;
            overflow-y: auto;
            scroll-behavior: smooth;
            transition: width 0.3s;
            will-change: width;
        }
    }
</style>
