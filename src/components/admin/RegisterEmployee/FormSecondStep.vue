<script setup></script>
<template>
    <form @submit.prevent>
        <label for="">Estado</label>
        <input type="text" placeholder="Insira seu estado" />
        <label for="">Cidade</label>
        <input type="text" placeholder="Insira sua cidade" />
        <label for="">CEP</label>
        <input type="text" placeholder="Insira seu CEP" />
        <label for="">Bairro</label>
        <input type="text" placeholder="Insira seu bairro" />
        <label for="">Endereço</label>
        <input type="text" placeholder="Insira seu endereço" />
        <label for="">Número</label>
        <input type="text" placeholder="Insira seu número" />
        <label for="">Complemento</label>
        <input type="text" placeholder="Insira um complemento" />
        <button class="normalColor" @click="$emit('next')">Finalizar</button>
        <button class="invertColor" @click="$emit('back')">Voltar</button>
    </form>
</template>
<style scoped lang="scss">
@use '../../../assets/main';

form {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem auto 4rem auto;

    label {
        color: main.$standard-white;
        width: 50%;
        height: 1.5em;
        font-size: 16px;
        font-weight: 800;
        margin: 0.5rem 0.5rem;
    }

    input {
        height: 3.25rem;
        border-radius: 1rem;
        border: 1px solid main.$standard-white;
        padding: 0 10px;
        color: main.$standard-white;
        background-color: main.$standard-black;
    }

    button {
        width: 100%;
        height: 3rem;
        border: none;
        border-radius: 0.5rem;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        margin: 1rem 0 0 0;
        transition: 0.3s ease-in-out;
    }
}

.normalColor {
    background-color: main.$standard-pink;
    color: main.$standard-white;
}

.invertColor {
    background-color: main.$standard-black;
    color: main.$standard-pink;
    border: 2px solid main.$standard-pink;
}

.normalColor:hover {
    background-color: main.$standard-black;
    color: main.$standard-pink;
}

.invertColor:hover {
    background-color: main.$standard-pink;
    color: main.$standard-white;
}
</style>
