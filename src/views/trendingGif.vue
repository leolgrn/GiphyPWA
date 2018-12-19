<template>

    <div class="container">
        <div class="layout">
            <div v-if="gif.images.downsized.url" class="flex" v-for="gif in gifs1" :key="gif.id" 
            v-bind:style="{height:gif.vueHeight + '%', width:gif.vueWidth + '%'}" >
                <div class="flex-child">
                    <img :src="gif.images.downsized.url"/>
                </div>
            </div>
        </div>
        <div class="layout">
            <div v-if="gif.images.downsized.url" class="flex" v-for="gif in gifs2" :key="gif.id" 
            v-bind:style="{height:gif.vueHeight + '%', width:gif.vueWidth + '%'}" >
                <div class="flex-child">
                    <img :src="gif.images.downsized.url"/>
                </div>
            </div>
        </div>
        <div class="layout">
            <div v-if="gif.images.downsized.url" class="flex" v-for="gif in gifs3" :key="gif.id"
            v-bind:style="{height:gif.vueHeight + '%', width:gif.vueWidth + '%'}" >
                <div class="flex-child">
                    <img :src="gif.images.downsized.url"/>
                </div>
            </div>
        </div>
        <div class="layout">
            <div v-if="gif.images.downsized.url" class="flex" v-for="gif in gifs4" :key="gif.id"
            v-bind:style="{height:gif.vueHeight + '%', width:gif.vueWidth + '%'}" >
                <div class="flex-child">
                    <img :src="gif.images.downsized.url"/>
                </div>
            </div>
        </div>
        <div class="layout">
            <div v-if="gif.images.downsized.url" class="flex" v-for="gif in gifs5" :key="gif.id"
            v-bind:style="{height:gif.vueHeight + '%', width:gif.vueWidth + '%'}" >
                <div class="flex-child">
                    <img :src="gif.images.downsized.url"/>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import dataService from "../data.service"

export default {
    name: "trending_gif",
    data() {
        return {
            gifs1: null,
            gifs2: null,
            gifs3: null,
            gifs4: null,
            gifs5: null
        }
    },
    methods: {
        getTrendingGif() {
            dataService.getTrendingGif()
                .then(response => {
                    console.log(response.data.data);
                    let gifs = response.data.data;
                    gifs.forEach(gif => {
                        gif.vueHeight = this.getHeight(gif.images.downsized.height, gif.images.downsized.width);
                        gif.vueWidth = 100;
                    });
                    this.gifs1 = response.data.data.slice(0, 5);
                    this.gifs2 = response.data.data.slice(5, 10);
                    this.gifs3 = response.data.data.slice(10, 15);
                    this.gifs4 = response.data.data.slice(15, 20);
                    this.gifs5 = response.data.data.slice(20, 25);
                })
                .catch(err => console.log(err));
        },
        getHeight(height, width){
            return height*100/width;
        }
    },
    mounted() {
        this.getTrendingGif();
    }
};
</script>

<style>
.container{
    display: flex;
    height: 100vh;
}
.layout{
    display: flex;
    flex-flow: column;
    width: 100%;
}
.flex{
    display: flex;
    padding: 10px;
}

.flex-child{
    background-color: white;
    width: 100%;
    height: 100%;
    box-shadow: 1px 1px 16px #ccc;
}

img{
    width: 100%;
    height: 100%;
}
</style>