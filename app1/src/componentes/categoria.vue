<template>
<div class="slider">
    <h3>{{titulo}}</h3>
    <span @mouseover="scrollEsquerda()" @mouseout="clearScroll()" class="handle handlePrev active">
        <i class="fa fa-caret-left" aria-hidden="true"></i>
    </span>

    <div ref="scroller" class="row">
        <div class="row__inner">
            <filme titulo="Assasino do Credo " imagem="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></filme>
            <filme v-for="filme in filmes" :key="filme.id" :titulo="filme.titulo" :imagem="filme.imagem"></filme>
    </div>
    <span @mouseover="scrollDireita()" @mouseout="clearScroll()" class="handle handleNext active">
        <i class="fa fa-caret-right" aria-hidden="true"></i>
    </span>
</div>
</div>
</template>

<script>
import filme from './filme.vue'
export default {
    name: 'categoria',
    props: ['titulo', 'filmes'],
    components: {
        filme
    },
    methods: {
        scrollDireita() {
            const self = this;
            this.intervalo = setInterval(function () {
                self.$refs.scroller.scrollLeft += 1
            }, 5);
        },
        scrollEsquerda() {

            this.intervalo = setInterval(() => {
                this.$refs.scroller.scrollLeft -= 1
            }, 5);
        },
        clearScroll() {
            clearInterval(this.intervalo);
        }
    }
}
</script>

<style lang="scss">

</style>
