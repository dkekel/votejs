<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/vote_logo.png">
    <h1>CERN Spring Campus voting system</h1>
    <h3>Please select the interactive talk you are attending:</h3>
    <ul v-for="talk in talks" v-bind:key="talk.id">
      <li><a :href="`/vote/${talk.id}`">{{talk.title}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
      return {
          talks: [{id: 1, title: 'David vs. Goliath: MeteorJS vs. Spring Boot'}]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
