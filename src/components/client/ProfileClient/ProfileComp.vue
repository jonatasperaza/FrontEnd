<script setup>
</script>
<template>
    <section>
        <div class="container">
            <h1><span class="strong-pink">Meu</span> Perfil</h1>
            <div class="rowInputs">
                <div class="left">
                </div>
                <div class="right"><div class="ClientPic"></div>
            <div class="inputs"></div></div>
            </div>
            <span class="pinkLine"></span>
            <div class="orders">
                <div class="selectTypeOrder"></div>
                <div class="orderList"></div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
@use '../../../assets/main';
section{
    width: 100%;
    min-height: 100vh;
    background-color: main.$standard-black;
    .container{
        width: 60%;
        height: 100%;
        border: 2px solid white;
        margin: auto;
    }
    h1{
        color: white;
        font-size: 2rem;
        text-align: center;
        padding: 1rem;
        border-bottom: 2px solid white;
    }
    .rowInputs{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        .left{
            width: 40%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            border-right: 2px solid white;
        }
        .right{
            width: 60%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            .ClientPic{
                width: 100px;
                height: 100px;
                background-color: white;
                border-radius: 50%;
            }
            .inputs{
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                padding: 1rem;
                border: 2px solid white;
            }
        }
    }
}
div{
    border: 1px solid white;
    margin: 1rem 0;
}
</style>