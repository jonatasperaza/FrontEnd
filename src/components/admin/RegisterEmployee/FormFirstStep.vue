<script setup></script>
<template>
        <form @submit.prevent>
            <label for="">Nome</label>
            <input type="text" placeholder="Insira seu nome" />
            <label for="">Email</label>
            <input type="email" placeholder="Insira seu email" />
            <label for="">Senha</label>
            <input type="password" placeholder="Insira sua senha" />
            <label for="">CPF</label>
            <input type="text" placeholder="Insira seu CPF" />
            <label for="">Telefone</label>
            <input type="tel" placeholder="Insira seu telefone" />
            <label for="">Cargo</label>
            <select name="opcoes" id="opcoes"></select>
            <div>
                <label for="">É staff?</label>
                <button>Sim</button>
                <button>Não</button>
            </div>
            <div>
                <label for="">Gênero</label>
                <button><img src="../../../../public/imgs/Man.png" alt="Homem "></button>
                <button><img src="../../../../public/imgs/Woman.png" alt="Mulher"></button>
            </div>
            <button @click="$emit('next')">Próximo</button>
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

    div {
        margin-top: 1em;
        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 2rem 1fr;
        width: 100%;

        label {
            grid-column: 1 / 2 span;
            width: 3.5em;
        }

        button {
            grid-row: 2 ;
            height: 2.5rem;
            width: 90%;
            border-radius: 1rem;
            border: 1px solid main.$standard-white;
            padding: 0 10px;
            color: main.$standard-white;
            background-color: main.$standard-black;
        }

    }

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

    select {
        height: 2rem;
        border-radius: 1em;
        border: 1px solid main.$standard-white;
        color: main.$standard-white;
        background-color: main.$standard-black;
    }

    button {
        width: 100%;
        height: 3rem;
        border: none;
        border-radius: 0.5rem;
        color: main.$standard-white;
        background-color: main.$standard-pink;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        margin: 1rem 0;
        transition: 0.3s ease-in-out;
    }
}

button:hover {
    background-color: main.$standard-black;
    color: main.$standard-pink;
}
</style>
