<script setup>
</script>
<template>
    <section>
        <form @submit.prevent>
            <div>
                <div class="container">
                    <div class="container-input">
                        <label>Nome do item</label>
                        <input class="input-1" placeholder="Inserir nome" type="text" name="">
                    </div>
                    <div class="container-input-2">
                        <label>Quantidade</label>
                        <input class="input-2" type="text" name="">
                    </div>
                </div>
                <div class="container">
                    <div class="container-input">
                        <label>Observação</label>
                        <input class="input-1" placeholder="Inserir observação" type="text" name="">
                    </div>
                    <div class="container-input-2">
                        <label>Unidade de medida</label>
                        <input class="input-2" type="select" name="">
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>
<style scoped lang="scss">
@use '../../../assets/main.scss';

section {
    width: 100%;
    height: 25rem;
    background-color: main.$standard-black;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        width: 60%;


        .container {
            width: 100%;
            display: flex;
            justify-content: space-around;
            margin-bottom: 2rem;

            label {
                color: main.$standard-white;
            }

            .input-1 {
                width: 100%;
                height: 3.25rem;
                border-radius: 1rem;
                border: 1px solid main.$standard-white;
                padding: 0 10px;
                color: main.$standard-white;
                background-color: main.$standard-black;
            }

            .input-2 {
                width: 100%;
                height: 3.25rem;
                border-radius: 1rem;
                border: 1px solid main.$standard-white;
                padding: 0 10px;
                color: main.$standard-white;
                background-color: main.$standard-black;
            }

            .container-input {
                width: 60%;
                display: flex;
                flex-direction: column;
            }

            .container-input-2 {
                width: 30%;
                display: flex;
                flex-direction: column;
            }
        }
    }
}
</style>