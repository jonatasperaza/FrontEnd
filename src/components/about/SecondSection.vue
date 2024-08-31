<script setup>
</script>
<template>
    <section>
        <span></span>
        <div class="container">
            <div class="cards"><div><img src="/public/handshake-icon.svg" alt=""><p></p></div></div>
            <div class="textContent"></div>
        </div>
        <span></span>
    </section>
</template>
<style scoped lang="scss">
@use '../../assets/main';
section {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: main.$standard-black;
.container{
    width: 100%;
    height: 25rem;
    display: flex;
    .cards{
        width: 55%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        div{
            width: 10rem;
            height: 10rem;
            display: flex;
            flex-direction: column;
        }
    }
}
span{
    width: 100%;
    height: 2px;
    background-color: main.$standard-pink;
}
}
</style>