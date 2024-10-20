<script setup>
import { useOrdersStore } from '@/stores';

const ordersStore = useOrdersStore();
</script>
<template>
    <section>
        <div class="container">
            <form @submit.prevent>
                <div>
                    <div class="container-field">
                        <div class="container-input">
                            <label>Nome do item</label>
                            <input class="input-1" placeholder="Inserir nome" type="text" name="" v-model="ordersStore.state.order.itemName">
                        </div>
                        <div class="container-input-2">
                            <label>Quantidade</label>
                            <input class="input-2" type="text" name="" v-model="ordersStore.state.order.itemQuantity">
                        </div>
                    </div>
                    <div class="container-field">
                        <div class="container-input">
                            <label>Observação</label>
                            <input class="input-1" placeholder="Inserir observação" type="text" name="" v-model="ordersStore.state.order.observation">
                        </div>
                        <div class="container-input-2">
                            <label>Unidade de medida</label>
                            <input class="input-2" type="select" name="" v-model="ordersStore.state.order.unitOfMeasure">
                        </div>
                    </div>
                </div>
            </form>
            <div class="container-buttons">
                <button @click="$emit('next')">Avançar</button>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
@use '../../../assets/main.scss';

section {
    width: 100%;
    height: 40rem;
    background-color: main.$standard-black;
    display: flex;
    justify-content: center;

    .container {
        width: 60%;
        margin-top: 5em;


        .container-buttons {
            margin-top: 5rem;
            display: flex;
            width: 100%;
            height: 10%;
            justify-content: center;

            button {
                width: 20%;
                height: 80%;
                border-radius: 15px;
                background-color: main.$standard-pink;
                border: none;
                font-size: 1.5em;
                cursor: pointer;
                transition: 0.3s ease-in-out;
            }

            button:hover {
                background-color: main.$standard-black;
                color: main.$standard-pink;
            }
        }

        form {
            width: 100%;


            .container-field {
                width: 100%;
                display: flex;
                justify-content: space-around;
                margin-bottom: 2rem;

                label {
                    color: main.$standard-white;
                    margin-bottom: 0.5em;
                    margin-left: 0.5em;
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
}
</style>