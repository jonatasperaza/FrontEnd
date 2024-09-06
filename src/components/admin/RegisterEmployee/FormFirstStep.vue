<script setup></script>
<template>
    <section>
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
            <button @click="$emit('next')">Próximo</button>
        </form>
    </section>
</template>
<style scoped lang="scss">
@use '../../../assets/main';
</style>
