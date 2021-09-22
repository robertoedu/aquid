<template>
<div class="gui-card" :style="efeitoClick" @click="clickEfeito()" @mouseout="removeClickEfeito()" >
    <div class="gui-card__media">
        <img class="gui-card__img" :src="imagem" alt="" />
    </div>
    <div class="gui-card__details">
        <div class="gui-card__title">
            {{tituloF}}
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'filme',
    props: ['tituloF','imagem'],
    data() {
        return {
            efeitoClick:null
        }
    },
    methods:{
        clickEfeito: function () {
            console.log("clickEfeito");
            this.efeitoClick = 'transform: scale(1.9); margin-right: 110px; color:red';
        },

        removeClickEfeito() {
            console.log("removeClickEfeito");
            this.efeitoClick=null
        }
    }
}
</script>

<style lang="scss">

</style>
