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
    button {
        font-family: inherit;
        font-size: inherit;
        padding: 1em 2em;
        color: #399;
        background-color: rgba(255, 62, 0, 0.1);
        border-radius: 2em;
        border: 2px solid rgba(255, 62, 0, 0);
        outline: none;
        width: 200px;
        font-variant-numeric: tabular-nums;
        cursor: pointer;
        /* &:focus {
            border: 2px solid #399;
        }
        &:active {
            background-color: rgba(255, 62, 0, 0.2);
        } */
    }

</style>
