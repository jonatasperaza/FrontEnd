<script setup>
import { useOrdersStore } from '@/stores';

const ordersStore = useOrdersStore();
</script>
<template>
    <section>
        <div class="container">
            <form @submit.prevent>
                <div class="container-field">
                    <div class="container-input">
                        <label>CEP</label>
                        <input class="input" placeholder="Inserir CEP" type="text" name="" v-model="ordersStore.state.order.deliveryCep">
                    </div>
                    <div class="container-input">
                        <label>Número</label>
                        <input class="input" placeholder="Inserir número" type="text" name="" v-model="ordersStore.state.order.deliveryNumber">
                    </div>
                </div>
                <div class="container-field">
                    <div class="container-input">
                        <label>Endereço</label>
                        <input class="input" placeholder="Inserir endereço" type="text" name="" v-model="ordersStore.state.order.deliveryAddress">
                    </div>
                    <div class="container-input">
                        <label>Complemento</label>
                        <input class="input" placeholder="Inserir complemento" type="text" name="" v-model="ordersStore.state.order.deliveryComplement">
                    </div>
                </div>
                <div class="container-field">
                    <div class="container-input">
                        <label>Cidade</label>
                        <input class="input" placeholder="Inserir cidade" type="text" name="" v-model="ordersStore.state.order.deliveryCity">
                    </div>
                    <div class="container-input">
                        <label>Estado</label>
                        <input class="input" placeholder="Inserir estado" type="text" name="" v-model="ordersStore.state.order.deliveryState">
                    </div>
                </div>
            </form>
            <div class="container-buttons">
                <button class="invertColor" @click="$emit('back')">Voltar</button>
                <button class="normalColor" @click="$emit('next')">Avançar</button>
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
            justify-content: space-around;
            align-items: center;

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
                align-items: center;
                justify-content: space-around;
                margin-bottom: 2rem;



                .container-input {
                    display: flex;
                    align-items: center;


                    label {
                        width: 90%;
                        color: main.$standard-white;
                        margin-bottom: 0.5em;
                    }

                    .input {
                        width: 95%;
                        height: 3.25rem;
                        border-radius: 1rem;
                        border: 1px solid main.$standard-white;
                        padding: 0 10px;
                        color: main.$standard-white;
                        background-color: main.$standard-black;
                    }

                }


                .container-input {
                    width: 60%;
                    display: flex;
                    flex-direction: column;
                }
            }
        }
    }
}
</style>