<script lang="ts">
    import { i18n } from '@/plugin';
</script>
<div class="login">
    {i18n.t('baseLogin.t1')}
</div>
<style lang="scss">
    .login {
        background: url('src/assets/image/login_bg1.png') left top no-repeat;
        background-color: #f6f7fb;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        position: relative;
    }
</style>
