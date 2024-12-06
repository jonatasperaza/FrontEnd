<script setup>
import { ref } from 'vue';
import ArrowDownBold from 'vue-material-design-icons/ArrowDownBold.vue';

const showDetails = ref(false);

const items = ref([
    { name: 'Caixa Pequena', observation: 'Frágil', quantity: 3, weight: 1.5, height: 0.5, width: 0.3 },
    { name: 'Mala Média', observation: 'Oversized', quantity: 1, weight: 10, height: 0.8, width: 0.4 },
    { name: 'Pacote', observation: 'Nenhuma', quantity: 5, weight: 0.2, height: 0.2, width: 0.1 },
]);

const toggleDetails = () => {
    showDetails.value = !showDetails.value;
};
</script>

<template>
    <section>
        <div class="access" @click="toggleDetails">
            <p>Exibir Todos os Dados</p>
            <ArrowDownBold :class="{ rotated: showDetails }" />
        </div>

        <transition name="slide">
            <div class="detailsContainer" v-if="showDetails">
                <div>
                    <h2>Itens:</h2>
                    <p>Confira os itens adicionados para o transporte:</p>
                    <div v-for="(item, index) in items" :key="index" class="row">
                        <div class="container-input">
                            <label>Item:</label>
                            <p>{{ item.name }}</p>
                        </div>
                        <div class="container-input">
                            <label>Observação:</label>
                            <p>{{ item.observation }}</p>
                        </div>
                        <div class="container-input">
                            <label>Quantidade:</label>
                            <p>{{ item.quantity }}</p>
                        </div>
                        <div class="container-input">
                            <label>Peso:</label>
                            <p>{{ item.weight }} kg</p>
                        </div>
                        <div class="container-input">
                            <label>Altura:</label>
                            <p>{{ item.height }} m</p>
                        </div>
                        <div class="container-input">
                            <label>Largura:</label>
                            <p>{{ item.width }} m</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Dados da Entrega:</h2>
                    <div class="grid-layout">
                        <div class="container-input">
                            <label>Endereço:</label>
                            <p>Rua A, 123 - Centro</p>
                        </div>
                        <div class="container-input">
                            <label>Cidade:</label>
                            <p>São Paulo</p>
                        </div>
                        <div class="container-input">
                            <label>CEP:</label>
                            <p>12345-678</p>
                        </div>
                        <div class="container-input">
                            <label>Complemento:</label>
                            <p>Apto 12</p>
                        </div>
                        <div class="container-input">
                            <label>Estado:</label>
                            <p>SP</p>
                        </div>
                        <div class="container-input">
                            <label>País:</label>
                            <p>Brasil</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Dados da Coleta:</h2>
                    <div class="grid-layout">
                        <div class="container-input">
                            <label>Endereço:</label>
                            <p>Rua B, 456 - Bairro X</p>
                        </div>
                        <div class="container-input">
                            <label>Cidade:</label>
                            <p>Rio de Janeiro</p>
                        </div>
                        <div class="container-input">
                            <label>CEP:</label>
                            <p>87654-321</p>
                        </div>
                        <div class="container-input">
                            <label>Complemento:</label>
                            <p>Casa</p>
                        </div>
                        <div class="container-input">
                            <label>Estado:</label>
                            <p>RJ</p>
                        </div>
                        <div class="container-input">
                            <label>País:</label>
                            <p>Brasil</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Dados do Pagamento:</h2>
                    <div class="row">
                        <div class="container-input">
                            <label>CPF:</label>
                            <p>123.456.789-00</p>
                        </div>
                        <div class="container-input">
                            <label>Email:</label>
                            <p>cliente@exemplo.com</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="container-input">
                            <label>Valor Total:</label>
                            <p>R$ 150,00</p>
                        </div>
                        <div class="container-input">
                            <label>Forma de Pagamento:</label>
                            <p>PIX</p>
                        </div>
                    </div>
                </div>

                <div class="button-container">
                    <button @click="addItem" class="add-button">Gerar Pedido</button>
                </div>
            </div>
        </transition>
    </section>
</template>

<style scoped lang="scss">
section {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 10rem;
}

.access {
    width: 100%;
    border-bottom: 2px solid #fc1d87;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: rgb(37, 37, 37);
    cursor: pointer;
}

.access p {
    margin: 0;
}

.access .rotated {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
}

.detailsContainer {
    width: 100%;
    display: flex;
    background-color: rgb(37, 37, 37);
    padding: 1rem;
    flex-direction: column;
    gap: 2rem;
    overflow: hidden;
}

.row {
    display: flex;
    gap: 1rem;
}

.container-input {
    flex: 1;
    display: flex;
    flex-direction: column;
}

p {
    margin: 0;
    color: #fff;
}

h2 {
    margin: 0;
    color: #fc1d87;
}

.slide-enter-active,
.slide-leave-active {
    transition: max-height 0.3s ease, opacity 0.3s ease;
    overflow: hidden;
}

.slide-enter-from {
    max-height: 0;
    opacity: 0;
}

.slide-enter-to {
    max-height: 1000px;
    opacity: 1;
}

.slide-leave-from {
    max-height: 1000px;
    opacity: 1;
}

.slide-leave-to {
    max-height: 0;
    opacity: 0;
}

.grid-layout {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.container-input {
    display: flex;
    flex-direction: column;
}

.button-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
}

.add-button {
    padding: 0.5rem 1rem;
    background-color: #fc1d87;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
}

.add-button:hover {
    background-color: #d01970;
}
</style>
