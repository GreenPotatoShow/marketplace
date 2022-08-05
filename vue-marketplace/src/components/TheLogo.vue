<template>
    <h1><a href="index.html">{{text}}</a></h1>
</template>

<script>
export default {
    name: "TheLogo",
    props: ['text']
}
</script>

<style scoped>
h1 > a {
  padding-top: 0;
  font-size: 40pt;
  font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
  color: #fac136;
}
h1 > a:hover {
  color: #fcdc8f;
}
</style>