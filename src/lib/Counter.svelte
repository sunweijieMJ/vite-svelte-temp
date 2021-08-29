<script lang="ts">
    let count = 0;

    const increment = () => {
        count += 1;
    };
</script>

<button on:click={increment}>
  Clicks: {count}
</button>
<style lang="scss">
    $color: #399;

    button {
        background-color: rgba(255, 62, 0, 0.1);
        border: 2px solid rgba(255, 62, 0, 0);
        border-radius: 0;
        color: $color;
        cursor: pointer;
        font-family: inherit;
        font-size: inherit;
        font-variant-numeric: tabular-nums;
        outline: none;
        padding: 1em 2em;
        width: 200px;

        &:focus {
            border: 2px solid $color;
        }

        &:active {
            background-color: rgba(255, 62, 0, 0.2);
        }
    }

</style>
