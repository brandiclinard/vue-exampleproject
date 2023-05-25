<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button-component'
}
</script>

<style scoped>
.button {
    background-color: #42b983;
    border: none;
    border-radius: 2px;
    color: #fff;
    font-size: 16px;
    padding: 10px 15px;
}
</style>
