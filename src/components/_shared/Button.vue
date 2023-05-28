<template>
    <button class="button"
    @click="onclicker">
        hello
        <p class="button_text">
            <slot></slot>
        </p>
    </button>
</template>

<script>
export default {
    name: 'Button-component',

    methods: {
        onclicker () {
            window.open(
            "https://www.geeksforgeeks.org", "_blank");
        }
    },
}
</script>

<style lang="scss">
.button {
    background-color: #42b983;
    border: none;
    border-radius: 2px;
    color: #fff;
    font-size: 16px;
    padding: 10px 15px;

    &_text {
        color: pink;

        &:hover {
            color: yellow;
        }
    }
}
</style>
