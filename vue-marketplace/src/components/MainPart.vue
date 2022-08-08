<template>
    <div class="main-part">
        <div class="chapter">{{text}}</div>
    </div>
</template>

<script>
export default {
    name: 'MainPart',
    props: ['text']
}
</script>

<style scoped>
.main-part {
  display: flex;
  flex-flow: column wrap;
  background-color: white;
  border-radius: 20px;
  border: 2px solid white;
  padding: 10px 10px 10px 20px;
  margin: 0 40px 0 30px;
}

.chapter {
  border-bottom: 2px solid #441761;
  color: #8323ab;
  font-family: "Segoe UI Light", Tahoma, Geneva, Verdana, sans-serif, sans-serif;
  font-size: 20pt;
  font-weight: bold;
  margin-left: 0;
}
</style>