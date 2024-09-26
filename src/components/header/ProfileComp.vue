<script setup>
import { useAuthStore } from '@/stores';
const store = useAuthStore();
</script>
<template>
    <div class="container">
        <div class="container-picture">
            <img src="/public/imgs/Profile-picture.png">
        </div>
        <!-- <h1>{{ store.state.user.name }}</h1> -->
         <h1>Profile</h1>
    </div>
</template>
<style scoped lang="scss">
.container {
    padding: 1em;
    width: 10rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    border-radius: 5em;
    h1 {
        color: #FC1D87;
        font-size: 1.5em;
    }
    .container-picture {
        width: 3rem;
        height: 2rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
}
</style>