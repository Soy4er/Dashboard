<template>
    <header class="header">

    </header>
</template>

<style lang="scss" scoped>
.header {
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1037;
    height: 60px;
    background-color: $white;
    margin-left: 260px;
    transition: margin-left .3s ease-in-out;
}
.sidebar--min .header {
    margin-left: 90px;
}
</style>