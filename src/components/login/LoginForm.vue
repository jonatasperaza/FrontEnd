<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="container"> 
        <div class="row">
            <h1><span></span>Login</h1>
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
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: main.$standard-black;
    form{
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        label{
            color: main.$standard-white;
            width: 50%;
            font-size: 16px;
            font-weight: 500;
            margin: 10px 0;
        }
        input{
            height: 40px;
            border-radius: .5rem;
            border: 1px solid main.$standard-white;
            padding: 0 10px;
            color: main.$standard-white;
            background-color: main.$standard-black;
            margin: 5px 0;
        }
        .row{
            display: flex;
            align-items: center;
        }
        button{
            width: 100%;
            height: 3rem;
            border: none;
            border-radius: .5rem;
            color: main.$standard-white;
            font-size: 16px;
            font-weight: 500;
            margin: 10px 0;
            cursor: pointer;
            transition: .3s ease-in-out;
        }
        a{
            color: main.$standard-white;
            font-size: 16px;
            font-weight: 500;
            margin: 10px 0;
            cursor: pointer;
        }
    }
}
.colorBordeaux{
    background-color: main.$standard-bordeaux;
}
.colorBordeaux:hover{
    background-color: main.$standard-black;
    color: main.$standard-bordeaux;
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
    font-weight: 500;
    border-left: 3px solid main.$standard-pink;
    padding: 0 0 0 1rem
}
</style>