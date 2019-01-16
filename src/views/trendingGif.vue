<template>

    <div class="card-columns">
        <div class="card gif-element" v-for="gif in gifs" :key="gif.id" >
            <img :src="gif.images.downsized.url" class="card-img-top" alt="...">
        </div>
    </div>

</template>

<script>
import dataService from "../data.service"

export default {
    name: "trending_gif",
    data() {
        return {
            gifs: null
        }
    },
    methods: {
        getTrendingGif() {
            dataService.getTrendingGif()
                .then(response => {
                    console.log(response.data.data);
                    this.gifs = response.data.data;
                    // gifs.forEach(gif => {
                    //     gif.vueHeight = this.getHeight(gif.images.downsized.height, gif.images.downsized.width);
                    //     gif.vueWidth = 100;
                    // });

                    // if(window.innerWidth > 1000){
                    //     this.gifs1 = gifs.slice(0, 5);
                    //     this.gifs2 = gifs.slice(5, 10);
                    //     this.gifs3 = gifs.slice(10, 15);
                    //     this.gifs4 = gifs.slice(15, 20);
                    //     this.gifs5 = gifs.slice(20, 25);
                    // }
                    
                })
                .catch(err => console.log(err));
        },
        // getHeight(height, width){
        //     return height*100/width;
        // }
    },
    mounted() {
        this.getTrendingGif();

    }
};
</script>

<style>

img{
    width: 100%;
    height: 100%;
}

.card-columns {
  @include media-breakpoint-only(lg) {
    column-count: 4;
  }
  @include media-breakpoint-only(xl) {
    column-count: 5;
  }
}

.card-columns{
    padding: 10%;
}

.gif-element{
    box-shadow: 1px 1px 16px #ccc;
    margin-bottom: 10%!important;
    border-radius: 30px;
}
</style>