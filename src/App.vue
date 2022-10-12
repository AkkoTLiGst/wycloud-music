<template>
  <div id="app">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  import Main from "@/components/Main";
  import Footer from "@/components/Footer";
  export default {
    name: 'App',
    components: {Header, Main, Footer}
  }
</script>

<style>
  @import "assets/css/base.css";
  html, body{width: 100%; height: 100%;}
  #app {
    width: 100%; height: 100%;
    min-width: 668px;
  }
</style>
