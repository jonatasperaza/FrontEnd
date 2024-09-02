<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="container"> 
        <div class="row">
            <h1>Login</h1>
        </div>
        <form @submit.prevent>
            <label>Email</label>
            <input type="email" placeholder="Insira seu email">
            <label for="">Senha</label>
            <input type="password" placeholder="Insira sua senha">
            <div class="row">
                <input type="checkbox" name="" id="">
                <label for="">Lembrar me</label>
            </div>
            <button class="colorBordeaux">Log in</button>
            <RouterLink>Não possui uma conta?</RouterLink>
            <button class="colorPink">Registre-se</button>
        </form>
    </div>
</template>
<style scoped lang="scss">
@use '../../assets/main';
.container{
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: main.$standard-black;
    form{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        label{
            color: main.$standard-white;
            width: 50%;
            font-size: 16px;
            font-weight: 800;
            margin: .5rem .5rem;
        }
        input{
            height: 3rem;
            border-radius: 1rem;
            border: 1px solid main.$standard-white;
            padding: 0 10px;
            color: main.$standard-white;
            background-color: main.$standard-black;
        }
        .row{
            display: flex;
            align-items: center;
            margin: .5rem 0;
            label{
                margin: 0 0 0 .5rem;
            }
        }
        button{
            width: 100%;
            height: 3rem;
            border: none;
            border-radius: .5rem;
            color: main.$standard-white;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            margin: .5rem 0;
            transition: .3s ease-in-out;
        }
        a{
            color: main.$standard-white;
            font-size: 16px;
            font-weight: 500;
            margin: .5rem 0;
            cursor: pointer;
        }
    }
}
.colorBordeaux{
    background-color: main.$standard-bordeaux;
}
.colorBordeaux:hover{
    background-color: main.$standard-black;
    color: main.$standard-pink;
}
.colorPink{
    background-color: main.$standard-pink;
}
.colorPink:hover{
    background-color: main.$standard-black;
    color: main.$standard-pink;
}
h1{
    color: main.$standard-pink;
    font-style: italic;
    font-size: 50px;
    margin: 2rem;
    font-weight: 800;
}
</style>