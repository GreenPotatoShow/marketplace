<template>
    <div class="header-cart">
        <h2>
            <a href="cart.html" class="cart">
            <img class="cart" src="../assets/cart.png">
            <div>{{text}}</div>
        </a></h2>
    </div>
</template>

<script>

export default{
    name: 'CartIcon',
    props: ['text']
}
</script>

<style scoped>
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