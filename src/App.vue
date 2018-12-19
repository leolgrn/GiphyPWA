<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Trending GIFS</router-link> |
      <router-link to="/random/gif">Random GIFS</router-link> |
      <router-link to="/random/sticker">Random Stickers</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: rgb(224, 224, 224);
  }
  
  #nav {
    padding: 30px;
  }
  
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>