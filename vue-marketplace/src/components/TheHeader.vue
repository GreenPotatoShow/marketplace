<template>
<div class="header">
    <TheLogo :text="'ИНТЕРНЕТ-МАГАЗИН'"/>

</div>
</template>

<script>
import TheLogo from "./TheLogo"
export default {
    name: 'TheHeader',
    components: {
        TheLogo
    }
}
</script>

<style scoped>

.header {
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  position: sticky;
  top: 0;
  background: rgb(68, 23, 97);
  background: linear-gradient(90deg, rgb(68, 23, 97) 0%, rgb(131, 35, 171) 50%, rgb(193, 54, 250) 100%);
}

.header-cart {
  display: flex;
  flex-flow: column wrap;
}

h2:hover {
  filter: brightness(115%);
}
h2:active {
  padding: 5px;
  margin: 13px -7px 13px -7px;
  background-color: #8323ab;
  border-radius: 7px;
  border: 2px solid #8323ab;
}

a.cart {
  font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
  color: #fac136;
}

img.cart {
  width: 60px;
  height: 50px;
  padding-left: 15px;
}

.counter {
  border-radius: 20px;
  border: 2px solid #441761;
  width: 20px;
  height: 20px;
  font-size: 13pt;
  background-color: #441761;
  left: 65px;
  bottom: -25px;
  text-align: center;
  position: relative;
  z-index: 1;
  margin-top: -24px;
}
</style>