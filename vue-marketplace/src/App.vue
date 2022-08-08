<template>
<div>
  <TheHeader/>
  <MainPart :text="'Товары'"/>
</div>
</template>

<script>
import TheHeader from "./components/TheHeader"
import MainPart from "./components/MainPart"
export default {
  name: 'App',
  components: {
    TheHeader,
    MainPart,
  }
}
</script>

<style>
body {
  background: rgb(68, 23, 97);
  background: linear-gradient(90deg, rgb(68, 23, 97) 0%, rgb(131, 35, 171) 50%, rgb(193, 54, 250) 100%);
}

a {
  text-decoration: none;
}

@font-face {
  font-family: "Agency FB";
  src: local("Agency FB"), url(assets/agencyfb_reg.ttf);
}
</style>
